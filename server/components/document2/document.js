"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const pergamon_ui_components_1 = require("pergamon-ui-components");
const app_1 = require("../app");
const huc_ui_components_1 = require("huc-ui-components");
const aside_1 = require("./aside");
const header_1 = require("./header");
const annotation_1 = require("../../actions/annotation");
const textDivStyle = (activeAside) => ({
    boxSizing: 'border-box',
    minWidth: '648px',
    padding: '1em 1em 1em calc(65px + 1em)',
    transition: 'all 300ms',
    whiteSpace: 'normal',
    width: activeAside === huc_ui_components_1.Aside.None ? '100%' : 'calc(100% - 440px)',
});
const highlightTerm = (el, searchResults, keyword) => {
    const hi = async (term, options = {}) => {
        const Mark = await Promise.resolve().then(() => require('mark.js'));
        const inst = new Mark(el);
        inst.unmark();
        inst.mark(term, options);
    };
    if (el != null) {
        if (keyword != null) {
            hi(keyword, { accuracy: "exactly" });
        }
        else if (searchResults != null &&
            searchResults.hasOwnProperty('query') &&
            searchResults.query.hasOwnProperty('query_string') &&
            searchResults.query.query_string.hasOwnProperty('query')) {
            hi(searchResults.query.query_string.query);
        }
    }
};
class Document extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.state = {
            activeAside: huc_ui_components_1.Aside.Annotations,
            keyword: null,
        };
    }
    render() {
        return (React.createElement(app_1.default, null,
            React.createElement("section", { style: {
                    height: '100%',
                    whiteSpace: 'nowrap',
                } },
                React.createElement("article", { style: textDivStyle(this.state.activeAside) },
                    React.createElement(header_1.default, { rootAnnotation: this.props.annotations.rootAnnotation, searchResults: this.props.search.results }),
                    React.createElement("div", { style: { maxWidth: '700px', margin: 'auto' } },
                        React.createElement(pergamon_ui_components_1.RenderedText, { activateAnnotation: annotation_1.activateAnnotation, activeAnnotation: this.props.annotations.activeAnnotation, onRef: (el) => highlightTerm(el, this.props.search.results, this.state.keyword), root: this.props.annotations.rootAnnotation, tags: pergamon_ui_components_1.PergamonUITags }))),
                React.createElement(aside_1.default, { activateAnnotation: annotation_1.activateAnnotation, activeAnnotation: this.props.annotations.activeAnnotation, onChangeActiveAside: (activeAside) => {
                        const prevActiveAside = this.state.activeAside;
                        this.setState({ activeAside }, () => {
                            if (prevActiveAside === huc_ui_components_1.Aside.None || activeAside === huc_ui_components_1.Aside.None) {
                                setTimeout(() => {
                                    window.dispatchEvent(new Event('resize'));
                                }, 350);
                            }
                        });
                    }, onClickKeyword: (keyword) => this.setState({ keyword }), rootAnnotation: this.props.annotations.rootAnnotation }))));
    }
}
exports.default = Document;
