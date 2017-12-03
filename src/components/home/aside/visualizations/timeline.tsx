import * as React from 'react'
import { postSearch } from '../../../../actions/search';

export interface IState {
	aggregate: any[]
	events: any[]
	from: Date,
	to: Date,
}
class TimelineVisualization extends React.PureComponent<null, IState> {
	private timeline
	public state = {
		aggregate: [],
		events: [],
		from: null,
		to: null,
	}

	public async componentDidMount() {
		this.timeline = await import('timeline')
		this.init()
	}

	public render() {
		if (this.state.from == null) return null

		return (
			<this.timeline.default
				domains={[
					{
						heightRatio: .25,
						topOffsetRatio: .75,
						type: this.timeline.DomainType.Sparkline,
					},
					{
						heightRatio: .75,
						type: this.timeline.DomainType.Event,
						visibleRatio: .01,
					},
				]}
				fetchEvents={this.fetchEvents}
				{...this.state}
			/>
		)
	}

	private async init() {
		const response = await postSearch({
			aggs: {
				letter_per_year: {
					date_histogram: {
						field: 'date',
						interval: 'year',
					}
				}
			},
			size: 0,
		})
		const data = await response.json()
		const aggregate = data.aggregations.letter_per_year.buckets.map(b => ({
				count: b.doc_count,
				year: +b.key_as_string.slice(0, 4),
			}))

		this.setState({
			aggregate,
			from: new Date(aggregate.first().year, 0, 1),
			to: new Date(aggregate.last().year, 0, 1),
		})
	}

	private fetchEvents = async (from: Date, to: Date) => {
		const response = await postSearch({
			_source: [
				'date',
				'sender',
				'recipient',
			],
			query: {
				range: {
					date: {
						gte: from.toISOString(),
						lte: to.toISOString(),
					}
				}
			},
			size: 10000,
			sort: 'date',
		})
		const data = await response.json()
		const events = data.hits.hits
			.map(h => {
				const sender = h._source.sender.replace(/\s\(.*\)/, '')
				const recipient = h._source.recipient.replace(/\s\(.*\)/, '')
				return {
					date: new Date(h._source.date),
					title: `${sender} - ${recipient}`
				}
			})

		this.setState({
			events
		})

	}
}

export default TimelineVisualization
// events={[
// 	{ title: 'Test', date: new Date(1620, 3, 4) },
// 	{ title: 'T0st', date: new Date(1680, 3, 4) }
// ]}