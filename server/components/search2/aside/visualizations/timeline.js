"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const search_1 = require("../../../../actions/search");
class TimelineVisualization extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.state = {
            aggregate: [],
            events: [],
            from: null,
            to: null,
        };
        this.fetchEvents = async (from, to) => {
            const response = await search_1.postSearch({
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
            });
            const data = await response.json();
            const events = data.hits.hits
                .map(h => {
                const sender = h._source.sender.replace(/\s\(.*\)/, '');
                const recipient = h._source.recipient.replace(/\s\(.*\)/, '');
                return {
                    date: new Date(h._source.date),
                    title: `${sender} - ${recipient}`
                };
            });
            this.setState({
                events
            });
        };
    }
    async componentDidMount() {
        this.timeline = await Promise.resolve().then(() => require('timeline'));
        this.init();
    }
    render() {
        if (this.state.from == null)
            return null;
        return (React.createElement(this.timeline.default, Object.assign({ domains: [
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
            ], fetchEvents: this.fetchEvents }, this.state)));
    }
    async init() {
        const response = await search_1.postSearch({
            aggs: {
                letter_per_year: {
                    date_histogram: {
                        field: 'date',
                        interval: 'year',
                    }
                }
            },
            size: 0,
        });
        const data = await response.json();
        const aggregate = data.aggregations.letter_per_year.buckets.map(b => ({
            count: b.doc_count,
            year: +b.key_as_string.slice(0, 4),
        }));
        this.setState({
            aggregate,
            from: new Date(aggregate.first().year, 0, 1),
            to: new Date(aggregate.last().year, 0, 1),
        });
    }
}
exports.default = TimelineVisualization;
