"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const pergamon_ui_components_1 = require("pergamon-ui-components");
class Facets extends React.PureComponent {
    async componentDidMount() {
        this.searchkit = await Promise.resolve().then(() => require('searchkit'));
        this.searchkitManager = new this.searchkit.SearchkitManager("/api/documents/search", { searchUrlPath: '' });
        this.resultsListener = this.searchkitManager.addResultsListener(results => this.props.receiveSearchResults(this.query, results));
        this.searchkitManager.setQueryProcessor(queryObject => {
            const letterPerYear = {
                date_histogram: {
                    field: 'date',
                    interval: 'year',
                },
            };
            if (queryObject.hasOwnProperty('post_filter')) {
                queryObject.aggs.letter_per_year = {
                    filter: queryObject.post_filter,
                    aggs: {
                        letter_per_year: letterPerYear
                    }
                };
            }
            else {
                queryObject.aggs.letter_per_year = letterPerYear;
            }
            queryObject.size = 20;
            queryObject.sort = 'date';
            this.query = queryObject;
            return queryObject;
        });
        this.forceUpdate();
    }
    componentWillUnmount() {
        this.resultsListener();
    }
    render() {
        if (!this.searchkit)
            return null;
        const { RefinementListFilter, SearchkitProvider, ResetFilters, DynamicRangeFilter } = this.searchkit;
        return (React.createElement(SearchkitProvider, { searchkit: this.searchkitManager },
            React.createElement("div", { style: pergamon_ui_components_1.fontStyle },
                React.createElement(ResetFilters, null),
                React.createElement(DynamicRangeFilter, { field: "year", id: "range_year", title: "Date range" }),
                React.createElement(RefinementListFilter, { field: "sender", id: "count_per_sender", operator: "OR", size: 10, title: "Senders" }),
                React.createElement(RefinementListFilter, { field: "recipient", id: "count_per_recipient", operator: "OR", size: 10, title: "Recipients" }),
                React.createElement(RefinementListFilter, { field: "senderloc", id: "count_per_senderloc", operator: "OR", size: 10, title: "Sender Locations" }),
                React.createElement(RefinementListFilter, { field: "recipientloc", id: "count_per_recipientloc", operator: "OR", size: 10, title: "Recipient Locations" }),
                React.createElement(RefinementListFilter, { field: "correspondence", id: "count_per_correspondence", operator: "OR", size: 10, title: "Correspondence" }))));
    }
}
exports.default = Facets;
