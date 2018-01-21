import * as React from 'react'
import TimelineVisualization from './timeline'
import CoCitationGraph from './graph/cocitation'
import CorrespondentGraph from './graph/correspondent'
import { SearchResults } from 'huc-ui-components'

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
			backgroundColor: props.fullScreen ? 'initial' : '#f2f2f2',
			backgroundPosition: 0,
			backgroundSize: 'cover',
			border: props.fullScreen ? 'none' : '2px solid #ccc',
			borderRadius: '6px',
			cursor: 'pointer',
			display: 'block',
			fontWeight: props.active ? 'bold' : 'initial',
			marginBottom: '1em',
			padding: props.fullScreen ? 0 : '1.5em',
			transition: 'all 300ms',
			width: props.fullScreen ? '100px' : 'auto',
			...props.style,
		}}	
	>
		{props.children}
	</li>

enum Vis { Map, Timeline, CorrespondentGraph, CoCitationGraph }
export interface IProps {
	fullScreen: boolean
	handleFullScreen: () => void
	searchResults: SearchResults
}
export interface IState {
	active: Vis
}
class VisualizationsPanel extends React.PureComponent<IProps, IState> {
	public state = {
		active: Vis.Timeline
	}

	public render() {
		return (
			<div
				style={{
					display: this.props.fullScreen ? 'grid' : 'block',
					gridTemplateColumns: '1fr 5fr 3em',
					height: '100%',
					width: '100%',
				}}
			>
				<ul style={{ margin: '3em 0', padding: 0 }}>
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
						active={this.state.active === Vis.CorrespondentGraph}
						fullScreen={this.props.fullScreen}
						onClick={() => {
							this.setState({ active: Vis.CorrespondentGraph})
							this.props.handleFullScreen()
						}}
					>
						Correspondent graph
					</Li>
					<Li
						active={this.state.active === Vis.CoCitationGraph}
						fullScreen={this.props.fullScreen}
						onClick={() => {
							this.setState({ active: Vis.CoCitationGraph})
							this.props.handleFullScreen()
						}}
					>
						Cocitation graph
					</Li>
				</ul>
				{
					(
						this.state.active === Vis.Timeline &&
						this.props.fullScreen
					) &&
					<TimelineVisualization />
				}
				{
					(
						this.state.active === Vis.CorrespondentGraph &&
						this.props.fullScreen
					) &&
					<CorrespondentGraph
						searchResults={this.props.searchResults}
					/>
				}
				{
					(
						this.state.active === Vis.CoCitationGraph &&
						this.props.fullScreen
					) &&
					<CoCitationGraph
						searchResults={this.props.searchResults}
					/>
				}
			</div>
		)
	}
}

export default VisualizationsPanel