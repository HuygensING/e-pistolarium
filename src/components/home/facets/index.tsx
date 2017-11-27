import * as React from 'react'
import {
	RefinementListFilter,
	SearchkitComponent,
	SearchkitManager,
	SearchkitProvider,
	ResetFilters,
	SearchkitComponentProps,
	DynamicRangeFilter
} from 'searchkit'
import { SearchResults } from 'huc-ui-components'

const searchkit = new SearchkitManager("/api/documents/search", { searchUrlPath: '' })

export interface IProps extends SearchkitComponentProps {
	receiveSearchResults: (query: Object, results: SearchResults) => void
}
class Facets extends SearchkitComponent<IProps, null> {
	private resultsListener
	private query: Object

	public componentDidMount() {
		this.resultsListener = searchkit.addResultsListener(results =>
			this.props.receiveSearchResults(this.query, results)
		)
		searchkit.setQueryProcessor(queryObject => {
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
	}

	public componentWillUnmount() {
		this.resultsListener()
	}

	public render() {
		return (
			<SearchkitProvider searchkit={searchkit}>
				<div>
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

export default Facets