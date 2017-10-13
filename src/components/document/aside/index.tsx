import * as React from 'react'
import { Aside, Panel, HucOffCanvasAside } from 'huc-ui-components'
import { AnnotationList, IAnnotation } from 'pergamon-ui-components'
import { Visualizations, Visualization } from './visualisations'

export interface IProps {
	activateAnnotation: (a: IAnnotation) => void
	activeAnnotation: IAnnotation
	rootAnnotation: IAnnotation
}
const OffCanvasAside: React.SFC<IProps> = (props) =>
	<HucOffCanvasAside>
		<Panel type={Aside.Annotations}>
			<AnnotationList
				activateAnnotation={props.activateAnnotation}
				activeAnnotation={props.activeAnnotation}
				rootAnnotation={props.rootAnnotation}
			/>
		</Panel>
		<Panel type={Aside.Visualisations}>
			<Visualizations>
				<Visualization>Map</Visualization>
				<Visualization>Timeline</Visualization>
				<Visualization>Small graph</Visualization>
				<Visualization>Big graph</Visualization>
			</Visualizations>
		</Panel>
	</HucOffCanvasAside>

export default OffCanvasAside