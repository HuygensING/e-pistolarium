import * as React from 'react'
import { Aside, Panel, HucOffCanvasAside } from 'huc-ui-components'
import { AnnotationList, byStartEnd, IAnnotation, Keywords } from 'pergamon-ui-components'
import Metadata from './metadata'

export interface IProps {
	activateAnnotation: (a: IAnnotation) => void
	activeAnnotation: IAnnotation
	fetchKeywords: (root: IAnnotation) => void
	onChangeActiveAside: (a: Aside) => void
	rootAnnotation: IAnnotation
}
const OffCanvasAside: React.SFC<IProps> = (props) =>
	<HucOffCanvasAside
		onChangeActiveAside={props.onChangeActiveAside}
		open
	>
		<Panel
			title="Metadata"
			type={Aside.Metadata}
		>
			<Metadata
				fetchKeywords={props.fetchKeywords}
				rootAnnotation={props.rootAnnotation}
			/>
			<Keywords keywords={props.rootAnnotation.keywords} />
		</Panel>
		<Panel
			title="Named entities"
			type={Aside.Annotations}
		>
			<AnnotationList
				activateAnnotation={props.activateAnnotation}
				activeAnnotation={props.activeAnnotation}
				filter={((a: IAnnotation) =>
					['persName', 'placeName', 'geogName', 'name'].indexOf(a.type) > -1
				)}
				rootAnnotation={props.rootAnnotation}
				sort={byStartEnd}
			/>
			<h2 style={{ margin: '1em 0' }}>Notes</h2>
			<AnnotationList
				activateAnnotation={props.activateAnnotation}
				activeAnnotation={props.activeAnnotation}
				filter={((a: IAnnotation) =>
					['note'].indexOf(a.type) > -1
				)}
				rootAnnotation={props.rootAnnotation}
				sort={byStartEnd}
			/>
		</Panel>
	</HucOffCanvasAside>

export default OffCanvasAside