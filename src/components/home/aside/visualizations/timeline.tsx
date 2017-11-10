import * as React from 'react'
import Timeline from 'timeline'

export interface IState {
	aggregate: any[]
	from: Date,
	to: Date,
}
class TimelineVisualization extends React.Component<null, IState> {
	public state = {
		aggregate: [],
		from: null,
		to: null,
	}

	public async componentDidMount() {
		const response = await fetch(`/api/documents/search`, {
			body: JSON.stringify({
				aggs: {
					letter_per_year: {
						date_histogram: {
							field: 'date',
							interval: 'year',
						}
					}
				},
				size: 0,
			}),
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'POST',
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

	public render() {
		if (this.state.from == null) return null

		return (
			<Timeline
				aggregate={this.state.aggregate}
				domainRatio={.1}
				events={[]}
				from={this.state.from}
				to={this.state.to}
			/>
		)
	}
}

export default TimelineVisualization
// events={[
// 	{ title: 'Test', date: new Date(1620, 3, 4) },
// 	{ title: 'T0st', date: new Date(1680, 3, 4) }
// ]}