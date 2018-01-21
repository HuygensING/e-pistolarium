import * as React from 'react'
import { Aside, HucOffCanvasAside, Panel, SearchResults } from 'huc-ui-components';
import VisualizationsPanel from './visualizations'

interface IProps {
	searchResults: SearchResults
}
interface IState {
	fullScreen: boolean
}
class AsideComp extends React.PureComponent<IProps, IState> {
	public state = {
		fullScreen: false,
	}

	public render() {
		if (this.props.searchResults == null || this.props.searchResults.total !> 0) return null

		return (
			<HucOffCanvasAside
				fullScreen={this.state.fullScreen}
				onClose={() => this.setState({ fullScreen: false })}
			>
				<Panel
					style={{ height: 'calc(100% - 65px)' }}
					type={Aside.Visualisations}
				>
					<VisualizationsPanel
						fullScreen={this.state.fullScreen}
						handleFullScreen={() => this.setState({ fullScreen: true })}
						searchResults={this.props.searchResults}
					/>
				</Panel>
			</HucOffCanvasAside>
		)
	}
}

export default AsideComp