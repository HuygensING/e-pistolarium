import * as React from 'react'
import { Metadata } from 'pergamon-ui-components'
import { ISearchResults } from 'huc-ui-components'
import PrevNext from './prevnext'
import { Annotation } from 'pergamon-ui-components'

const Wrapper: React.SFC = (props) =>
	<div
		style={{
			display: 'grid',
			gridTemplateColumns: '3fr 1fr',
			margin: '3em auto',
			width: '550px',
		}}
	>
		{props.children}
	</div>

export interface IProps {
	searchResults: ISearchResults
	rootAnnotation: Annotation
}
const Header: React.SFC<IProps> = (props) =>
	<Wrapper>
		<Metadata rootAnnotation={props.rootAnnotation} />
		<div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', textAlign: 'right' }}>
			<a href="/search">Search</a>
			<PrevNext {...props} />
		</div>
	</Wrapper>

export default Header