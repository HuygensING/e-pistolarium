import * as React from 'react'
import { postSearch, post } from '../actions/search'

export interface ITags {
	key: string
	doc_count: number
}
export interface IState {
	tags: ITags[]
}
class TagAnalyzer extends React.Component<null, IState> {
	public state = {
		tags: []
	}

	public componentDidMount() {
		this.fetchTagCount()
		// this.fetchAttributesCount()
	}

	public render() {
		return (
			<ul>
				{this.state.tags.map(t =>
					<li
						key={t.key}
					>
						{t.key}
						({t.doc_count})
					</li>
				)}
			</ul>
		)
	}

	private async fetchTagCount() {
		const response = await post(
			'es/janus_annotations/_search',
			{
				size: 0,
				aggregations: {
					tags: {
						terms: {
							field: 'type',
							size: 10000,
						},
					}
				}
			}
		)
		const data = await response.json()

		this.setState({
			tags: data.aggregations.tags.buckets
		})
	}

	// private async fetchAttributesCount(tagName?) {
	// 	const response = await post(
	// 		'es/janus_annotations/_search',
	// 		{
	// 							aggregations: {
	// 										idid: {
	// 											terms: {
	// 												field: 'attrib.subtype'
	// 											}
	// 										}

	// 								}
	// 							}
	// 	)
	// 	const data = await response.json()

	// 	this.setState({
	// 		tags: data.aggregations.tags.buckets
	// 	})

	// }
}

export default TagAnalyzer
