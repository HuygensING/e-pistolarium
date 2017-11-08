import * as React from 'react'
import { Aside, HucOffCanvasAside, Panel } from 'huc-ui-components';
import VisualizationsPanel from './visualisations'

interface IState {
	fullScreen: boolean
}
class AsideComp extends React.Component<null, IState> {
	public state = {
		fullScreen: false,
	}

	public render() {
		return (
			<HucOffCanvasAside
				fullScreen={this.state.fullScreen}
				onClose={() => this.setState({ fullScreen: false })}
			>
				<Panel type={Aside.Visualisations}>
					<VisualizationsPanel
						fullScreen={this.state.fullScreen}
						handleFullScreen={() => this.setState({ fullScreen: true })}
					/>
				</Panel>
			</HucOffCanvasAside>
		)
	}
}

export default AsideComp