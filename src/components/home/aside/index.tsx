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
			>
				<Panel type={Aside.Visualisations}>
					<VisualizationsPanel
						handleFullScreen={() => this.setState({ fullScreen: true })}
					/>
				</Panel>
			</HucOffCanvasAside>
		)
	}
}

export default AsideComp