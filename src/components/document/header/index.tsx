import * as React from 'react'
import { Metadata } from 'pergamon-ui-components'
import { SearchResults } from 'huc-ui-components'
import history from '../../../store/history'
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
	fetchNextSearchResult: any
	lastSearchResult: SearchResults
	rootAnnotation: Annotation
}
const Header: React.SFC<IProps> = (props) =>
	<Wrapper>
		<Metadata rootAnnotation={props.rootAnnotation} />
		<div style={{ display: 'grid', gridTemplateRows: '1fr 1fr' }}>
			<button
				onClick={() => history.push('/')}
				style={{
					height: '2em',
				}}
			>
				&lt; search results
			</button>
			<PrevNext
				annotation={props.rootAnnotation}
				fetchNextSearchResult={props.fetchNextSearchResult}
				subset={props.lastSearchResult}
			/>
		</div>
	</Wrapper>

Header.defaultProps = {
	lastSearchResult: {
		hits: []
	}
}

export default Header