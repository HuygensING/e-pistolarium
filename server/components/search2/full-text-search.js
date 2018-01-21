"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const huc_ui_components_1 = require("huc-ui-components");
const full_text_search_1 = require("../../actions/full-text-search");
const pergamon_ui_components_1 = require("pergamon-ui-components");
class FullTextSearch extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.state = {
            requesting: false,
            suggestions: [],
        };
        this.search = async (query) => {
            this.setState({ requesting: true });
            full_text_search_1.searchFullText(query);
            const suggestions = await full_text_search_1.searchSemanticSuggestions(query);
            this.setState({ suggestions, requesting: false });
        };
    }
    render() {
        return (React.createElement(React.Fragment, null,
            React.createElement(huc_ui_components_1.HucFullTextSearchInput, { autoSuggest: full_text_search_1.autoSuggest, onChange: () => {
                    if (this.state.suggestions.length)
                        this.setState({ suggestions: [] });
                }, onKeyDown: (ev) => {
                    if (ev.keyCode === 13)
                        this.search(ev.target.value);
                }, query: '', search: (q) => this.search(q) }),
            React.createElement(pergamon_ui_components_1.SemanticSuggestions, { onClickSuggestion: full_text_search_1.searchFullText, requesting: this.state.requesting, semanticSuggestions: this.state.suggestions })));
    }
}
exports.default = FullTextSearch;
