import * as React from 'react'
import TimelineVisualization from './timeline'

export interface ILi {
	active: boolean
	fullScreen: boolean
	onClick: (ev: any) => void
	style?: React.CSSProperties
}
export const Li: React.SFC<ILi> = (props) =>
	<li
		onClick={props.onClick}
		style={{
			backgroundColor: '#f2f2f2',
			backgroundPosition: 0,
			backgroundSize: 'cover',
			border: props.fullScreen ? 'none' : '2px solid #ccc',
			borderRadius: '6px',
			cursor: 'pointer',
			display: 'block',
			fontSize: props.fullScreen ? '1em' : '1.5em',
			fontWeight: props.active ? 'bold' : 'initial',
			margin: props.fullScreen ? 0 : '1.5em',
			padding: props.fullScreen ? 0 : '1.5em',
			transition: 'all 300ms',
			width: props.fullScreen ? '100px' : 'auto',
			...props.style,
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
		active: Vis.Timeline
	}

	public render() {
		return (
			<div
				style={{
					display: this.props.fullScreen ? 'grid' : 'block',
					gridTemplateColumns: '1fr 5fr',
					height: '100%',
					width: '100%',
				}}
			>
				<ul>
					<Li
						active={this.state.active === Vis.Map}
						fullScreen={this.props.fullScreen}
						onClick={() => {
							this.setState({ active: Vis.Map})
							this.props.handleFullScreen()
						}}
						style={{
							backgroundImage: this.props.fullScreen ?
								'none' :
								`
									linear-gradient(
										to bottom,
										rgba(255, 255, 255, 0.85),
										rgba(80, 80, 80, 0.9)
									),
									url("/static/graphics/map.jpg")
								`,
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
						style={{
							backgroundImage: this.props.fullScreen ?
								'none' :
								`
									linear-gradient(
										to bottom,
										rgba(255, 255, 255, 0.6),
										rgba(0, 0, 0, 0.5)
									),
									url("/static/graphics/timeline.png")
								`,
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
						style={{
							backgroundImage: this.props.fullScreen ?
								'none' :
								`
									linear-gradient(
										to bottom,
										rgba(255, 255, 255, 0.8),
										rgba(100, 100, 100, 0.8)
									),
									url("/static/graphics/graph.png")
								`,
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
						style={{
							backgroundImage: this.props.fullScreen ?
								'none':
								`
									linear-gradient(
										to bottom,
										rgba(255, 255, 255, 0.8),
										rgba(100, 100, 100, 0.8)
									),
									url("/static/graphics/graph.png")
								`,
						}}
					>
						Big graph
					</Li>
				</ul>
				{
					(this.state.active === Vis.Timeline &&
					this.props.fullScreen) &&
					<TimelineVisualization />
				}
			</div>
		)
	}
}

export default VisualizationsPanel