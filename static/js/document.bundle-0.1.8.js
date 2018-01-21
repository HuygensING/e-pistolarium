webpackJsonp([5],{

/***/ 0:
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ 12:
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__props__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__document__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__(16);





Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["hydrate"])(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__document__["a" /* default */], Object.assign({}, Object(__WEBPACK_IMPORTED_MODULE_2__props__["a" /* getClientProps */])())), document.getElementById('container'));
window.addEventListener(__WEBPACK_IMPORTED_MODULE_4__constants__["b" /* STATE_CHANGE */], (ev) => {
    Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["render"])(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__document__["a" /* default */], Object.assign({}, ev.detail)), document.getElementById('container'));
});


/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pergamon_ui_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pergamon_ui_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_pergamon_ui_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_huc_ui_components__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_huc_ui_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_huc_ui_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__aside__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__header__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions_annotation__ = __webpack_require__(76);







const textDivStyle = (activeAside) => ({
    boxSizing: 'border-box',
    minWidth: '648px',
    padding: '1em 1em 1em calc(65px + 1em)',
    transition: 'all 300ms',
    whiteSpace: 'normal',
    width: activeAside === __WEBPACK_IMPORTED_MODULE_3_huc_ui_components__["Aside"].None ? '100%' : 'calc(100% - 440px)',
});
const highlightTerm = (el, searchResults, keyword) => {
    const hi = async (term, options = {}) => {
        const Mark = await __webpack_require__.e/* import() */(3).then(__webpack_require__.bind(null, 89));
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
class Document extends __WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"] {
    constructor() {
        super(...arguments);
        this.state = {
            activeAside: __WEBPACK_IMPORTED_MODULE_3_huc_ui_components__["Aside"].Annotations,
            keyword: null,
        };
    }
    render() {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__app__["a" /* default */], null,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("section", { style: {
                    height: '100%',
                    whiteSpace: 'nowrap',
                } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("article", { style: textDivStyle(this.state.activeAside) },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__header__["a" /* default */], { rootAnnotation: this.props.annotations.rootAnnotation, searchResults: this.props.search.results }),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: { maxWidth: '700px', margin: 'auto' } },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_pergamon_ui_components__["RenderedText"], { activateAnnotation: __WEBPACK_IMPORTED_MODULE_6__actions_annotation__["a" /* activateAnnotation */], activeAnnotation: this.props.annotations.activeAnnotation, onRef: (el) => highlightTerm(el, this.props.search.results, this.state.keyword), root: this.props.annotations.rootAnnotation, tags: __WEBPACK_IMPORTED_MODULE_1_pergamon_ui_components__["PergamonUITags"] }))),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__aside__["a" /* default */], { activateAnnotation: __WEBPACK_IMPORTED_MODULE_6__actions_annotation__["a" /* activateAnnotation */], activeAnnotation: this.props.annotations.activeAnnotation, onChangeActiveAside: (activeAside) => {
                        const prevActiveAside = this.state.activeAside;
                        this.setState({ activeAside }, () => {
                            if (prevActiveAside === __WEBPACK_IMPORTED_MODULE_3_huc_ui_components__["Aside"].None || activeAside === __WEBPACK_IMPORTED_MODULE_3_huc_ui_components__["Aside"].None) {
                                setTimeout(() => {
                                    window.dispatchEvent(new Event('resize'));
                                }, 350);
                            }
                        });
                    }, onClickKeyword: (keyword) => this.setState({ keyword }), rootAnnotation: this.props.annotations.rootAnnotation }))));
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Document;



/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_huc_ui_components__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_huc_ui_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_huc_ui_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pergamon_ui_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pergamon_ui_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pergamon_ui_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__metadata__ = __webpack_require__(72);




const OffCanvasAside = (props) => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_huc_ui_components__["HucOffCanvasAside"], { onChangeActiveAside: props.onChangeActiveAside, open: true },
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_huc_ui_components__["Panel"], { title: "Metadata", type: __WEBPACK_IMPORTED_MODULE_1_huc_ui_components__["Aside"].Metadata },
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__metadata__["a" /* default */], { rootAnnotation: props.rootAnnotation }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_pergamon_ui_components__["Keywords"], { keywords: props.rootAnnotation.keywords, onClickKeyword: props.onClickKeyword })),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_huc_ui_components__["Panel"], { title: "Named entities", type: __WEBPACK_IMPORTED_MODULE_1_huc_ui_components__["Aside"].Annotations },
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_pergamon_ui_components__["AnnotationList"], { activateAnnotation: props.activateAnnotation, activeAnnotation: props.activeAnnotation, filter: ((a) => ['persName', 'placeName', 'geogName', 'name', 'rs'].indexOf(a.type) > -1), rootAnnotation: props.rootAnnotation }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h2", { style: { margin: '1em 0' } }, "Notes"),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_pergamon_ui_components__["AnnotationList"], { activateAnnotation: props.activateAnnotation, activeAnnotation: props.activeAnnotation, filter: ((a) => ['note'].indexOf(a.type) > -1), rootAnnotation: props.rootAnnotation })));
/* harmony default export */ __webpack_exports__["a"] = (OffCanvasAside);


/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_annotation__ = __webpack_require__(76);


const downloadStringAsFile = (str, mimeType = 'text/plain') => {
    const a = document.createElement('a');
    const href = URL.createObjectURL(new Blob([str], { type: mimeType }));
    a.href = href;
    a.target = '_blank';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
};
const MetadataList = (props) => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("ul", { style: {
        fontFamily: "'Roboto', sans-serif",
        listStyle: 'none',
        margin: '3em 0',
        maxWidth: '550px',
        padding: 0,
    } }, props.children);
const MetadataItem = (props) => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", { style: {
        marginBottom: '1em',
    } }, props.children);
const Label = (props) => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("label", { style: {
        color: '#888',
        fontSize: '.7em',
    } }, props.children);
class Metadata extends __WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"] {
    componentDidMount() {
        const root = this.props.rootAnnotation;
        if (root.id != null)
            Object(__WEBPACK_IMPORTED_MODULE_1__actions_annotation__["b" /* fetchKeywords */])(root);
    }
    render() {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](MetadataList, null,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](MetadataItem, null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Label, null, "XML"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { onClick: async () => {
                            const response = await fetch(`/api/documents/${this.props.rootAnnotation.id}/orig`);
                            const xml = await response.text();
                            downloadStringAsFile(xml, 'text/xml');
                        } }, "Download"))),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](MetadataItem, null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Label, null, "ID"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null, this.props.rootAnnotation.id)),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](MetadataItem, null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Label, null, "CORRESPONDENCE"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null, this.props.rootAnnotation.metadata.get('correspondence'))),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](MetadataItem, null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Label, null, "DATE"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null, this.props.rootAnnotation.metadata.get('date'))),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](MetadataItem, null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Label, null, "SENDER"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null, this.props.rootAnnotation.metadata.get('sender'))),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](MetadataItem, null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Label, null, "SENDER LOCATION"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null, this.props.rootAnnotation.metadata.get('senderloc'))),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](MetadataItem, null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Label, null, "RECIPIENT"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null, this.props.rootAnnotation.metadata.get('recipient'))),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](MetadataItem, null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Label, null, "RECIPIENT LOCATION"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null, this.props.rootAnnotation.metadata.get('recipientloc')))));
    }
}
/* harmony default export */ __webpack_exports__["a"] = (Metadata);


/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pergamon_ui_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pergamon_ui_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_pergamon_ui_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__prevnext__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(10);




const Wrapper = (props) => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: {
        display: 'grid',
        gridTemplateColumns: '3fr 1fr',
        margin: '3em auto',
        width: '550px',
    } }, props.children);
const Header = (props) => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Wrapper, null,
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_pergamon_ui_components__["Metadata"], { rootAnnotation: props.rootAnnotation }),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: { display: 'grid', gridTemplateRows: '1fr 1fr' } },
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { onClick: () => Object(__WEBPACK_IMPORTED_MODULE_3__utils__["a" /* changeLocation */])('/search'), style: {
                height: '2em',
            } }, "< search results"),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__prevnext__["a" /* default */], Object.assign({}, props))));
/* harmony default export */ __webpack_exports__["a"] = (Header);


/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__link_to_root_annotation__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_search__ = __webpack_require__(11);



const PrevNext = (props) => {
    if (props.searchResults == null || !props.searchResults.hits.length)
        return null;
    const index = props.searchResults.hits.findIndex(h => h.id === props.rootAnnotation.id);
    const prev = props.searchResults.hits[index - 1];
    const next = props.searchResults.hits[index + 1];
    if (next == null)
        Object(__WEBPACK_IMPORTED_MODULE_2__actions_search__["a" /* fetchNextSearchResult */])();
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("ul", { style: {
            listStyle: 'none',
            margin: 0,
            padding: 0,
            textAlign: 'right'
        } },
        prev != null &&
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", { style: { display: 'inline-block' } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__link_to_root_annotation__["a" /* default */], { annotation: prev }, "< prev")),
        next != null &&
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", { style: { display: 'inline-block', marginLeft: '1em' } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__link_to_root_annotation__["a" /* default */], { annotation: next }, "next >"))));
};
/* harmony default export */ __webpack_exports__["a"] = (PrevNext);


/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(10);


const RootAnnotationLink = (props) => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { onClick: (ev) => {
        Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* changeLocation */])(`/documents/${props.annotation.id}`);
    } }, props.children);
/* harmony default export */ __webpack_exports__["a"] = (RootAnnotationLink);


/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_pergamon_ui_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_pergamon_ui_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_pergamon_ui_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reducers_utils__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__props__ = __webpack_require__(6);



const fetchRootAnnotation = async (id) => {
    const response = await fetch(`/api/documents/${id}`);
    const root = await response.json();
    return new __WEBPACK_IMPORTED_MODULE_0_pergamon_ui_components__["Annotation"](root);
};
const fetchKeywords = async (root) => {
    if (root.keywords != null)
        return;
    const response = await fetch(`/api/documents/${root.id}/keywords`);
    const data = await response.json();
    const rootAnnotation = Object(__WEBPACK_IMPORTED_MODULE_1__reducers_utils__["a" /* setProps */])(root, { keywords: data.keywords });
    Object(__WEBPACK_IMPORTED_MODULE_2__props__["b" /* updateState */])('SET_ROOT_ANNOTATION', { rootAnnotation });
};
/* harmony export (immutable) */ __webpack_exports__["b"] = fetchKeywords;

const setRootAnnotation = (id) => async (dispatch, getState) => {
    const state = getState();
    if (state.annotation.root.id === id)
        return;
    let rootAnnotation = state.rootAnnotations.find(a => a.id === id);
    if (rootAnnotation == null)
        rootAnnotation = new __WEBPACK_IMPORTED_MODULE_0_pergamon_ui_components__["Annotation"]();
    if (rootAnnotation.end == null) {
        rootAnnotation = await fetchRootAnnotation(id);
    }
    dispatch({
        rootAnnotation,
        type: 'SET_ROOT_ANNOTATION',
    });
};
/* unused harmony export setRootAnnotation */

const activateAnnotation = (annotationId) => {
    Object(__WEBPACK_IMPORTED_MODULE_2__props__["b" /* updateState */])('ACTIVATE_ANNOTATION', { annotationId });
};
/* harmony export (immutable) */ __webpack_exports__["a"] = activateAnnotation;

const deactivateAnnotation = () => async (dispatch, getState) => {
    Object(__WEBPACK_IMPORTED_MODULE_2__props__["b" /* updateState */])('DEACTIVATE_ANNOTATION');
};
/* unused harmony export deactivateAnnotation */



/***/ })

},[28]);