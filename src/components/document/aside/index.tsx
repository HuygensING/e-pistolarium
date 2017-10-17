import * as React from 'react'
import { Aside, Panel, HucOffCanvasAside } from 'huc-ui-components'
import { AnnotationList, IAnnotation } from 'pergamon-ui-components'

export interface IProps {
	activateAnnotation: (a: IAnnotation) => void
	activeAnnotation: IAnnotation
	rootAnnotation: IAnnotation
}
const OffCanvasAside: React.SFC<IProps> = (props) =>
	<HucOffCanvasAside open>
		<Panel type={Aside.Annotations}>
			<AnnotationList
				activateAnnotation={props.activateAnnotation}
				activeAnnotation={props.activeAnnotation}
				rootAnnotation={props.rootAnnotation}
			/>
		</Panel>
	</HucOffCanvasAside>

export default OffCanvasAside