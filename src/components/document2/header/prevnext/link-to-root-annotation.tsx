import * as React from 'react'
import { Annotation } from 'pergamon-ui-components'
import { changeLocation } from '../../../../utils'

export interface IProps {
	annotation: Annotation
}
const RootAnnotationLink: React.SFC<IProps> = (props) =>
	<button
		onClick={(ev) => {
			changeLocation(`/documents/${props.annotation.id}`)
		}}
	>
		{props.children}
	</button>

export default RootAnnotationLink