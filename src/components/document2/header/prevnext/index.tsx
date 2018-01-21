import * as React from 'react'
import { Annotation } from 'pergamon-ui-components'
import { SearchResults } from 'huc-ui-components'
import Link from './link-to-root-annotation'
import { fetchNextSearchResult } from '../../../../actions/search'

export interface IProps {
	rootAnnotation: Annotation
	searchResults: SearchResults
}
const PrevNext: React.SFC<IProps> = (props) => {
	if (props.searchResults == null || !props.searchResults.hits.length) return null

	const index = props.searchResults.hits.findIndex(h => h.id === props.rootAnnotation.id)
	const prev = props.searchResults.hits[index - 1]
	const next = props.searchResults.hits[index + 1]

	if (next == null) fetchNextSearchResult()

	return (
		<ul
			style={{
				listStyle: 'none',
				margin: 0,
				padding: 0,
				textAlign: 'right'
			}}
		>
			{
				prev != null &&
				<li style={{ display: 'inline-block' }}>
					<Link annotation={prev}>
						&lt; prev
					</Link>
				</li>
			}
			{
				next != null &&
				<li style={{ display: 'inline-block', marginLeft: '1em' }}>
					<Link annotation={next}>
						next &gt;
					</Link>
				</li>
			}
		</ul>
	)
}

export default PrevNext