"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const props_1 = require("../props");
const constants_1 = require("../constants");
exports.fetchNextSearchResult = async () => {
    const stateJson = sessionStorage.getItem(constants_1.PROPS);
    const state = JSON.parse(stateJson);
    if (state.search.results.hits.length) {
        const body = state.search.results.query;
        const size = state.search.size;
        body.from = body.hasOwnProperty('from') ? body.from + size : size;
        const data = await exports.postSearch(body);
        exports.receiveSearchResults(body, data);
    }
};
exports.receiveSearchResults = (query, results) => {
    results = {
        aggregations: results.aggregations,
        hits: results.hits.hits
            .map(hit => (Object.assign({ id: hit._id }, hit._source))),
        total: results.hits.total,
    };
    const next = query.from != null ? 'NEXT_' : '';
    props_1.updateState(`RECEIVE_${next}SEARCH_RESULTS`, { query, results });
};
exports.postSearch = async (body) => {
    const xhr = await exports.post('/api/documents/search', body);
    return await xhr.json();
};
exports.post = (url, body) => fetch(url, {
    body: JSON.stringify(body),
    headers: {
        'Content-Type': 'application/json',
    },
    method: 'POST'
});
