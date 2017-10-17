import * as React from 'react'

export const Visualizations: React.SFC = (props) =>
	<ul>
		{props.children}
	</ul>

export interface IOnClick {
	onClick: (ev: any) => void
}
export const Visualization: React.SFC<IOnClick> = (props) =>
	<li
		onClick={props.onClick}
		style={{
			backgroundColor: '#f2f2f2',
			border: '2px solid #ccc',
			borderRadius: '6px',
			cursor: 'pointer',
			display: 'block',
			margin: '2em',
			padding: '2em',
		}}	
	>
		{props.children}
	</li>

const VisualizationsPanel = (props) =>
	<Visualizations>
		<Visualization
			onClick={props.handleFullScreen}
		>
			Map
		</Visualization>
		<Visualization
			onClick={props.handleFullScreen}
		>
			Timeline
		</Visualization>
		<Visualization
			onClick={props.handleFullScreen}
		>
			Small graph
		</Visualization>
		<Visualization
			onClick={props.handleFullScreen}
		>
			Big graph
		</Visualization>
	</Visualizations>

export default VisualizationsPanel