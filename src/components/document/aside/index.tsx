import * as React from 'react'
import { Aside, Panel, HucOffCanvasAside } from 'huc-ui-components'
import { AnnotationList, Annotation, Keywords, TreeNode } from 'pergamon-ui-components'
import Metadata from './metadata'
import Tree from './tree'

export interface IProps {
	activateAnnotation: (id: string) => void
	activeAnnotation: Annotation
	fetchKeywords: (root: Annotation) => void
	onChangeActiveAside: (a: Aside) => void
	rootAnnotation: Annotation
	tree: TreeNode
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
		<Panel
			title="Annotation tree"
			style={{
				height: '100%',
				overflow: 'scroll',
				width: '300%',
			}}
			type={Aside.Visualisations}
		>
			<Tree text={props.rootAnnotation.text} tree={props.tree} />
		</Panel>
	</HucOffCanvasAside>

export default OffCanvasAside