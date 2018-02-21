import * as React from 'react'
import { Annotation } from 'pergamon-ui-components'

export interface IProps {
	annotation: Annotation
}
const RootAnnotationLink: React.SFC<IProps> = (props) =>
	<a href={`/documents/${props.annotation.id}`}>
		{props.children}
	</a>

export default RootAnnotationLink