import * as React from 'react'
import { IAnnotation } from 'pergamon-ui-components'
import { SearchResults } from 'huc-ui-components'
import Link from './link-to-root-annotation'

export interface IProps {
	annotation: IAnnotation
	fetchNextSearchResult: () => void
	subset: SearchResults
}
const PrevNext: React.SFC<IProps> = (props) => {
	if (!props.subset.hits.length) return null

	const index = props.subset.hits.findIndex(h => h.id === props.annotation.id)
	const prev = props.subset.hits[index - 1]
	const next = props.subset.hits[index + 1]

	if (next == null) props.fetchNextSearchResult()

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