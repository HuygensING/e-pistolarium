import * as React from 'react'
import { ISearchResults } from 'huc-ui-components'
import { fontStyle } from 'pergamon-ui-components'


export interface IProps {
	receiveSearchResults: (query: Object, results: ISearchResults) => void
}
class SKFacets extends React.PureComponent<IProps, null> {
	private query: Object
	private resultsListener
	private searchkit
	private searchkitManager

	public async componentDidMount() {
		this.searchkit = await import('searchkit')
		this.searchkitManager = new this.searchkit.SearchkitManager("/api/documents/search", { searchUrlPath: '' })
		this.resultsListener = this.searchkitManager.addResultsListener(results =>
			this.props.receiveSearchResults(this.query, results)
		)
		this.searchkitManager.setQueryProcessor(queryObject => {
			const letterPerYear = {
				date_histogram: {
					field: 'date',
					interval: 'year',
				},
			}

			if (queryObject.hasOwnProperty('post_filter')) {
				queryObject.aggs.letter_per_year = {
					filter: queryObject.post_filter,
					aggs: {
						letter_per_year: letterPerYear
					}
				}
			} else {
				queryObject.aggs.letter_per_year = letterPerYear
			}

			// TODO pass size from reducer
			queryObject.size = 20
			queryObject.sort = 'date'
			this.query = queryObject
			return queryObject
		})
		this.forceUpdate()
	}

	public componentWillUnmount() {
		this.resultsListener()
	}

	public render() {
		if (!this.searchkit) return null
		const {
			RefinementListFilter,
			SearchkitProvider,
			ResetFilters,
			DynamicRangeFilter
		} = this.searchkit

		return (
			<SearchkitProvider searchkit={this.searchkitManager}>
				<div style={fontStyle}>
					<ResetFilters />
					<DynamicRangeFilter
						field="year"
						id="range_year"
						title="Date range"
					/>
					<RefinementListFilter
						field="sender"
						id="count_per_sender"
						operator="OR"
						size={10}
						title="Senders"
					/>
					<RefinementListFilter
						field="recipient"
						id="count_per_recipient"
						operator="OR"
						size={10}
						title="Recipients"
					/>
					<RefinementListFilter
						field="senderloc"
						id="count_per_senderloc"
						operator="OR"
						size={10}
						title="Sender Locations"
					/>
					<RefinementListFilter
						field="recipientloc"
						id="count_per_recipientloc"
						operator="OR"
						size={10}
						title="Recipient Locations"
					/>
					{/* <RefinementListFilter
						field="language"
						id="count_per_language"
						operator="OR"
						size={10}
						title="Language"
					/> */}
					<RefinementListFilter
						field="correspondence"
						id="count_per_correspondence"
						operator="OR"
						size={10}
						title="Correspondence"
					/>
				</div>
			</SearchkitProvider>
		)
	}
}

export default SKFacets