"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const initialState = {
    aggregate: [],
    requestingSemanticSuggestions: false,
    results: null,
    semanticSuggestions: [],
    size: 20,
};
const getAggregate = (results) => {
    if (!results.hasOwnProperty('aggregations'))
        return [];
    const lpy = (results.aggregations.letter_per_year.hasOwnProperty('letter_per_year')) ?
        results.aggregations.letter_per_year.letter_per_year :
        results.aggregations.letter_per_year;
    return lpy.buckets.map(b => ({
        count: b.doc_count,
        year: +b.key_as_string.slice(0, 4),
    }));
};
exports.default = (state = initialState, type, changedState) => {
    let nextState = state;
    switch (type) {
        case 'RECEIVE_SEARCH_RESULTS': {
            nextState = utils_1.setProps(state, {
                aggregate: getAggregate(changedState.results),
                results: Object.assign({}, changedState.results, { query: changedState.query, id: JSON.stringify(changedState.query) })
            });
            break;
        }
        case 'RECEIVE_NEXT_SEARCH_RESULTS': {
            const results = utils_1.setProps(state.results, {
                hits: state.results.hits.concat(changedState.results.hits)
            });
            nextState = utils_1.setProps(state, { results });
            break;
        }
        default:
    }
    return nextState;
};
