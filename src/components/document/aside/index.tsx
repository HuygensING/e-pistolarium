import * as React from 'react'
import { Aside, Panel, HucOffCanvasAside } from 'huc-ui-components'
import { AnnotationList, Annotation, Keywords } from 'pergamon-ui-components'
import Metadata from './metadata'

export interface IProps {
	activateAnnotation: (id: string) => void
	activeAnnotation: Annotation
	onChangeActiveAside: (a: Aside) => void
	onClickKeyword: (keyword) => void
	rootAnnotation: Annotation
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
				rootAnnotation={props.rootAnnotation}
			/>
			<Keywords
				keywords={props.rootAnnotation.keywords}
				onClickKeyword={props.onClickKeyword}
			/>
		</Panel>
		<Panel
			title="Named entities"
			type={Aside.Annotations}
		>
			<AnnotationList
				activateAnnotation={props.activateAnnotation}
				activeAnnotation={props.activeAnnotation}
				filter={((a: Annotation) =>
					['persName', 'placeName', 'geogName', 'name', 'rs'].indexOf(a.type) > -1
				)}
				rootAnnotation={props.rootAnnotation}
			/>
			<h2 style={{ margin: '1em 0' }}>Notes</h2>
			<AnnotationList
				activateAnnotation={props.activateAnnotation}
				activeAnnotation={props.activeAnnotation}
				filter={((a: Annotation) =>
					['note'].indexOf(a.type) > -1
				)}
				rootAnnotation={props.rootAnnotation}
			/>
		</Panel>
	</HucOffCanvasAside>

export default OffCanvasAside