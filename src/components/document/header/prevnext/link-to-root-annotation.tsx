import * as React from 'react'
import { IAnnotation } from 'pergamon-ui-components'
import history from '../../../../store/history'

export interface IProps {
	annotation: IAnnotation
}
const RootAnnotationLink: React.SFC<IProps> = (props) =>
	<button
		onClick={(ev) => {
			history.push(`/documents/${props.annotation.id}`)
		}}
	>
		{props.children}
	</button>

export default RootAnnotationLink