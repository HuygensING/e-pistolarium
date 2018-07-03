import * as React from 'react'
import { postSearch } from '../../../../actions/search'
import '../../../../array'

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
		const aggregate = await this.fetchAggregate()
		const events = await this.fetchEvents(new Date(aggregate.first().year, 0, 1), new Date(aggregate.last().year, 0, 1))
		new this.timeline.default({
			aggregate,
			domains: [
				{
					heightRatio: .75,
					type: "EVENTS",
					visibleRatio: .0005,
				},
				{
					heightRatio: .125,
					hasIndicatorFor: 0,
					topOffsetRatio: .75,
					type: "SPARKLINE",
					visibleRatio: .2,
				},
				{
					heightRatio: .125,
					hasIndicatorFor: 0,
					topOffsetRatio: .875,
					type: "SPARKLINE",
				},
			],
			events,
			rootElement: document.getElementById('vistimeline')
		})
	}

	public render() {
		return (
			<div id="vistimeline" />
		)
	}

	private async fetchAggregate() {
		const data = await postSearch({
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

		return data.aggregations.letter_per_year.buckets.map(b => ({
			count: b.doc_count,
			year: +b.key_as_string.slice(0, 4),
		}))
	}

	private fetchEvents = async (from: Date, to: Date) => {
		const data = await postSearch({
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

		return data.hits.hits
			.map(h => {
				const sender = h._source.sender.replace(/\s\(.*\)/, '')
				const recipient = h._source.recipient.replace(/\s\(.*\)/, '')
				return {
					date: new Date(h._source.date),
					title: `${sender} - ${recipient}`
				}
			})
	}
}

export default TimelineVisualization
// events={[
// 	{ title: 'Test', date: new Date(1620, 3, 4) },
// 	{ title: 'T0st', date: new Date(1680, 3, 4) }
// ]}