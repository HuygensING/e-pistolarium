import * as React from 'react'
import PrevNext from './prevnext'
import { IAnnotation, Metadata } from 'pergamon-ui-components'

const Wrapper: React.SFC = (props) =>
	<div
		style={{
			display: 'grid',
			gridTemplateColumns: '1fr 1fr',
			margin: '3em auto',
			width: '550px',
		}}
	>
		{props.children}
	</div>

export interface IProps {
	fetchNextSearchResult: any
	lastSearchResult: any[]
	rootAnnotation: IAnnotation
}
const Header: React.SFC<IProps> = (props) =>
	<Wrapper>
		<Metadata rootAnnotation={props.rootAnnotation} />
		<PrevNext
			annotation={props.rootAnnotation}
			fetchNextSearchResult={props.fetchNextSearchResult}
			subset={props.lastSearchResult}
		/>
	</Wrapper>

Header.defaultProps = {
	lastSearchResult: []
}

export default Header