import * as React from 'react'

export const Visualizations: React.SFC = (props) =>
	<ul>
		{props.children}
	</ul>

export const Visualization: React.SFC = (props) =>
	<li
		style={{
			backgroundColor: '#f2f2f2',
			borderRadius: '6px',
			cursor: 'pointer',
			display: 'block',
			border: '2px solid #ccc',
			padding: '2em',
			margin: '2em',
		}}	
	>
		{props.children}
	</li>

