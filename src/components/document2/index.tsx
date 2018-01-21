import * as React from 'react'
import { hydrate, render } from 'react-dom'
import { getClientProps } from '../../props'
import Document from './document'
import { STATE_CHANGE } from '../../constants'

hydrate(<Document {...getClientProps()} />, document.getElementById('container'))

window.addEventListener(STATE_CHANGE, (ev: CustomEvent) => {
	render(<Document {...ev.detail} />, document.getElementById('container'))
})