import * as React from 'react'

export interface ILi {
	active: boolean
	fullScreen: boolean
	onClick: (ev: any) => void
}
export const Li: React.SFC<ILi> = (props) =>
	<li
		onClick={props.onClick}
		style={{
			backgroundColor: '#f2f2f2',
			border: props.fullScreen ? 'none' : '2px solid #ccc',
			borderRadius: '6px',
			cursor: 'pointer',
			display: 'block',
			fontWeight: props.active ? 'bold' : 'initial',
			margin: props.fullScreen ? 0 : '2em',
			padding: props.fullScreen ? 0 : '2em',
			transition: 'all 300ms',
			width: props.fullScreen ? '100px' : 'auto',
		}}	
	>
		{props.children}
	</li>

enum Vis { Map, Timeline, SmallGraph, BigGraph }
export interface IProps {
	fullScreen: boolean
	handleFullScreen: () => void
}
export interface IState {
	active: Vis
}
class VisualizationsPanel extends React.Component<IProps, IState> {
	public state = {
		active: null
	}

	public render() {
		return (
			<ul>
				<Li
					active={this.state.active === Vis.Map}
					fullScreen={this.props.fullScreen}
					onClick={() => {
						this.setState({ active: Vis.Map})
						this.props.handleFullScreen()
					}}
				>
					Map
				</Li>
				<Li
					active={this.state.active === Vis.Timeline}
					fullScreen={this.props.fullScreen}
					onClick={() => {
						this.setState({ active: Vis.Timeline})
						this.props.handleFullScreen()
					}}
				>
					Timeline
				</Li>
				<Li
					active={this.state.active === Vis.SmallGraph}
					fullScreen={this.props.fullScreen}
					onClick={() => {
						this.setState({ active: Vis.SmallGraph})
						this.props.handleFullScreen()
					}}
				>
					Small graph
				</Li>
				<Li
					active={this.state.active === Vis.BigGraph}
					fullScreen={this.props.fullScreen}
					onClick={() => {
						this.setState({ active: Vis.BigGraph})
						this.props.handleFullScreen()
					}}
				>
					Big graph
				</Li>
			</ul>
		)
	}
}

export default VisualizationsPanel