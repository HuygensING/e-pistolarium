import * as React from 'react'
import { hydrate, render } from 'react-dom'
import { getClientProps } from '../../props'
import Search from './search'
import { STATE_CHANGE } from '../../constants'

hydrate(<Search {...getClientProps()} />, document.getElementById('container'))

window.addEventListener(STATE_CHANGE, (ev: CustomEvent) => {
	render(<Search {...ev.detail} />, document.getElementById('container'))
})