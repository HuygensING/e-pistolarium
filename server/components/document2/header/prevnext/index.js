"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const link_to_root_annotation_1 = require("./link-to-root-annotation");
const search_1 = require("../../../../actions/search");
const PrevNext = (props) => {
    if (props.searchResults == null || !props.searchResults.hits.length)
        return null;
    const index = props.searchResults.hits.findIndex(h => h.id === props.rootAnnotation.id);
    const prev = props.searchResults.hits[index - 1];
    const next = props.searchResults.hits[index + 1];
    if (next == null)
        search_1.fetchNextSearchResult();
    return (React.createElement("ul", { style: {
            listStyle: 'none',
            margin: 0,
            padding: 0,
            textAlign: 'right'
        } },
        prev != null &&
            React.createElement("li", { style: { display: 'inline-block' } },
                React.createElement(link_to_root_annotation_1.default, { annotation: prev }, "< prev")),
        next != null &&
            React.createElement("li", { style: { display: 'inline-block', marginLeft: '1em' } },
                React.createElement(link_to_root_annotation_1.default, { annotation: next }, "next >"))));
};
exports.default = PrevNext;
