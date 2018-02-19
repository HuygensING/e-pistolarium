import * as path from 'path'
import * as fetch from 'node-fetch'

import * as express from 'express'
import * as proxy from 'express-http-proxy'

import * as React from 'react'
import { renderToString } from 'react-dom/server'

import { Annotation } from 'pergamon-ui-components'

import Document from '../components/document2/document'
import Search from '../components/search2/search'

import { getServerProps } from '../props'
import template from './template'

const fetchRootAnnotation = async (id: string): Promise<Annotation> => {
	const response = await fetch(`http://janus:8080/documents/${id}`)
	return await response.json()
}

const app = express()
app.disable('x-powered-by')

app.use(express.static(path.resolve(__dirname, '../../static_local')))
app.use(express.static(path.resolve(__dirname, '../../node_modules')))

app.use('/api', proxy('http://janus:8080'))

app.get('/', (req, res) => 
	res.sendFile(path.resolve(__dirname, '../../static_local/home/index.html'))
)

app.get('/documents/:id', async (req, res) => {
	const annotation = await fetchRootAnnotation(req.params.id)
	const appString = renderToString(<Document {...getServerProps({ annotations: { rootAnnotation: new Annotation(annotation) } })} />)
	res.send(template('document', appString, { annotations: { rootAnnotation: annotation } }))
})

app.get('/search', async (req, res) => {
	const appString = renderToString(<Search {...getServerProps()} />)
	res.send(template('search', appString, {}))
})

const PORT = 3000
app.listen(PORT)
console.log(`Listening on port ${PORT}`)