"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const search_1 = require("./search");
exports.autoSuggest = async (query) => {
    const body = {
        suggest: {
            woorden: {
                text: query,
                term: {
                    field: 'body',
                },
            },
        }
    };
    const data = await search_1.postSearch(body);
    return data.suggest.woorden[0].options.map(x => x.text);
};
exports.searchFullText = async (query) => {
    const esQuery = {
        query_string: {
            query: query
        }
    };
    const body = {
        aggs: {
            letter_per_year: {
                date_histogram: {
                    field: 'date',
                    interval: 'year',
                },
            },
        },
        query: esQuery,
        sort: 'date',
        size: 20,
    };
    const data = await search_1.postSearch(body);
    search_1.receiveSearchResults(esQuery, data);
};
exports.searchSemanticSuggestions = async (query) => {
    const xhr = await fetch(`/api/search`, {
        body: JSON.stringify({ query }),
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
    });
    const data = await xhr.json();
    return data.suggestions;
};
