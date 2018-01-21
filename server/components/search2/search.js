"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const huc_ui_components_1 = require("huc-ui-components");
const facets_1 = require("./facets");
const aside_1 = require("./aside");
const result_body_1 = require("./result-body");
const full_text_search_1 = require("./full-text-search");
const debounce = require("lodash.debounce");
const search_1 = require("../../actions/search");
const sparkline_1 = require("./sparkline");
const app_1 = require("../app");
const utils_1 = require("../../utils");
const Wrapper = (props) => React.createElement("div", { role: "search", style: {
        display: 'grid',
        gridTemplateColumns: '320px 4em auto',
        margin: '2em auto',
        maxWidth: '1100px',
    } }, props.children);
class Search extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.onScroll = () => {
            const doc = document.documentElement;
            if (doc.scrollHeight - (doc.scrollTop + doc.clientHeight) < doc.scrollHeight * 0.1) {
                search_1.fetchNextSearchResult();
            }
        };
        this.onScrollDebounced = debounce(this.onScroll, 100);
    }
    componentDidMount() {
        document.addEventListener('scroll', this.onScrollDebounced);
    }
    componentWillUnmount() {
        document.removeEventListener('scroll', this.onScrollDebounced);
    }
    render() {
        return (React.createElement(app_1.default, null,
            React.createElement(Wrapper, null,
                React.createElement("div", { style: { marginLeft: '2em' } },
                    React.createElement(full_text_search_1.default, Object.assign({}, this.props)),
                    React.createElement(facets_1.default, { receiveSearchResults: search_1.receiveSearchResults })),
                React.createElement("div", null),
                React.createElement("div", { style: {
                        marginBottom: '10em',
                        marginRight: '2em',
                    } },
                    React.createElement(huc_ui_components_1.HucSearchResults, { onClickResult: (result) => utils_1.changeLocation(`/documents/${result.id}`), resultBodyComponent: result_body_1.default, searchResults: this.props.search.results }),
                    React.createElement(sparkline_1.default, { aggregate: this.props.search.aggregate })),
                React.createElement(aside_1.default, { searchResults: this.props.search.results }))));
    }
}
exports.default = Search;
