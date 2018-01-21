/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/ 		if(executeModules) {
/******/ 			for(i=0; i < executeModules.length; i++) {
/******/ 				result = __webpack_require__(__webpack_require__.s = executeModules[i]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		6: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData === 0) {
/******/ 			return new Promise(function(resolve) { resolve(); });
/******/ 		}
/******/
/******/ 		// a Promise means "currently loading".
/******/ 		if(installedChunkData) {
/******/ 			return installedChunkData[2];
/******/ 		}
/******/
/******/ 		// setup Promise in chunk cache
/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		installedChunkData[2] = promise;
/******/
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = 'text/javascript';
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;
/******/
/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "" + chunkId + ".chunk-0.1.8.js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) {
/******/ 					chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				}
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		head.appendChild(script);
/******/
/******/ 		return promise;
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/js/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.fontStyle = {
    fontFamily: "'Roboto', sans-serif",
    fontSize: '18px',
    fontWeight: 300,
    lineHeight: '150%',
};
exports.fontReadStyle = {
    fontFamily: "'Merriweather', serif",
    fontSize: '18px',
    fontWeight: 300,
    lineHeight: '1.75em',
    maxWidth: '550px',
    marginLeft: 'auto',
    marginRight: 'auto',
};
exports.blueFontStyle = {
    color: '#085CAF',
    cursor: 'pointer',
    fontWeight: 'normal',
};
exports.grayLightBackground = {
    backgroundColor: '#f9f9f9',
};
exports.basicAnnotation = {
    borderBottom: '1px solid #ddd',
    cursor: 'pointer',
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const rendered_text_1 = __webpack_require__(13);
exports.RenderedText = rendered_text_1.default;
const annotation_list_1 = __webpack_require__(36);
exports.AnnotationList = annotation_list_1.default;
const button_1 = __webpack_require__(41);
exports.Button = button_1.default;
const annotation_1 = __webpack_require__(42);
exports.Annotation = annotation_1.default;
const tree_node_1 = __webpack_require__(7);
exports.TreeNode = tree_node_1.default;
const tags_1 = __webpack_require__(43);
exports.PergamonUITags = tags_1.default;
const semantic_suggestions_1 = __webpack_require__(57);
exports.SemanticSuggestions = semantic_suggestions_1.default;
const keywords_1 = __webpack_require__(59);
exports.Keywords = keywords_1.default;
const metadata_1 = __webpack_require__(60);
exports.Metadata = metadata_1.default;
const system_components_by_tags_1 = __webpack_require__(19);
exports.Display = system_components_by_tags_1.Display;
const default_styles_1 = __webpack_require__(1);
exports.fontStyle = default_styles_1.fontStyle;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.IGNORE_CLASSNAME = '__ignore';
exports.SYSTEM_TEXT_TYPE = '__text';
exports.SYSTEM_ROOT_TYPE = '__root';
exports.IMAGE_BASE_DIR = '/static/graphics';


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const header_1 = __webpack_require__(64);
exports.HucHeader = header_1.default;
const off_canvas_aside_1 = __webpack_require__(22);
exports.HucOffCanvasAside = off_canvas_aside_1.default;
exports.Aside = off_canvas_aside_1.Aside;
const full_text_search_input_1 = __webpack_require__(66);
exports.HucFullTextSearchInput = full_text_search_input_1.default;
const search_results_1 = __webpack_require__(68);
exports.HucSearchResults = search_results_1.default;
const panel_1 = __webpack_require__(23);
exports.Panel = panel_1.Panel;
const brand_label_1 = __webpack_require__(69);
exports.HucBrandLabel = brand_label_1.default;
const tooltip_1 = __webpack_require__(70);
exports.HucTooltip = tooltip_1.default;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const rend_1 = __webpack_require__(20);
exports.Span = (props) => React.createElement("span", { id: props.node.id(), style: Object.assign({}, rend_1.default(props), props.style) }, props.children);
exports.Div = (props) => React.createElement("div", { id: props.node.id(), style: Object.assign({}, rend_1.default(props), props.style) }, props.children);
exports.Ul = (props) => React.createElement("ul", { id: props.node.id(), style: Object.assign({}, rend_1.default(props), props.style) }, props.children);
exports.Li = (props) => React.createElement("li", { id: props.node.id(), style: Object.assign({}, rend_1.default(props), props.style) }, props.children);
exports.Italic = (props) => React.createElement("em", { id: props.node.id(), style: Object.assign({}, rend_1.default(props), { fontStyle: 'italic' }, props.style) }, props.children);
exports.H3 = (props) => React.createElement("h3", { id: props.node.id(), style: Object.assign({}, rend_1.default(props), props.style) }, props.children);
exports.None = () => null;


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_pergamon_ui_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_pergamon_ui_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_pergamon_ui_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers_search2__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducers_annotations__ = __webpack_require__(62);




const defaultProps = {
    annotations: {
        rootAnnotation: null,
        activeAnnotation: null,
    },
    search: {
        aggregate: [],
        requestingSemanticSuggestions: false,
        results: { total: 0, hits: [] },
        semanticSuggestions: [],
        size: 20,
    },
};
/* unused harmony export defaultProps */

const getClientProps = () => {
    let prevProps;
    const prevPropsJson = sessionStorage.getItem(__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* PROPS */]);
    if (prevPropsJson == null) {
        prevProps = defaultProps;
        sessionStorage.setItem(__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* PROPS */], JSON.stringify(defaultProps));
    }
    else {
        prevProps = JSON.parse(prevPropsJson);
    }
    if (window[__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* PROPS */]].hasOwnProperty('annotations')) {
        if (window[__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* PROPS */]].annotations.hasOwnProperty('rootAnnotation')) {
            window[__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* PROPS */]].annotations.rootAnnotation = new __WEBPACK_IMPORTED_MODULE_0_pergamon_ui_components__["Annotation"](window[__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* PROPS */]].annotations.rootAnnotation);
        }
        if (window[__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* PROPS */]].annotations.hasOwnProperty('activeAnnotation')) {
            window[__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* PROPS */]].annotations.activeAnnotation = new __WEBPACK_IMPORTED_MODULE_0_pergamon_ui_components__["Annotation"](window[__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* PROPS */]].annotations.activeAnnotation);
        }
    }
    return Object.assign({}, prevProps, window[__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* PROPS */]]);
};
/* harmony export (immutable) */ __webpack_exports__["a"] = getClientProps;

const getServerProps = (props = {}) => {
    return Object.assign({}, defaultProps, props);
};
/* unused harmony export getServerProps */

const reduce = (prevState, type, changedState) => {
    prevState.search = Object(__WEBPACK_IMPORTED_MODULE_2__reducers_search2__["a" /* default */])(prevState.search, type, changedState);
    prevState.annotations = Object(__WEBPACK_IMPORTED_MODULE_3__reducers_annotations__["a" /* default */])(prevState.annotations, type, changedState);
    return prevState;
};
const updateState = (type, changedState = {}) => {
    const prevStateJson = sessionStorage.getItem(__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* PROPS */]);
    const prevState = JSON.parse(prevStateJson);
    const nextState = reduce(prevState, type, changedState);
    window.dispatchEvent(new CustomEvent(__WEBPACK_IMPORTED_MODULE_1__constants__["b" /* STATE_CHANGE */], { detail: nextState }));
    sessionStorage.setItem(__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* PROPS */], JSON.stringify(nextState));
    return nextState;
};
/* harmony export (immutable) */ __webpack_exports__["b"] = updateState;



/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class TreeNode {
    constructor(raw) {
        this.segment = 'none';
        this.start = 0;
        Object.keys(raw).forEach(k => {
            const value = raw[k];
            if (value != null)
                this[k] = raw[k];
        });
    }
    id() {
        const suffix = (this.segment !== 'none') ? `_${this.segment}` : '';
        const row = (this.row != null) ? `_${this.row}` : '';
        return `${this.type}_${this.start}_${this.end}${row}${suffix}`;
    }
    clone() {
        return new TreeNode(this);
    }
}
exports.default = TreeNode;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const fontStyle = {
    fontFamily: "'Roboto', sans-serif",
    fontSize: '18px',
    fontWeight: 300,
};
exports.fontStyle = fontStyle;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const fontStyle = {
    fontFamily: "'Roboto', sans-serif",
    fontSize: '18px',
    fontWeight: 300,
};
exports.fontStyle = fontStyle;


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const changeLocation = (location) => { window.location.href = location; };
/* harmony export (immutable) */ __webpack_exports__["a"] = changeLocation;



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__props__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(16);


const fetchNextSearchResult = async () => {
    const stateJson = sessionStorage.getItem(__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* PROPS */]);
    const state = JSON.parse(stateJson);
    if (state.search.results.hits.length) {
        const body = state.search.results.query;
        const size = state.search.size;
        body.from = body.hasOwnProperty('from') ? body.from + size : size;
        const data = await postSearch(body);
        receiveSearchResults(body, data);
    }
};
/* harmony export (immutable) */ __webpack_exports__["a"] = fetchNextSearchResult;

const receiveSearchResults = (query, results) => {
    results = {
        aggregations: results.aggregations,
        hits: results.hits.hits
            .map(hit => (Object.assign({ id: hit._id }, hit._source))),
        total: results.hits.total,
    };
    const next = query.from != null ? 'NEXT_' : '';
    Object(__WEBPACK_IMPORTED_MODULE_0__props__["b" /* updateState */])(`RECEIVE_${next}SEARCH_RESULTS`, { query, results });
};
/* harmony export (immutable) */ __webpack_exports__["c"] = receiveSearchResults;

const postSearch = async (body) => {
    const xhr = await post('/api/documents/search', body);
    return await xhr.json();
};
/* harmony export (immutable) */ __webpack_exports__["b"] = postSearch;

const post = (url, body) => fetch(url, {
    body: JSON.stringify(body),
    headers: {
        'Content-Type': 'application/json',
    },
    method: 'POST'
});
/* unused harmony export post */



/***/ }),
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const node_1 = __webpack_require__(29);
const default_styles_1 = __webpack_require__(1);
const tree_builder_1 = __webpack_require__(30);
class RenderedText extends React.Component {
    constructor() {
        super(...arguments);
        this.constructTree = () => {
            if (this.props.root == null)
                return null;
            const tree = tree_builder_1.default(this.props.root);
            return tree.map(branch => this.nodeTreeToComponentTree(branch));
        };
    }
    render() {
        return (React.createElement("div", { ref: el => {
                if (this.props.onRef != null)
                    this.props.onRef(el);
            }, style: default_styles_1.fontReadStyle }, this.constructTree()));
    }
    nodeTreeToComponentTree(node) {
        const nodes = (node.hasOwnProperty('children') && node.children.length) ?
            node.children.map((child) => this.nodeTreeToComponentTree(child)) :
            this.props.root.text.slice(node.start, node.end);
        return (React.createElement(node_1.default, { activateAnnotation: this.props.activateAnnotation, activeAnnotation: this.props.activeAnnotation, node: node, key: node.id + Math.random().toString(), root: this.props.root, tags: this.props.tags }, nodes));
    }
}
exports.default = RenderedText;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const default_styles_1 = __webpack_require__(1);
const constants_1 = __webpack_require__(3);
const NotImplemented = (props) => React.createElement("div", { style: Object.assign({}, default_styles_1.fontStyle, { backgroundColor: '#EC7700', color: 'white', margin: '1em -.5em', padding: '2em 1.5em' }) },
    React.createElement("div", { style: {
            fontWeight: 'bold',
            fontSize: '1.3em',
        } },
        React.createElement("div", { style: { marginBottom: '1em' } },
            React.createElement("img", { style: {
                    width: '2em',
                    height: '2em',
                    display: 'inline-block',
                    verticalAlign: 'top',
                }, src: `${constants_1.IMAGE_BASE_DIR}/ui/caution-inv.svg` }),
            React.createElement("span", { style: {
                    display: 'inline-block',
                    fontSize: '1.5em',
                    lineHeight: '1.5em',
                    paddingLeft: '.5em',
                    verticalAlign: 'top',
                } }, "Warning")),
        props.tags.hasOwnProperty(props.node.type) ?
            React.createElement("span", null,
                "The tag <",
                props.node.type,
                "> is implemented, but the attributes are invalid:",
                React.createElement("pre", null, JSON.stringify(props.node.attributes, null, 2))) :
            React.createElement("span", null,
                "The tag <",
                props.node.type,
                "> is not implemented!")),
    React.createElement("br", null),
    "Wrapped on: \"",
    React.createElement("em", null, props.children),
    "\"",
    React.createElement("div", { style: {
            marginTop: '1em',
            fontStyle: 'italic',
        } },
        "This tag is not part of the Huygens ING TEI standard. Please visit",
        ' ',
        React.createElement("a", { style: {
                color: '#fff',
            }, href: "http://servicedesk.huygens.knaw.nl", target: "_blank" }, "Servicedesk.huygens.knaw.nl"),
        ' ',
        "to request support of this tag."));
exports.default = NotImplemented;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const hasOverlap = (a, b) => !(a.end <= b.start || a.start >= b.end) ||
    (a.start === b.start && a.end !== b.end) ||
    (a.start !== b.start && a.end === b.end);
exports.default = hasOverlap;


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const PROPS = 'pergamon_props';
/* harmony export (immutable) */ __webpack_exports__["a"] = PROPS;

const STATE_CHANGE = 'pergamon_state_change';
/* harmony export (immutable) */ __webpack_exports__["b"] = STATE_CHANGE;

const orange = '#FF5722';
/* unused harmony export orange */

const orangeLight = '#ff9d7e';
/* unused harmony export orangeLight */

const orangeRGB = '255, 87, 34';
/* unused harmony export orangeRGB */

const IGNORE_CLASSNAME = '__ignore';
/* unused harmony export IGNORE_CLASSNAME */

const SYSTEM_TEXT_TYPE = '__text';
/* unused harmony export SYSTEM_TEXT_TYPE */



/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const setProps = (obj, props) => (Object.assign({}, obj, props));
/* harmony export (immutable) */ __webpack_exports__["a"] = setProps;

const unsetProp = (obj, prop) => setProps(obj, { [prop]: null });
/* harmony export (immutable) */ __webpack_exports__["b"] = unsetProp;

const renameProp = (obj, oldKey, newKey) => {
    const nextObj = Object.assign({}, obj, {
        [newKey]: obj[oldKey]
    });
    delete nextObj[oldKey];
    return nextObj;
};
/* unused harmony export renameProp */

const replaceItemInArray = (array, ...items) => {
    const found = items.map(i => false);
    const nextArray = array.map(x => {
        const index = items.findIndex(y => y.id === x.id);
        if (index > -1)
            found[index] = true;
        return index > -1 ? items[index] : x;
    });
    const notFoundItems = found.reduce((prev, curr, index) => {
        if (!curr)
            prev.push(items[index]);
        return prev;
    }, []);
    return nextArray.concat(notFoundItems);
};
/* unused harmony export replaceItemInArray */

const updatePropInItemInArray = (array, item, props) => array.map((aItem, index) => (aItem.id === item.id) ? setProps(aItem, props) : aItem);
/* unused harmony export updatePropInItemInArray */



/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Display;
(function (Display) {
    Display[Display["None"] = 0] = "None";
    Display[Display["Inline"] = 1] = "Inline";
    Display[Display["Block"] = 2] = "Block";
})(Display = exports.Display || (exports.Display = {}));
;
exports.default = {
    ab: Display.Block,
    add: Display.Inline,
    anchor: Display.Inline,
    body: Display.Block,
    cell: Display.Block,
    choice: Display.Inline,
    closer: Display.Block,
    corr: Display.Inline,
    div: Display.Block,
    date: Display.Inline,
    figure: Display.Block,
    formula: Display.Inline,
    geogName: Display.Inline,
    graphic: Display.Block,
    head: Display.Block,
    hi: Display.Inline,
    item: Display.Block,
    l: Display.Block,
    label: Display.Inline,
    lb: Display.Block,
    lg: Display.Block,
    list: Display.Block,
    meta: Display.None,
    name: Display.Inline,
    note: Display.Block,
    opener: Display.Block,
    p: Display.Block,
    pb: Display.None,
    persName: Display.Inline,
    placeName: Display.Inline,
    q: Display.Block,
    row: Display.Block,
    rs: Display.Inline,
    seg: Display.Inline,
    sic: Display.Inline,
    space: Display.Block,
    table: Display.Block,
    text: Display.Block,
    title: Display.Block,
    TEI: Display.Block,
    teiHeader: Display.None,
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const system_tags_1 = __webpack_require__(5);
var Display;
(function (Display) {
    Display[Display["None"] = 0] = "None";
    Display[Display["Inline"] = 1] = "Inline";
    Display[Display["Block"] = 2] = "Block";
})(Display = exports.Display || (exports.Display = {}));
;
const systemComponentsByTags = {
    __text: {
        component: system_tags_1.Span,
        display: Display.Inline,
    },
    __root: {
        component: system_tags_1.Div,
        display: Display.Block,
    },
};
exports.default = systemComponentsByTags;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getRendValue = (node) => node.hasOwnProperty('attributes') &&
    node.attributes.has('rend') ?
    node.attributes.get('rend') :
    '';
const rendStyle = (props) => {
    const rend = exports.getRendValue(props.node);
    if (rend == null)
        return {};
    let rendStyle = {
        fontSize: rend === 'superscript' || rend === 'subscript' ? '.8em' : null,
        fontStyle: rend === 'italic' ? 'italic' : null,
        fontVariant: rend === 'case(smallcaps)' ? 'small-caps' : null,
        fontWeight: rend === 'bold' ? 'bold' : null,
        lineHeight: rend === 'superscript' || rend === 'subscript' ? 0 : null,
        textAlign: rend === 'align(right)' ? 'right' : null,
        textDecoration: rend === 'underline' ?
            'underline' :
            rend === 'strikethrough' ? 'line-through' : null,
        verticalAlign: rend === 'superscript' ?
            'super' :
            rend === 'subscript' ? 'sub' : null,
    };
    if (props.node.type === 'list') {
        let listStyleType = 'disc';
        if (rend === 'simple')
            listStyleType = 'none';
        else if (rend === 'numbered')
            listStyleType = 'decimal';
        rendStyle = Object.assign({}, rendStyle, { listStyleType });
    }
    return rendStyle;
};
exports.default = rendStyle;


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_huc_ui_components__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_huc_ui_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_huc_ui_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(10);



const Wrapper = (props) => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: {
        display: 'grid',
        gridTemplateRows: '10vh 90vh',
    } }, props.children);
/* harmony default export */ __webpack_exports__["a"] = ((props) => (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Wrapper, null,
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_huc_ui_components__["HucHeader"], { title: "Correspondence", menuItems: ["Home", "Correspondence", "About"], onClickLogo: () => Object(__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* changeLocation */])('/'), onClickMenuItem: (mi) => {
            if (mi === 'Home')
                Object(__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* changeLocation */])('/');
        }, onClickTitle: () => Object(__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* changeLocation */])('/') }),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_huc_ui_components__["HucBrandLabel"], null),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("main", null, props.children))));


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const default_styles_1 = __webpack_require__(9);
const tabs_1 = __webpack_require__(65);
const panel_1 = __webpack_require__(23);
exports.tabLabelWidth = 40;
var Aside;
(function (Aside) {
    Aside[Aside["None"] = 0] = "None";
    Aside[Aside["Annotations"] = 1] = "Annotations";
    Aside[Aside["Metadata"] = 2] = "Metadata";
    Aside[Aside["Visualisations"] = 3] = "Visualisations";
})(Aside = exports.Aside || (exports.Aside = {}));
const AsideComp = (props) => React.createElement("aside", { role: "complementary", style: Object.assign({}, default_styles_1.fontStyle, { bottom: 0, boxSizing: 'border-box', display: 'grid', gridTemplateColumns: `${exports.tabLabelWidth}px auto`, gridTemplateRows: '100%', height: '100%', overflow: 'hidden', position: 'fixed', right: props.activeAside === Aside.None ? `${exports.tabLabelWidth - props.width}px` : 0, top: 0, transition: 'right 300ms ease-in-out', whiteSpace: 'normal', width: props.fullScreen ? `calc(100% + ${exports.tabLabelWidth}px)` : `${props.width}px` }) }, props.children);
const CloseButton = (props) => React.createElement("div", { onClick: props.onClick, style: {
        cursor: 'pointer',
        fontSize: '1.5em',
        fontWeight: 'bold',
        marginBottom: '1em',
        position: 'absolute',
        right: '1em',
    } }, "\u2715");
class HucOffCanvasAside extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            activeAside: this.props.open ? React.Children.toArray(this.props.children)[0].props.type : Aside.None,
        };
        this.handleClose = () => {
            this.setState({ activeAside: Aside.None });
            if (this.props.onClose)
                this.props.onClose();
        };
    }
    componentWillUpdate(nextProps, nextState) {
        if (this.props.onChangeActiveAside != null && this.state.activeAside !== nextState.activeAside) {
            this.props.onChangeActiveAside(nextState.activeAside);
        }
    }
    render() {
        return (React.createElement(AsideComp, { activeAside: this.state.activeAside, fullScreen: this.props.fullScreen, width: this.props.width },
            React.createElement(tabs_1.Tabs, null, React.Children.map(this.props.children, (c) => this.tabs(c.props.type))),
            React.createElement("div", { style: {
                    backgroundColor: '#eee',
                    paddingTop: '65px',
                } },
                React.createElement(panel_1.PanelContainer, null,
                    React.createElement(CloseButton, { onClick: this.handleClose }),
                    React.Children.toArray(this.props.children).find((c) => c.props.type == this.state.activeAside)))));
    }
    tabs(name) {
        return {
            [Aside.Annotations]: React.createElement(tabs_1.Tab, { onClick: () => this.setState({ activeAside: Aside.Annotations }) },
                React.createElement("img", { alt: "Annotations tab icon", src: "/static/graphics/ui/huc-tab-annotations.svg", style: {
                        width: '1em',
                    } })),
            [Aside.Visualisations]: React.createElement(tabs_1.Tab, { onClick: () => this.setState({ activeAside: Aside.Visualisations }) },
                React.createElement("img", { alt: "Visualisations tab icon", src: "/static/graphics/ui/huc-tab-visualisations.svg", style: {
                        width: '1em',
                    } })),
            [Aside.Metadata]: React.createElement(tabs_1.Tab, { onClick: () => this.setState({ activeAside: Aside.Metadata }) },
                React.createElement("img", { alt: "Metadata tab icon", src: "/static/graphics/ui/huc-tab-metadata.svg", style: {
                        width: '1em',
                    } }))
        }[name];
    }
}
HucOffCanvasAside.defaultProps = {
    fullScreen: false,
    open: false,
    style: {},
    width: 400 + exports.tabLabelWidth,
};
exports.default = HucOffCanvasAside;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
exports.PanelContainer = (props) => React.createElement("section", { role: "tabpanel", style: {
        backgroundColor: '#EEE',
        boxSizing: 'border-box',
        height: '100%',
        overflow: 'auto',
        padding: '1.5em',
    } }, props.children);
exports.Panel = (props) => React.createElement("div", { style: props.style },
    props.title &&
        React.createElement("h2", { style: {
                marginBottom: '1em',
            } }, props.title),
    props.children);


/***/ }),
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const not_implemented_1 = __webpack_require__(14);
const TextTreeNode = (props) => {
    if (!props.tags.hasOwnProperty(props.node.type)) {
        console.error(`Component not found: ${props.node.type}`);
    }
    const TextTreeTag = props.tags.hasOwnProperty(props.node.type) ?
        props.tags[props.node.type].component :
        not_implemented_1.default;
    return (React.createElement(TextTreeTag, { activateAnnotation: props.activateAnnotation, activeAnnotation: props.activeAnnotation, custom: props.custom, node: props.node, root: props.root, tags: props.tags }, props.children));
};
exports.default = TextTreeNode;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const sort_1 = __webpack_require__(31);
const split_annotations_1 = __webpack_require__(32);
const add_row_1 = __webpack_require__(33);
const to_tree_1 = __webpack_require__(34);
const fill_gaps_1 = __webpack_require__(35);
const tree_node_1 = __webpack_require__(7);
exports.generateNodeId = (node, withSuffix = true) => {
    const suffix = node.hasOwnProperty('_first') ?
        '_first' :
        node.hasOwnProperty('_last') ?
            '_last' :
            node.hasOwnProperty('_segment') ?
                `_segment_${Math.round(Math.random() * 1000000)}` :
                '';
    return withSuffix ? `${node.type}_${node.annotationId}${suffix}` : `${node.type}_${node.annotationId}`;
};
const createTree = (root) => {
    let tree = root.annotations
        .map(a => a.toNode())
        .sort(sort_1.byDisplayStartEnd)
        .map(add_row_1.default())
        .sort(sort_1.byRowDisplayStartEnd)
        .reduce(split_annotations_1.splitAnnotations(), [])
        .map(add_row_1.default())
        .sort(sort_1.byStartEnd);
    tree = tree
        .reduce(to_tree_1.default, []);
    const rootNode = new tree_node_1.default({
        annotationId: root.id,
        attributes: root.attributes,
        start: root.start,
        end: root.end,
        type: root.type,
    });
    return fill_gaps_1.default(rootNode, tree);
};
exports.default = createTree;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const display_by_tag_name_1 = __webpack_require__(18);
exports.byStartEnd = (a, b) => {
    if (a.start > b.start)
        return 1;
    if (b.start > a.start)
        return -1;
    if (a.start === b.start) {
        if (a.end > b.end)
            return -1;
        if (b.end > a.end)
            return 1;
    }
    return 0;
};
exports.byDisplayStartEnd = (a, b) => {
    const aDisplay = display_by_tag_name_1.default.hasOwnProperty(a.type) ? display_by_tag_name_1.default[a.type] : display_by_tag_name_1.Display.Inline;
    const bDisplay = display_by_tag_name_1.default.hasOwnProperty(b.type) ? display_by_tag_name_1.default[b.type] : display_by_tag_name_1.Display.Inline;
    if (aDisplay !== bDisplay) {
        return (aDisplay === display_by_tag_name_1.Display.None) ?
            1 :
            (aDisplay === display_by_tag_name_1.Display.Inline) ?
                1 :
                -1;
    }
    else {
        return exports.byStartEnd(a, b);
    }
};
exports.byRowDisplayStartEnd = (a, b) => {
    if (a.row > b.row)
        return 1;
    else if (a.row < b.row)
        return -1;
    else
        return exports.byDisplayStartEnd(a, b);
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const has_overlap_1 = __webpack_require__(15);
exports.toSplitPoints = (splitPoints, curr, index, arr) => {
    if (index === 0)
        return splitPoints;
    const prevAnnotations = arr.slice(0, index);
    prevAnnotations.forEach((prev) => {
        if (has_overlap_1.default(prev, curr)) {
            if (prev.end > curr.start && prev.end < curr.end) {
                splitPoints.push(prev.end);
            }
            if (prev.start > curr.start && prev.start < curr.end) {
                splitPoints.push(prev.start);
            }
        }
    });
    return [...new Set(splitPoints)]
        .sort((a, b) => a - b);
};
exports.splitAnnotation = (node, splitPoints) => {
    if (node.start !== splitPoints[0]) {
        splitPoints = [node.start].concat(splitPoints);
    }
    if (node.end !== splitPoints[splitPoints.length - 1]) {
        splitPoints = splitPoints.concat(node.end);
    }
    const parts = splitPoints
        .reduce((agg, curr, index, arr) => {
        if (index === arr.length - 1)
            return agg;
        const clone = node.clone();
        clone.start = curr;
        clone.end = arr[index + 1];
        if (index === 0 && arr.length > 2)
            clone.segment = 'first';
        else if (index === (arr.length - 2) && arr.length > 2)
            clone.segment = 'last';
        else if (arr.length > 2)
            clone.segment = 'middle';
        agg.push(clone);
        return agg;
    }, []);
    return parts;
};
exports.splitAnnotations = () => {
    let splitPointIndex = 0;
    let splitPoints;
    const extractSplitPoints = (arr) => {
        splitPoints = arr.reduce(exports.toSplitPoints, [])
            .map((sp) => ({
            value: sp,
            active: false,
        }));
    };
    return (agg, curr, index, arr) => {
        if (splitPoints == null)
            extractSplitPoints(arr);
        if (!splitPoints.length) {
            agg.push(curr);
            return agg;
        }
        let currSplitPoint = splitPoints[splitPointIndex];
        if (curr.start > currSplitPoint.value) {
            if (arr.length < splitPointIndex - 1)
                splitPointIndex += 1;
            currSplitPoint = splitPoints[splitPointIndex];
        }
        if (currSplitPoint == null) {
            agg.push(curr);
            return agg;
        }
        const splitPointsInCurr = splitPoints.filter((sp) => {
            return sp.active && sp.value > curr.start && sp.value < curr.end;
        });
        if (splitPointsInCurr.length) {
            agg = agg.concat(exports.splitAnnotation(curr, splitPointsInCurr.map((sp) => sp.value)));
        }
        else {
            agg.push(curr);
        }
        for (let i = 0; i < splitPoints.length; i++) {
            const sp = splitPoints[i];
            if (sp.value === curr.start || sp.value === curr.end)
                sp.active = true;
        }
        return agg;
    };
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const has_overlap_1 = __webpack_require__(15);
const display_by_tag_name_1 = __webpack_require__(18);
const addRow = () => {
    const rows = [[]];
    return (annotation) => {
        if (display_by_tag_name_1.default[annotation.type] === display_by_tag_name_1.Display.None)
            return annotation;
        const space = [];
        for (let row = 0; row < rows.length; row++) {
            const annotationsInRow = rows[row];
            const isRowWithSpace = annotationsInRow.reduce((hasSpace, curr) => {
                return hasSpace && !has_overlap_1.default(annotation, curr);
            }, true);
            if (isRowWithSpace) {
                space[row] = null;
            }
            else {
                space[row] = annotationsInRow
                    .filter(a => has_overlap_1.default(annotation, a))
                    .some(a => display_by_tag_name_1.default.hasOwnProperty(a.type) && display_by_tag_name_1.default[a.type] === display_by_tag_name_1.Display.Block);
            }
        }
        const highestBlockIndex = space.lastIndexOf(true);
        let rowIndex = space.findIndex((x, i) => x == null && i > highestBlockIndex);
        if (rowIndex === -1) {
            const newLength = rows.push([annotation]);
            rowIndex = newLength - 1;
        }
        else {
            rows[rowIndex].push(annotation);
        }
        annotation.row = rowIndex;
        return annotation;
    };
};
exports.default = addRow;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const has_overlap_1 = __webpack_require__(15);
const toTree = (agg, curr, index, arr) => {
    if (agg.length === 0) {
        agg.push(curr);
        return agg;
    }
    const prevAnnotations = arr.slice(0, index);
    for (let i = prevAnnotations.length - 1; i >= 0; i--) {
        const prevAnnotation = prevAnnotations[i];
        if (has_overlap_1.default(prevAnnotation, curr) ||
            (prevAnnotation.type === 'figure' &&
                curr.type === 'graphic' &&
                prevAnnotation.start === curr.start &&
                prevAnnotation.end === curr.end)) {
            if (!prevAnnotation.hasOwnProperty('children'))
                prevAnnotation.children = [];
            prevAnnotation.children.push(curr);
            return agg;
        }
    }
    agg.push(curr);
    return agg;
};
exports.default = toTree;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tree_node_1 = __webpack_require__(7);
const constants_1 = __webpack_require__(3);
exports.reducer = (parent) => {
    let prevEnd = parent.start;
    return (agg, curr, index, arr) => {
        const prev = agg[agg.length - 1];
        curr.start = curr.start < parent.start ? parent.start : curr.start;
        curr.end = curr.end > parent.end ? parent.end : curr.end;
        if (prev == null && curr.start > parent.start) {
            agg.push(new tree_node_1.default({
                end: curr.start,
                start: parent.start,
                type: constants_1.SYSTEM_TEXT_TYPE,
            }));
            prevEnd = curr.start;
        }
        if (curr.start > prevEnd) {
            const start = prevEnd;
            const end = curr.start;
            agg.push(new tree_node_1.default({
                end,
                start,
                type: constants_1.SYSTEM_TEXT_TYPE,
            }));
        }
        agg.push(curr);
        prevEnd = curr.end > prevEnd ? curr.end : prevEnd;
        if (index === arr.length - 1 && prevEnd < parent.end) {
            agg.push(new tree_node_1.default({
                end: parent.end,
                start: prevEnd,
                type: constants_1.SYSTEM_TEXT_TYPE,
            }));
        }
        return agg;
    };
};
const fillGaps = (root, tree) => tree
    .reduce(exports.reducer(root), [])
    .map((subTree) => {
    if (subTree.hasOwnProperty('children')) {
        subTree.children = fillGaps(subTree, subTree.children);
    }
    return subTree;
});
exports.default = fillGaps;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const annotation_1 = __webpack_require__(37);
const AnnotationList = (props) => {
    let annotations = props.rootAnnotation.annotations;
    if (props.filter != null) {
        annotations = annotations.filter(props.filter);
    }
    if (props.sort != null) {
        annotations = annotations.sort(props.sort);
    }
    return (React.createElement("ul", { style: {
            listStyle: 'none',
            margin: 0,
            padding: 0,
        } }, annotations
        .map((annotation, index) => React.createElement(annotation_1.default, { activateAnnotation: props.activateAnnotation, activeAnnotation: props.activeAnnotation, annotation: annotation, key: index, rootAnnotation: props.rootAnnotation, tags: props.tags }))));
};
exports.default = AnnotationList;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const annotation_form_1 = __webpack_require__(38);
const index_1 = __webpack_require__(13);
const default_styles_1 = __webpack_require__(1);
const label_1 = __webpack_require__(39);
const AnnotationItem = (props) => React.createElement("li", { style: { minHeight: '2em' } },
    React.createElement("h4", { onClick: () => props.activateAnnotation(props.annotation.id), style: Object.assign({}, default_styles_1.fontStyle) }, (props.annotation.type === 'note' && props.annotation.attributes.has('n')) ?
        React.createElement("div", { style: { color: '#444', fontSize: '.85em' } },
            props.annotation.attributes.get('n'),
            React.createElement("br", null),
            props.rootAnnotation.text.slice(props.annotation.start, props.annotation.end)) :
        React.createElement(label_1.default, { annotation: props.annotation, rootAnnotation: props.rootAnnotation })),
    (props.activeAnnotation != null &&
        props.annotation.id === props.activeAnnotation.id) ?
        React.createElement(annotation_form_1.default, { activeAnnotation: props.activeAnnotation, rootAnnotation: props.rootAnnotation }) :
        (props.activeAnnotation != null &&
            props.activeAnnotation.text != null) ?
            React.createElement(index_1.default, { root: props.activeAnnotation, tags: props.tags }) :
            null);
exports.default = AnnotationItem;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const Ul = (props) => React.createElement("ul", { style: { margin: '1em 0' } }, props.children);
const Li = (props) => React.createElement("li", { style: {
        display: 'grid',
        gridTemplateColumns: '1fr 4fr',
    } },
    props.children,
    " ");
const Label = (props) => React.createElement("label", { style: {
        color: '#666',
        fontSize: '0.8em',
    } }, props.children);
const Immutable = (props) => React.createElement("div", { style: {
        color: '#666',
        fontStyle: 'italic',
    } }, props.children);
const AnnotationForm = (props) => React.createElement(Ul, null,
    React.createElement(Li, null,
        React.createElement(Label, null, "ID"),
        React.createElement(Immutable, null, props.activeAnnotation.id)),
    props.activeAnnotation.start < props.activeAnnotation.end &&
        React.createElement(Li, null,
            React.createElement(Label, null, "Text"),
            React.createElement(Immutable, null, props.rootAnnotation.text
                .slice(props.activeAnnotation.start, props.activeAnnotation.end))),
    React.createElement(Li, null,
        React.createElement(Label, null, "Type"),
        React.createElement(Immutable, null, props.activeAnnotation.type)),
    React.createElement(Li, null,
        React.createElement(Label, null, "Start"),
        React.createElement(Immutable, null, props.activeAnnotation.start)),
    React.createElement(Li, null,
        React.createElement(Label, null, "End"),
        React.createElement(Immutable, null, props.activeAnnotation.end)));
exports.default = AnnotationForm;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const constants_1 = __webpack_require__(3);
const error_label_1 = __webpack_require__(40);
class Label extends React.PureComponent {
    render() {
        const imgBasename = this.props.annotation.type === 'persName' ? 'person' : 'location';
        return (React.createElement("div", { style: {
                display: 'grid',
                gridTemplateColumns: 'calc(12px + .2em) auto',
            }, title: this.props.annotation.attributes.get('key') },
            React.createElement("img", { style: {
                    marginTop: '7px',
                    width: "12px",
                }, src: `${constants_1.IMAGE_BASE_DIR}/ui/${imgBasename}.svg` }),
            this.props.annotation.attributes.has('text') ?
                this.props.annotation.attributes.get('text') :
                React.createElement(error_label_1.default, Object.assign({}, this.props))));
    }
}
exports.default = Label;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const ErrorLabel = (props) => React.createElement("div", { style: { display: 'inline-block' } },
    React.createElement("div", null, props.rootAnnotation.text.slice(props.annotation.start, props.annotation.end)),
    React.createElement("div", { style: { color: 'red', fontSize: '.8em' } }, "Not identified"));
exports.default = ErrorLabel;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
exports.buttonBackgroundColor = '#EEE';
const Button = (props) => React.createElement("div", { style: Object.assign({ background: props.bare ? 'none' : exports.buttonBackgroundColor, borderRadius: '3px', border: props.bare ? 'none' : '1px solid #DDD', cursor: 'pointer', display: 'inline-block', fontSize: props.scale ? `${props.scale}em` : '1em', height: '1.5em', lineHeight: '1.5em', overflow: 'hidden', padding: '0 0.5em', textAlign: 'center', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }, props.style) }, props.children);
exports.default = Button;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = __webpack_require__(3);
const tree_node_1 = __webpack_require__(7);
class Annotation {
    constructor(raw) {
        this.annotations = [];
        this.attributes = new Map();
        this.metadata = new Map();
        this.start = 0;
        this.type = constants_1.SYSTEM_ROOT_TYPE;
        if (raw == null)
            return;
        Object.keys(raw).forEach(k => {
            if (k === 'annotations')
                this[k] = raw[k].map(a => new Annotation(a));
            else if (k === 'attributes' && !(raw[k] instanceof Map)) {
                const attrs = raw[k];
                Object.keys(attrs).forEach(attrKey => this.attributes.set(attrKey, attrs[attrKey]));
            }
            else if (k === 'body') {
                const body = raw[k];
                Object.keys(body).forEach(bodyKey => {
                    if (bodyKey === 'body')
                        this.text = body.body;
                    else
                        this.metadata.set(bodyKey, body[bodyKey]);
                });
            }
            else if (k === 'text') { }
            else
                this[k] = raw[k];
        });
        if (this.end == null && this.text != null)
            this.end = this.text.length;
    }
    toRawAnnotation() {
        const body = [...this.metadata]
            .reduce((prev, [k, v]) => {
            prev[k] = v;
            return prev;
        }, {});
        if (this.text != null)
            body.body = this.text;
        return {
            annotations: this.annotations.map(a => a.toRawAnnotation()),
            attributes: [...this.attributes]
                .reduce((prev, [k, v]) => {
                prev[k] = v;
                return prev;
            }, {}),
            body,
            end: this.end,
            id: this.id,
            keywords: this.keywords,
            source: this.source,
            start: this.start,
            target: this.target,
            type: this.type,
        };
    }
    clone() {
        return new Annotation(this.toRawAnnotation());
    }
    toNode() {
        return new tree_node_1.default({
            annotationId: this.id,
            attributes: this.attributes,
            end: this.end,
            start: this.start,
            type: this.type,
        });
    }
}
exports.default = Annotation;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const system_components_by_tags_1 = __webpack_require__(19);
const tags_1 = __webpack_require__(44);
const div_1 = __webpack_require__(45);
const anchor_1 = __webpack_require__(46);
const choice_1 = __webpack_require__(56);
const system_tags_1 = __webpack_require__(5);
const componentsByTags = Object.assign({}, system_components_by_tags_1.default, {
    ab: {
        component: system_tags_1.Div,
        display: system_components_by_tags_1.Display.Block,
    },
    abbr: {
        component: tags_1.Abbr,
        display: system_components_by_tags_1.Display.Inline,
    },
    add: {
        component: tags_1.Add,
        display: system_components_by_tags_1.Display.Inline,
    },
    anchor: {
        component: anchor_1.default,
        display: system_components_by_tags_1.Display.Inline,
    },
    body: {
        component: system_tags_1.Div,
        display: system_components_by_tags_1.Display.Block,
    },
    cell: {
        component: tags_1.Cell,
        display: system_components_by_tags_1.Display.Block,
    },
    choice: {
        component: choice_1.default,
        display: system_components_by_tags_1.Display.Inline,
    },
    closer: {
        component: system_tags_1.Div,
        display: system_components_by_tags_1.Display.Block,
    },
    corr: {
        component: tags_1.Corr,
        display: system_components_by_tags_1.Display.Inline,
    },
    date: {
        component: tags_1.DateTag,
        display: system_components_by_tags_1.Display.Inline,
    },
    del: {
        component: tags_1.Del,
        display: system_components_by_tags_1.Display.Inline,
    },
    div: {
        component: div_1.default,
        display: system_components_by_tags_1.Display.Block,
    },
    ex: {
        component: system_tags_1.Italic,
        display: system_components_by_tags_1.Display.Inline,
    },
    expan: {
        component: tags_1.Expan,
        display: system_components_by_tags_1.Display.Inline,
    },
    figure: {
        component: tags_1.Figure,
        display: system_components_by_tags_1.Display.Block,
    },
    formula: {
        component: system_tags_1.Italic,
        display: system_components_by_tags_1.Display.Inline,
    },
    g: {
        component: system_tags_1.Span,
        display: system_components_by_tags_1.Display.Inline,
    },
    geogName: {
        component: tags_1.GeogName,
        display: system_components_by_tags_1.Display.Inline,
    },
    graphic: {
        component: tags_1.Graphic,
        display: system_components_by_tags_1.Display.Block,
    },
    head: {
        component: system_tags_1.H3,
        display: system_components_by_tags_1.Display.Block,
    },
    hi: {
        component: system_tags_1.Span,
        display: system_components_by_tags_1.Display.Inline,
    },
    item: {
        component: tags_1.Item,
        display: system_components_by_tags_1.Display.Block,
    },
    l: {
        component: tags_1.Line,
        display: system_components_by_tags_1.Display.Block,
    },
    label: {
        component: system_tags_1.Span,
        display: system_components_by_tags_1.Display.Inline,
    },
    lb: {
        component: tags_1.Lb,
        display: system_components_by_tags_1.Display.Block,
    },
    lg: {
        component: tags_1.LineGroup,
        display: system_components_by_tags_1.Display.Block,
    },
    list: {
        component: tags_1.List,
        display: system_components_by_tags_1.Display.Block,
    },
    mentioned: {
        component: system_tags_1.Span,
        display: system_components_by_tags_1.Display.Inline,
    },
    meta: {
        component: system_tags_1.None,
        display: system_components_by_tags_1.Display.None,
    },
    name: {
        component: tags_1.Name,
        display: system_components_by_tags_1.Display.Inline,
    },
    note: {
        component: system_tags_1.Div,
        display: system_components_by_tags_1.Display.Block,
    },
    opener: {
        component: tags_1.Opener,
        display: system_components_by_tags_1.Display.Block,
    },
    p: {
        component: tags_1.P,
        display: system_components_by_tags_1.Display.Block,
    },
    pb: {
        component: system_tags_1.None,
        display: system_components_by_tags_1.Display.None,
    },
    persName: {
        component: tags_1.PersName,
        display: system_components_by_tags_1.Display.Inline,
    },
    placeName: {
        component: tags_1.PlaceName,
        display: system_components_by_tags_1.Display.Inline,
    },
    q: {
        component: system_tags_1.Div,
        display: system_components_by_tags_1.Display.Block,
    },
    row: {
        component: tags_1.Row,
        display: system_components_by_tags_1.Display.Block,
    },
    rs: {
        component: tags_1.Rs,
        display: system_components_by_tags_1.Display.Inline,
    },
    seg: {
        component: system_tags_1.Span,
        display: system_components_by_tags_1.Display.Inline,
    },
    sic: {
        component: tags_1.Sic,
        display: system_components_by_tags_1.Display.Inline,
    },
    space: {
        component: tags_1.Space,
        display: system_components_by_tags_1.Display.Block,
    },
    table: {
        component: tags_1.Table,
        display: system_components_by_tags_1.Display.Block,
    },
    text: {
        component: system_tags_1.Div,
        display: system_components_by_tags_1.Display.Block,
    },
    title: {
        component: tags_1.Title,
        display: system_components_by_tags_1.Display.Block,
    },
    TEI: {
        component: system_tags_1.Div,
        display: system_components_by_tags_1.Display.Block,
    },
    teiHeader: {
        component: system_tags_1.None,
        display: system_components_by_tags_1.Display.None,
    },
});
exports.default = componentsByTags;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const default_styles_1 = __webpack_require__(1);
const system_tags_1 = __webpack_require__(5);
const not_implemented_1 = __webpack_require__(14);
const constants_1 = __webpack_require__(3);
const rend_1 = __webpack_require__(20);
exports.Abbr = (props) => props.custom != null && props.custom.expanded ?
    null :
    React.createElement(system_tags_1.Span, Object.assign({}, props), props.children);
exports.Add = (props) => React.createElement(system_tags_1.Span, Object.assign({ style: {
        color: 'green',
    } }, props),
    "+ ",
    props.children);
exports.Cell = (props) => React.createElement("td", { style: {
        borderBottom: '1px solid #ddd',
        paddingRight: '.5em',
    } }, props.children);
exports.Corr = (props) => React.createElement(system_tags_1.Span, Object.assign({ style: {
        borderBottom: '1px solid #ddd',
        marginRight: '.2em',
    } }, props),
    props.children,
    React.createElement("sup", { style: {
            paddingLeft: '.3em',
            color: '#aaa',
        } }, "corr"));
exports.DateTag = (props) => React.createElement(system_tags_1.Span, Object.assign({ style: default_styles_1.basicAnnotation }, props),
    React.createElement(Icon, { src: `${constants_1.IMAGE_BASE_DIR}/ui/date.svg` }),
    props.children);
exports.Del = (props) => React.createElement(system_tags_1.Span, Object.assign({ style: { color: 'red', textDecoration: 'line-through' } }, props),
    React.createElement("span", { style: { color: 'black' } }, props.children));
exports.Expan = (props) => props.custom != null && props.custom.expanded ?
    React.createElement(system_tags_1.Span, Object.assign({}, props), props.children) :
    null;
exports.Figure = (props) => {
    const rend = rend_1.getRendValue(props.node);
    return (React.createElement(system_tags_1.Div, Object.assign({ style: {
            display: (rend === 'inline') ? 'inline' : 'block',
            margin: (rend === 'inline') ? 0 : 'auto',
            width: (rend === 'inline') ? 'auto' : '75%',
        } }, props)));
};
exports.Graphic = (props) => {
    let width;
    let height;
    const attrs = props.node.attributes;
    const exts = ['px', 'em', 'ex', 'vw', 'vh', '%', 'cm', 'mm', 'in', 'pt', 'rem', 'vm', 'pc', 'gd'];
    if (attrs.get('height') != null && attrs.get('width') != null) {
        const widthExt = exts.find(e => attrs.get('width').slice(-e.length) === e);
        const heightExt = exts.find(e => attrs.get('height').slice(-e.length) === e);
        if (exts.some(e => widthExt === e) &&
            exts.some(e => heightExt === e)) {
            const scale = attrs.get('scale') != null ? Number.parseFloat(attrs.get('scale')) : 1;
            width = Number.parseInt(attrs.get('width').slice(0, -widthExt.length)) * scale;
            height = Number.parseInt(attrs.get('height').slice(0, -heightExt.length)) * scale;
        }
    }
    return (React.createElement("img", { id: props.node.id(), src: `/static/graphics/${props.node.attributes.get('url')}`, style: {
            height: height != null ? height : 'auto',
            width: width != null ? width : 'auto',
            maxWidth: '100%',
        } }));
};
exports.GeogName = (props) => React.createElement(system_tags_1.Span, Object.assign({ style: default_styles_1.basicAnnotation }, props),
    React.createElement(Icon, { src: `${constants_1.IMAGE_BASE_DIR}/ui/location.svg` }),
    props.children);
exports.Item = (props) => React.createElement(system_tags_1.Li, Object.assign({ style: {
        padding: '0 0 0 0em',
        margin: '0 0 .5em 1em',
    } }, props));
exports.Lb = (props) => React.createElement(system_tags_1.Div, Object.assign({ style: {
        color: 'gray',
        display: 'block',
        fontSize: '.8em',
        marginLeft: '-4em',
        position: 'absolute',
        textAlign: 'right',
        width: '3em',
    } }, props), props.node.attributes.get('n'));
exports.Line = (props) => React.createElement(system_tags_1.Div, Object.assign({ style: {
        lineHeight: props.node.attributes.get('type') === 'stanza' ? '1em' : '2em',
        marginTop: props.node.attributes.get('type') === 'stanza' ? '.5em' : 'initial',
        marginBottom: props.node.attributes.get('type') === 'stanza' ? '.5em' : 'initial',
    } }, props), props.children);
exports.List = (props) => React.createElement(system_tags_1.Ul, Object.assign({ style: {
        padding: '0',
        margin: '.5em 0 .5em 0 ',
    } }, props));
exports.LineGroup = (props) => React.createElement(system_tags_1.Div, Object.assign({ style: {
        marginTop: '2em',
        marginLeft: props.node.attributes.get('type') === 'poem' ? '1em' : 'initial',
        fontStyle: props.node.attributes.get('type') === 'poem' ? 'italic' : 'initial',
    } }, props));
exports.Name = (props) => props.node.attributes.get('type') === 'person' ?
    React.createElement(exports.PersName, Object.assign({}, props)) :
    props.node.attributes.get('type') === 'place' ?
        React.createElement(exports.PlaceName, Object.assign({}, props)) :
        React.createElement(not_implemented_1.default, Object.assign({}, props));
exports.Opener = system_tags_1.Div;
exports.P = (props) => React.createElement(system_tags_1.Div, Object.assign({ style: { margin: '1em 0' } }, props), props.children);
const Icon = (props) => React.createElement("img", { src: props.src, style: {
        width: "12px",
        height: 'auto',
        marginRight: '.2em',
    } });
exports.PersName = (props) => React.createElement(system_tags_1.Span, Object.assign({ style: default_styles_1.basicAnnotation }, props),
    React.createElement(Icon, { src: `${constants_1.IMAGE_BASE_DIR}/ui/person.svg` }),
    props.children);
exports.PlaceName = (props) => React.createElement(system_tags_1.Span, Object.assign({ style: default_styles_1.basicAnnotation }, props),
    React.createElement(Icon, { src: `${constants_1.IMAGE_BASE_DIR}/ui/location.svg` }),
    props.children);
exports.Row = (props) => React.createElement("tr", { style: {
        borderBottom: '1px solid #aaa',
    } }, props.children);
exports.Rs = (props) => props.node.attributes.get('type') === 'person' ?
    React.createElement(exports.PersName, Object.assign({}, props)) :
    props.node.attributes.get('type') === 'place' ?
        React.createElement(exports.PlaceName, Object.assign({}, props)) :
        null;
exports.Sic = (props) => React.createElement(system_tags_1.Span, Object.assign({ style: {
        borderBottom: '1px solid #ddd',
        marginRight: '.2em',
    } }, props),
    props.children,
    React.createElement("sup", { style: {
            paddingLeft: '.3em',
            color: '#aaa',
        } }, "sic"));
exports.Space = (props) => React.createElement(system_tags_1.Div, Object.assign({ style: {
        height: '2em',
    } }, props));
exports.Table = (props) => React.createElement("table", { style: default_styles_1.fontStyle },
    React.createElement("tbody", null, props.children));
exports.Title = (props) => React.createElement(system_tags_1.Span, Object.assign({ style: default_styles_1.basicAnnotation }, props),
    React.createElement(Icon, { src: `${constants_1.IMAGE_BASE_DIR}/ui/book.svg` }),
    props.children);


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const system_tags_1 = __webpack_require__(5);
const default_styles_1 = __webpack_require__(1);
const Hr = ({ top = false }) => React.createElement("hr", { style: {
        height: '1px',
        backgroundColor: '#ddd',
        color: '#eee',
        width: '20px',
        border: 'none',
        marginLeft: '-10px',
        marginTop: top ? '1em' : '.5em',
        marginBottom: top ? '.5em' : '1em',
    } });
const Label = (props) => React.createElement("div", { style: Object.assign({}, default_styles_1.fontStyle, { color: '#999', fontSize: '.8em', marginBottom: '.5em' }) }, props.children);
const AuxDivTag = (props) => React.createElement("div", { style: { margin: '1em 0' } },
    React.createElement(Hr, { top: true }),
    React.createElement(Label, null, props.node.attributes.get('type') === 'para' ? 'ENVELOPE' : 'TRANSLATION'),
    React.createElement(system_tags_1.Div, Object.assign({}, props)),
    React.createElement(Hr, null));
const DivTag = (props) => (props.node.attributes.get('type') === 'comment' ||
    props.node.attributes.get('type') === 'notes') ?
    React.createElement(system_tags_1.None, null) :
    (props.node.attributes.get('type') === 'para' ||
        props.node.attributes.get('type') === 'translation') ?
        React.createElement(AuxDivTag, Object.assign({}, props)) :
        React.createElement(system_tags_1.Div, Object.assign({}, props));
exports.default = DivTag;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const huc_ui_components_1 = __webpack_require__(47);
const constants_1 = __webpack_require__(3);
const rendered_text_1 = __webpack_require__(13);
const default_styles_1 = __webpack_require__(1);
const AnchorComp = (props) => React.createElement("span", { className: constants_1.IGNORE_CLASSNAME, onClick: props.onClick, ref: props.setRef, style: Object.assign({}, default_styles_1.fontStyle, { backgroundColor: '#fff', border: '1px solid #aaa', borderRadius: '50%', cursor: 'pointer', fontSize: '10px', marginLeft: '.2em', marginRight: '.4em', padding: '.5em .4em', position: 'relative', top: '-.6em', whiteSpace: 'nowrap' }) }, props.children);
const minLeft = 18;
const tooltipWidth = 400;
class Anchor extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.state = {
            active: false,
            activeNote: null,
            height: null,
            left: null,
            top: null,
            width: null,
        };
        this.onResize = (ev) => {
            const { height, left, top, width } = this.el.getBoundingClientRect();
            this.setState({ height, left, top, width });
        };
    }
    componentDidMount() {
        const active = this.props.activeAnnotation != null &&
            this.props.activeAnnotation.id === this.props.node.annotationId;
        this.setState({ active });
        if (active)
            window.addEventListener('resize', this.onResize);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.onResize);
    }
    render() {
        let left = this.state.left - (tooltipWidth / 2) + this.state.width / 2;
        let shift = .5;
        if (left < 0) {
            shift = .5 - ((left - minLeft) / -tooltipWidth);
            left = minLeft;
        }
        let noteAnnotation;
        if (this.state.active) {
            noteAnnotation = this.props.root.annotations.find(a => a.type === 'note' &&
                a.hasOwnProperty('attributes') &&
                a.attributes.get('n') === this.props.activeAnnotation.attributes.get('n'));
            if (noteAnnotation != null) {
                noteAnnotation = noteAnnotation.clone();
                noteAnnotation.annotations = [noteAnnotation];
                noteAnnotation.text = this.props.root.text;
            }
        }
        return (React.createElement("span", { id: this.props.node.id() },
            React.createElement(AnchorComp, { onClick: ev => {
                    ev.stopPropagation();
                    this.props.activateAnnotation(this.props.node.annotationId);
                }, setRef: (el) => {
                    if (this.state.active && el && this.state.top == null) {
                        this.el = el;
                        const { height, left, top, width } = el.getBoundingClientRect();
                        this.setState({ height, left, top, width });
                    }
                } }, this.props.node.attributes.get('n')),
            this.state.active &&
                React.createElement(huc_ui_components_1.HucTooltip, { shift: shift, style: {
                        left,
                        top: this.state.top + this.state.height + 16 + window.scrollY,
                        width: `${tooltipWidth}px`,
                    } },
                    React.createElement(rendered_text_1.default, { root: noteAnnotation, tags: this.props.tags }))));
    }
}
exports.default = Anchor;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const header_1 = __webpack_require__(48);
exports.HucHeader = header_1.default;
const off_canvas_aside_1 = __webpack_require__(49);
exports.HucOffCanvasAside = off_canvas_aside_1.default;
exports.Aside = off_canvas_aside_1.Aside;
const full_text_search_input_1 = __webpack_require__(50);
exports.HucFullTextSearchInput = full_text_search_input_1.default;
const search_results_1 = __webpack_require__(52);
exports.HucSearchResults = search_results_1.default;
const panel_1 = __webpack_require__(53);
exports.Panel = panel_1.default;
const brand_label_1 = __webpack_require__(54);
exports.HucBrandLabel = brand_label_1.default;
const tooltip_1 = __webpack_require__(55);
exports.HucTooltip = tooltip_1.default;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const default_styles_1 = __webpack_require__(8);
const ColorBar = () => React.createElement("div", { style: {
        backgroundColor: '#268f75',
        height: '5px',
        left: 0,
        position: 'fixed',
        right: 0,
        top: 0,
    } });
const Header = (props) => React.createElement("header", { style: Object.assign({}, default_styles_1.fontStyle, { alignItems: 'center', backgroundColor: '#323232', color: '#FFF', display: 'grid', gridTemplateColumns: '1fr 2fr 1fr', height: '60px', paddingTop: '5px', position: 'relative', width: '100%', zIndex: 1 }) }, props.children);
const Menu = (props) => React.createElement("ul", { role: "menubar" }, props.children);
const MenuItem = (props) => React.createElement("li", { onClick: (ev) => props.onClickMenuItem(props.children, ev), role: "menuitem", style: {
        cursor: 'pointer',
        display: 'inline-block',
        fontSize: '0.85em',
        marginLeft: '1em',
    } }, props.children);
const Logo = (props) => React.createElement("img", { alt: "HuygensING logo", onClick: props.onClick, src: "http://design.huygens.knaw.nl/wp-content/themes/huc-design-system/images/logo-huygens-ing-inv.svg", style: {
        cursor: props.onClick == null ? 'default' : 'pointer',
        height: '2em',
        justifySelf: 'end',
        marginRight: '2em',
    } });
const Title = (props) => React.createElement("h1", { onClick: props.onClick, style: {
        cursor: props.onClick == null ? 'default' : 'pointer',
        fontWeight: 'normal',
        fontSize: '1em',
    } }, props.children);
const HucHeader = (props) => React.createElement(Header, null,
    React.createElement(ColorBar, null),
    React.createElement(Logo, { onClick: props.onClickLogo }),
    React.createElement(Title, { onClick: props.onClickTitle }, props.title),
    React.createElement("nav", { role: "navigation" },
        React.createElement(Menu, null, props.menuItems.map(mi => React.createElement(MenuItem, { key: mi, onClickMenuItem: props.onClickMenuItem }, mi)))));
HucHeader.defaultProps = {
    menuItems: [],
    onClickMenuItem: () => { console.error('Not implemented'); },
};
exports.default = HucHeader;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const default_styles_1 = __webpack_require__(8);
const tabLabelWidth = '40px';
const AsideComp = (props) => React.createElement("aside", { role: "complementary", style: Object.assign({}, default_styles_1.fontStyle, { bottom: 0, boxSizing: 'border-box', display: 'grid', gridTemplateColumns: `${tabLabelWidth} auto`, gridTemplateRows: '100%', height: '100%', left: props.activeAside === Aside.None ?
            `calc(100% - ${tabLabelWidth})` :
            props.fullScreen ?
                `-${tabLabelWidth}` :
                '50%', overflow: 'hidden', position: 'fixed', right: 0, top: 0, transition: 'left 300ms ease-in-out', whiteSpace: 'normal', width: props.fullScreen ? `calc(100% + ${tabLabelWidth})` : '50%' }) }, props.children);
const PanelContainer = (props) => React.createElement("section", { role: "tabpanel", style: {
        backgroundColor: '#EEE',
        boxSizing: 'border-box',
        height: '100%',
        overflow: 'auto',
        padding: '1.5em',
    } }, props.children);
const CloseButton = (props) => React.createElement("div", { onClick: props.onClick, style: {
        cursor: 'pointer',
        fontSize: '1.5em',
        fontWeight: 'bold',
        marginBottom: '1em',
        position: 'absolute',
        right: '1em',
    } }, "\u2715");
const Tabs = (props) => React.createElement("ul", { role: "tablist", style: {
        alignSelf: 'center',
        justifySelf: 'end',
        margin: 0,
        padding: 0,
        listStyle: 'none',
    } }, props.children);
const Tab = (props) => React.createElement("li", { onClick: props.onClick, role: "tab", style: {
        backgroundColor: '#eee',
        borderTopLeftRadius: '3px',
        borderBottomLeftRadius: '3px',
        cursor: 'pointer',
        marginBottom: '.5em',
        padding: '.5em .5em .2em .5em',
        width: tabLabelWidth,
    } }, props.children);
var Aside;
(function (Aside) {
    Aside[Aside["None"] = 0] = "None";
    Aside[Aside["Annotations"] = 1] = "Annotations";
    Aside[Aside["Metadata"] = 2] = "Metadata";
    Aside[Aside["Visualisations"] = 3] = "Visualisations";
})(Aside = exports.Aside || (exports.Aside = {}));
class HucOffCanvasAside extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            activeAside: this.props.open ? React.Children.toArray(this.props.children)[0].props.type : Aside.None,
        };
        this.handleClose = () => {
            this.setState({ activeAside: Aside.None });
            if (this.props.onClose)
                this.props.onClose();
        };
    }
    componentWillUpdate(nextProps, nextState) {
        if (this.props.onChangeActiveAside != null && this.state.activeAside !== nextState.activeAside) {
            this.props.onChangeActiveAside(nextState.activeAside);
        }
    }
    render() {
        return (React.createElement(AsideComp, { activeAside: this.state.activeAside, fullScreen: this.props.fullScreen },
            React.createElement(Tabs, null, React.Children.map(this.props.children, (c) => this.tabs(c.props.type))),
            React.createElement("div", { style: {
                    backgroundColor: '#eee',
                    paddingTop: '65px',
                } },
                React.createElement(PanelContainer, null,
                    React.createElement(CloseButton, { onClick: this.handleClose }),
                    React.Children.toArray(this.props.children).find((c) => c.props.type == this.state.activeAside)))));
    }
    tabs(name) {
        return {
            [Aside.Annotations]: React.createElement(Tab, { onClick: () => this.setState({ activeAside: Aside.Annotations }) },
                React.createElement("img", { alt: "Annotations tab icon", src: "http://design.huygens.knaw.nl/wp-content/themes/huc-design-system/images/icons/huc-tab-annotations.svg", style: {
                        width: '1em',
                    } })),
            [Aside.Visualisations]: React.createElement(Tab, { onClick: () => this.setState({ activeAside: Aside.Visualisations }) },
                React.createElement("img", { alt: "Visualisations tab icon", src: "http://design.huygens.knaw.nl/wp-content/themes/huc-design-system/images/icons/huc-tab-visualisations.svg", style: {
                        width: '1em',
                    } })),
            [Aside.Metadata]: React.createElement(Tab, { onClick: () => this.setState({ activeAside: Aside.Metadata }) },
                React.createElement("img", { alt: "Metadata tab icon", src: "http://design.huygens.knaw.nl/wp-content/themes/huc-design-system/images/icons/huc-tab-metadata.svg", style: {
                        width: '1em',
                    } }))
        }[name];
    }
}
HucOffCanvasAside.defaultProps = {
    fullScreen: false,
    open: false,
};
exports.default = HucOffCanvasAside;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const default_styles_1 = __webpack_require__(8);
const auto_suggest_1 = __webpack_require__(51);
const Section = (props) => React.createElement("section", { style: Object.assign({}, default_styles_1.fontStyle, { position: 'relative' }) }, props.children);
const Label = (props) => React.createElement("label", { htmlFor: "full-text-search-input-input", id: "full-text-search-input-label", style: {
        display: 'block',
        fontWeight: 'bold',
        marginBottom: '.5em',
    } }, props.children);
const Input = (props) => React.createElement("input", { "aria-labelledby": "full-text-search-input-label", id: "full-text-search-input-input", onChange: props.onChange, onKeyDown: props.onKeyDown, role: "searchbox", style: {
        backgroundColor: '#fff',
        border: '1px solid #eee',
        boxSizing: 'border-box',
        fontSize: '.7em',
        padding: '0.5em',
        width: 'calc(100% - 100px)',
    }, value: props.value });
const Button = (props) => React.createElement("button", { onClick: props.onClick, style: {
        backgroundColor: '#eee',
        border: 'none',
        boxSizing: 'border-box',
        fontSize: '.7em',
        padding: '0.6em',
        width: '100px',
    } }, props.children);
class FullTextSearchInput extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            activeSuggestion: null,
            query: this.props.query || '',
            suggestions: []
        };
        this.activateSuggestion = (suggestion) => {
            this.setState({
                query: suggestion,
                suggestions: [],
            });
            this.props.onChange(suggestion);
            this.search(suggestion);
        };
        this.search = (query, ev) => {
            this.setState({ suggestions: [] });
            this.props.search(query, ev);
        };
        this.setActiveSuggestion = (keyCode) => {
            let activeSuggestion = this.state.activeSuggestion;
            if (typeof activeSuggestion === 'string') {
                const index = this.state.suggestions.indexOf(activeSuggestion);
                if (keyCode === 40) {
                    activeSuggestion = (index < (this.state.suggestions.length - 1)) ?
                        this.state.suggestions[index + 1] :
                        this.state.suggestions[0];
                }
                if (keyCode === 38) {
                    activeSuggestion = (index > 0) ?
                        this.state.suggestions[index - 1] :
                        this.state.suggestions[this.state.suggestions.length - 1];
                }
            }
            else {
                if (keyCode === 40)
                    activeSuggestion = this.state.suggestions[0];
                if (keyCode === 38)
                    activeSuggestion = this.state.suggestions[this.state.suggestions.length - 1];
            }
            this.setState({ activeSuggestion });
        };
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.query !== nextProps.query) {
            this.setState({
                query: nextProps.query
            });
        }
    }
    render() {
        return (React.createElement(Section, null,
            React.createElement(Label, null, "Search in text"),
            React.createElement(Input, { onChange: (ev) => __awaiter(this, void 0, void 0, function* () {
                    const query = ev.target.value;
                    this.setState({ query });
                    this.props.onChange(query);
                    const suggestions = this.props.autoSuggest && query.length >= this.props.minimalQueryLength ?
                        yield this.props.autoSuggest(query) :
                        [];
                    this.setState({ suggestions });
                }), onKeyDown: (ev) => {
                    if (ev.keyCode === 38 || ev.keyCode === 40) {
                        this.setActiveSuggestion(ev.keyCode);
                    }
                    else if (ev.keyCode === 13) {
                        const activeSuggestion = this.state.activeSuggestion;
                        if (typeof activeSuggestion === 'string') {
                            this.activateSuggestion(activeSuggestion);
                        }
                        else {
                            this.props.onChange(this.state.query);
                            this.search(this.state.query, ev);
                        }
                    }
                    else if (this.props.onKeyDown != null) {
                        this.props.onKeyDown(ev);
                    }
                }, value: this.state.query }),
            React.createElement(Button, { onClick: (ev) => this.search(this.state.query, ev) }, "Search"),
            this.props.autoSuggest != null &&
                React.createElement(auto_suggest_1.default, { activateSuggestion: this.activateSuggestion, activeSuggestion: this.state.activeSuggestion, suggestions: this.state.suggestions })));
    }
}
FullTextSearchInput.defaultProps = {
    minimalQueryLength: 2,
    query: '',
};
exports.default = FullTextSearchInput;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const Suggestions = (props) => React.createElement("ul", { style: {
        boxSizing: 'border-box',
        listStyle: 'none',
        margin: 0,
        padding: 0,
        position: 'absolute',
        width: 'calc(100% - 100px)',
        border: '1px solid #eee',
        borderBottom: '0px',
        zIndex: 1,
    } }, props.children);
class Suggestion extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            hover: false,
        };
    }
    render() {
        return (React.createElement("li", { onClick: (ev) => this.props.activateSuggestion(this.props.children), onMouseEnter: () => this.setState({ hover: true }), onMouseLeave: () => this.setState({ hover: false }), style: {
                background: this.props.active || this.state.hover ? '#eee' : '#fff',
                borderBottom: '1px solid #eee',
                padding: '.3em',
            } }, this.props.children));
    }
}
const AutoSuggest = (props) => React.createElement(Suggestions, null, props.suggestions.map((suggestion, index) => React.createElement(Suggestion, { activateSuggestion: props.activateSuggestion, active: props.activeSuggestion === suggestion, key: index, onClick: () => { } }, suggestion)));
exports.default = AutoSuggest;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const default_styles_1 = __webpack_require__(8);
const Section = (props) => React.createElement("section", { style: default_styles_1.fontStyle }, props.children);
const Header = (props) => React.createElement("header", { role: "heading", style: {
        color: '#888',
        display: 'grid',
        fontSize: '.85em',
        gridTemplateColumns: '1fr 1fr',
        padding: '0 1em 1em 1em',
    } }, props.children);
const ResultCount = (props) => React.createElement("div", null,
    "Found ",
    props.resultCount,
    " result",
    props.resultCount === 1 ? '' : 's');
const OrderBy = (props) => React.createElement("div", { style: {
        justifySelf: 'end',
    } },
    "Order by ",
    React.createElement("em", null, "date"));
const ResultList = (props) => React.createElement("ul", { style: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
    } }, props.children);
const Result = (props) => React.createElement("li", { onClick: props.onClick, style: {
        backgroundColor: '#F6F6F6',
        marginBottom: '1em',
        padding: '1em',
        cursor: 'pointer',
    } }, props.children);
const HucSearchResults = (props) => React.createElement(Section, null,
    React.createElement(Header, null,
        React.createElement(ResultCount, { resultCount: props.searchResults.total }),
        React.createElement(OrderBy, null)),
    React.createElement(ResultList, null, props.searchResults.hits.map((result, i) => React.createElement(Result, { key: i, onClick: (ev) => props.onClickResult(result, ev) },
        React.createElement(props.resultBodyComponent, Object.assign({}, props, { result: result }))))));
exports.default = HucSearchResults;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const Panel = (props) => React.createElement("div", { style: props.style },
    props.title &&
        React.createElement("h2", { style: {
                marginBottom: '1em',
            } }, props.title),
    props.children);
exports.default = Panel;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const levisLabel = () => React.createElement("div", { style: {
        position: 'fixed',
        right: '0',
        bottom: '80px',
        marginRight: '-35px',
        borderRadius: '2px 0px 2px 0px',
        fontFamily: "'Roboto', sans-serif",
        fontWeight: 300,
        backgroundColor: '#268f75',
        color: '#fff',
        padding: '.5em 1em',
        fontSize: '11px',
        transform: 'rotate(90deg)',
    } },
    "Powered by",
    React.createElement("img", { style: {
            height: 'auto',
            width: '17px',
            margin: '-5px 0 -5px 0',
        }, src: "http://design.huygens.knaw.nl/wp-content/themes/huc-design-system/images/logo-timbuctoo-inv.svg", alt: "Pergamon" }));
exports.default = levisLabel;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const tipBackgroundByOrientation = {
    bottom: React.createElement("polygon", { points: "15,12 0,30 30,30 15,12" }),
    left: React.createElement("polygon", { points: "0,0 18,15 0,30 0,0" }),
    right: React.createElement("polygon", { points: "30,0 30,30 12,15, 30,0" }),
    top: React.createElement("polygon", { points: "0,0 30,0 15,18 0,0" })
};
const tipBorderByOrientation = (strokeColor) => {
    return {
        bottom: React.createElement("path", { d: "M0,30 L15,12 L30,30", stroke: strokeColor, strokeWidth: "3" }),
        left: React.createElement("path", { d: "M0,0 L18,15 L0,30", stroke: strokeColor, strokeWidth: "3" }),
        right: React.createElement("path", { d: "M30,0 L12,15 L30,30", stroke: strokeColor, strokeWidth: "3" }),
        top: React.createElement("path", { d: "M0,0 L15,18 L30,0", stroke: strokeColor, strokeWidth: "3" })
    };
};
class Tooltip extends React.Component {
    constructor() {
        super(...arguments);
        this.getSvgStyle = () => {
            let style;
            let bottomOrTop = {
                left: `calc(${100 * this.props.shift}% - 10px)`,
            };
            let leftOrRight = {
                top: `calc(${100 * this.props.shift}% - 10px)`,
            };
            switch (this.props.orientation) {
                case "bottom":
                    bottomOrTop.top = "-19px";
                    style = bottomOrTop;
                    break;
                case "top":
                    bottomOrTop.bottom = "-19px";
                    style = bottomOrTop;
                    break;
                case "left":
                    leftOrRight.right = "-19px";
                    style = leftOrRight;
                    break;
                case "right":
                    leftOrRight.left = "-19px";
                    style = leftOrRight;
                    break;
            }
            style.position = 'absolute';
            return style;
        };
    }
    render() {
        const borderColor = this.props.bodyStyle.hasOwnProperty('borderColor') ?
            this.props.bodyStyle.borderColor :
            'black';
        const backgroundColor = this.props.bodyStyle.hasOwnProperty('backgroundColor') ?
            this.props.bodyStyle.backgroundColor :
            'white';
        return (React.createElement("div", { style: Object.assign({ position: 'absolute', zIndex: 999 }, this.props.style) },
            React.createElement("div", { style: Object.assign({ backgroundColor,
                    borderColor, borderRadius: '6px', borderStyle: 'solid', borderWidth: '1px', color: 'black', height: '100%', padding: '20px' }, this.props.bodyStyle) }, this.props.children),
            React.createElement("svg", { fill: backgroundColor, height: "20px", style: this.getSvgStyle(), viewBox: "0 0 30 30", width: "20px" },
                tipBorderByOrientation(borderColor)[this.props.orientation],
                tipBackgroundByOrientation[this.props.orientation])));
    }
}
Tooltip.defaultProps = {
    bodyStyle: {},
    orientation: "bottom",
    shift: .5,
    style: {},
};
exports.default = Tooltip;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const system_tags_1 = __webpack_require__(5);
const not_implemented_1 = __webpack_require__(14);
class Choice extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.state = {
            expanded: false,
        };
    }
    render() {
        const defaultComp = React.createElement(system_tags_1.Span, Object.assign({}, this.props));
        if (!Array.isArray(this.props.node.children))
            return defaultComp;
        const sicCorr = this.props.node.children.some(child => child.type === 'sic' || child.type === 'corr');
        if (sicCorr)
            return defaultComp;
        const abbrExpan = this.props.node.children.some(child => child.type === 'abbr' || child.type === 'expan');
        if (abbrExpan) {
            return (React.createElement("span", { id: this.props.node.id(), onClick: () => this.setState({ expanded: !this.state.expanded }), style: { cursor: 'pointer' } },
                React.createElement("span", { style: { color: 'gray' } }, this.state.expanded ? '»' : '«'),
                React.Children.map(this.props.children, (child) => {
                    const cloned = React.cloneElement(child, { custom: this.state });
                    return cloned;
                }),
                React.createElement("span", { style: { color: 'gray' } }, this.state.expanded ? '«' : '»')));
        }
        return React.createElement(not_implemented_1.default, Object.assign({}, this.props));
    }
}
exports.default = Choice;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const default_styles_1 = __webpack_require__(1);
const suggestion_1 = __webpack_require__(58);
const constants_1 = __webpack_require__(3);
const Wrapper = (props) => React.createElement("div", { style: Object.assign({}, default_styles_1.fontStyle, default_styles_1.grayLightBackground, { padding: props.semanticSuggestions.length > 0 ? '.5em' : 0 }) }, props.children);
const Suggestions = (props) => React.createElement("ul", { style: {
        listStyle: 'none',
        margin: '.5em 0 0 0',
        padding: 0,
    } }, props.children);
const SemanticSuggestions = (props) => React.createElement(Wrapper, Object.assign({}, props),
    props.requesting &&
        React.createElement("p", { style: {
                alignItems: 'center',
                display: 'grid',
                fontSize: '0.9em',
                gridTemplateColumns: '62px auto',
                justifyItems: 'center',
                padding: '.5em',
            } },
            React.createElement("img", { src: `${constants_1.IMAGE_BASE_DIR}/ui/loader.svg`, style: {
                    height: 'auto',
                    width: '30px',
                } }),
            "Generating semantic suggestions for better search results."),
    (props.semanticSuggestions.length > 0) &&
        React.createElement("p", null,
            "The ePistolarium has found ",
            props.semanticSuggestions.length,
            " terms that are used in the same context. You can add them to improve your search results:"),
    (props.semanticSuggestions.length > 0) &&
        React.createElement(Suggestions, null, props.semanticSuggestions.map(((s) => React.createElement(suggestion_1.default, { key: s.text, onClick: (ev) => props.onClickSuggestion(s.text), suggestion: s })))));
exports.default = SemanticSuggestions;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
class Suggestion extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.state = {
            hover: false,
        };
    }
    render() {
        return (React.createElement("li", { onClick: this.props.onClick, onMouseEnter: () => this.setState({ hover: true }), onMouseLeave: () => this.setState({ hover: false }), style: {
                color: this.state.hover ? 'black' : '#444',
                cursor: 'pointer',
                display: 'grid',
                gridTemplateColumns: '4fr 1fr',
            } },
            this.props.suggestion.text,
            React.createElement("span", { style: {
                    color: this.state.hover ? 'black' : '#aaa',
                    fontSize: '14px',
                    textAlign: 'right',
                } },
                Math.round(100 * this.props.suggestion.weight),
                "%")));
    }
}
exports.default = Suggestion;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const default_styles_1 = __webpack_require__(1);
const Li = ({ children, keyword, onClick }) => React.createElement("li", { onClick: () => onClick(keyword), style: { display: 'inline-block', marginRight: '.5em' } }, children);
const Keywords = (props) => React.createElement("section", null,
    React.createElement("h3", { style: {
            fontSize: '1em',
        } }, "Keywords"),
    React.createElement("ul", { style: Object.assign({}, default_styles_1.blueFontStyle, { margin: 0, padding: 0 }) },
        props.keywords != null &&
            props.keywords
                .reduce((prev, curr) => { return prev.concat(curr.terms); }, [])
                .map(k => React.createElement(Li, { key: k, keyword: k, onClick: props.onClickKeyword }, k)),
        props.children));
exports.default = Keywords;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const default_styles_1 = __webpack_require__(1);
const MetadataList = (props) => React.createElement("ul", { ref: props.setRef, style: Object.assign({ color: '#888', listStyle: 'none', margin: 0, padding: 0 }, default_styles_1.fontStyle) }, props.children);
const MetadataItem = (props) => React.createElement("li", { style: {
        marginBottom: '1em',
    } }, props.children);
const Label = (props) => React.createElement("label", { style: {
        marginLeft: '-65px',
        position: 'absolute',
        textAlign: 'right',
        width: '50px',
    } }, props.children);
const Bold = (props) => React.createElement("div", { style: { color: '#444', fontWeight: 700 } }, props.children);
class Metadata extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.state = {
            width: null
        };
    }
    render() {
        return (React.createElement(MetadataList, { setRef: (el) => {
                if (el == null)
                    return;
                this.setState({
                    width: el.getBoundingClientRect().width
                });
            } },
            React.createElement(MetadataItem, null,
                React.createElement(Label, { width: this.state.width }, "FROM"),
                React.createElement("div", null,
                    React.createElement(Bold, null, this.props.rootAnnotation.metadata.get('sender')),
                    React.createElement("div", null, this.props.rootAnnotation.metadata.get('senderloc')))),
            React.createElement(MetadataItem, null,
                React.createElement(Label, { width: this.state.width }, "TO"),
                React.createElement("div", null,
                    React.createElement(Bold, null, this.props.rootAnnotation.metadata.get('recipient')),
                    React.createElement("div", null, this.props.rootAnnotation.metadata.get('recipientloc')))),
            React.createElement(MetadataItem, null,
                React.createElement(Label, { width: this.state.width }, "DATE"),
                React.createElement(Bold, null, this.props.rootAnnotation.metadata.get('date')))));
    }
}
exports.default = Metadata;


/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(17);

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
/* harmony default export */ __webpack_exports__["a"] = ((state = initialState, type, changedState) => {
    let nextState = state;
    switch (type) {
        case 'RECEIVE_SEARCH_RESULTS': {
            nextState = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* setProps */])(state, {
                aggregate: getAggregate(changedState.results),
                results: Object.assign({}, changedState.results, { query: changedState.query, id: JSON.stringify(changedState.query) })
            });
            break;
        }
        case 'RECEIVE_NEXT_SEARCH_RESULTS': {
            const results = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* setProps */])(state.results, {
                hits: state.results.hits.concat(changedState.results.hits)
            });
            nextState = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* setProps */])(state, { results });
            break;
        }
        default:
    }
    return nextState;
});


/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_pergamon_ui_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_pergamon_ui_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_pergamon_ui_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(17);


const initialState = {
    activeAnnotation: null,
    rootAnnotation: new __WEBPACK_IMPORTED_MODULE_0_pergamon_ui_components__["Annotation"](),
};
/* harmony default export */ __webpack_exports__["a"] = ((state = initialState, type, action) => {
    let nextState = state;
    switch (type) {
        case 'ACTIVATE_ANNOTATION': {
            const activeAnnotation = state.rootAnnotation.annotations.find(a => a.id === action.annotationId);
            nextState = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* setProps */])(nextState, { activeAnnotation });
            break;
        }
        case 'DEACTIVATE_ANNOTATION': {
            nextState = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* unsetProp */])(nextState, 'active');
            break;
        }
        case 'SET_ROOT_ANNOTATION': {
            nextState = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* setProps */])(nextState, { rootAnnotation: action.rootAnnotation });
            break;
        }
        default:
    }
    return nextState;
});


/***/ }),
/* 63 */,
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const default_styles_1 = __webpack_require__(9);
const ColorBar = () => React.createElement("div", { style: {
        backgroundColor: '#268f75',
        height: '5px',
        left: 0,
        position: 'fixed',
        right: 0,
        top: 0,
    } });
const Header = (props) => React.createElement("header", { style: Object.assign({}, default_styles_1.fontStyle, { alignItems: 'center', backgroundColor: '#323232', color: '#FFF', display: 'grid', gridTemplateColumns: '1fr 2fr 1fr', height: '60px', paddingTop: '5px', position: 'relative', width: '100%', zIndex: 1 }) }, props.children);
const Menu = (props) => React.createElement("ul", { role: "menubar" }, props.children);
const MenuItem = (props) => React.createElement("li", { onClick: (ev) => props.onClickMenuItem(props.children, ev), role: "menuitem", style: {
        cursor: 'pointer',
        display: 'inline-block',
        fontSize: '0.85em',
        marginLeft: '1em',
    } }, props.children);
const Logo = (props) => React.createElement("img", { alt: "HuygensING logo", onClick: props.onClick, src: "/static/graphics/ui/huygens-logo.png", style: {
        cursor: props.onClick == null ? 'default' : 'pointer',
        height: '2em',
        justifySelf: 'end',
        marginRight: '2em',
    } });
const Title = (props) => React.createElement("h1", { onClick: props.onClick, style: {
        cursor: props.onClick == null ? 'default' : 'pointer',
        fontWeight: 'normal',
        fontSize: '1em',
    } }, props.children);
const HucHeader = (props) => React.createElement(Header, null,
    React.createElement(ColorBar, null),
    React.createElement(Logo, { onClick: props.onClickLogo }),
    React.createElement(Title, { onClick: props.onClickTitle }, props.title),
    React.createElement("nav", { role: "navigation" },
        React.createElement(Menu, null, props.menuItems.map(mi => React.createElement(MenuItem, { key: mi, onClickMenuItem: props.onClickMenuItem }, mi)))));
HucHeader.defaultProps = {
    menuItems: [],
    onClickMenuItem: () => { console.error('Not implemented'); },
};
exports.default = HucHeader;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const index_1 = __webpack_require__(22);
exports.Tabs = (props) => React.createElement("ul", { role: "tablist", style: {
        alignSelf: 'center',
        justifySelf: 'end',
        margin: 0,
        padding: 0,
        listStyle: 'none',
    } }, props.children);
exports.Tab = (props) => React.createElement("li", { onClick: props.onClick, role: "tab", style: {
        backgroundColor: '#eee',
        borderTopLeftRadius: '3px',
        borderBottomLeftRadius: '3px',
        cursor: 'pointer',
        marginBottom: '.5em',
        padding: '.5em .5em .2em .5em',
        width: index_1.tabLabelWidth,
    } }, props.children);


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const default_styles_1 = __webpack_require__(9);
const auto_suggest_1 = __webpack_require__(67);
const Section = (props) => React.createElement("section", { style: Object.assign({}, default_styles_1.fontStyle, { position: 'relative' }) }, props.children);
const Label = (props) => React.createElement("label", { htmlFor: "full-text-search-input-input", id: "full-text-search-input-label", style: {
        display: 'block',
        fontWeight: 'bold',
        marginBottom: '.5em',
    } }, props.children);
const Input = (props) => React.createElement("input", { "aria-labelledby": "full-text-search-input-label", id: "full-text-search-input-input", onChange: props.onChange, onKeyDown: props.onKeyDown, role: "searchbox", style: {
        backgroundColor: '#fff',
        border: '1px solid #eee',
        boxSizing: 'border-box',
        fontSize: '.7em',
        padding: '0.5em',
        width: 'calc(100% - 100px)',
    }, value: props.value });
const Button = (props) => React.createElement("button", { onClick: props.onClick, style: {
        backgroundColor: '#eee',
        border: 'none',
        boxSizing: 'border-box',
        fontSize: '.7em',
        padding: '0.6em',
        width: '100px',
    } }, props.children);
class FullTextSearchInput extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            activeSuggestion: null,
            query: this.props.query || '',
            suggestions: []
        };
        this.activateSuggestion = (suggestion) => {
            this.setState({
                query: suggestion,
                suggestions: [],
            });
            this.props.onChange(suggestion);
            this.search(suggestion);
        };
        this.search = (query, ev) => {
            this.setState({ suggestions: [] });
            this.props.search(query, ev);
        };
        this.setActiveSuggestion = (keyCode) => {
            let activeSuggestion = this.state.activeSuggestion;
            if (typeof activeSuggestion === 'string') {
                const index = this.state.suggestions.indexOf(activeSuggestion);
                if (keyCode === 40) {
                    activeSuggestion = (index < (this.state.suggestions.length - 1)) ?
                        this.state.suggestions[index + 1] :
                        this.state.suggestions[0];
                }
                if (keyCode === 38) {
                    activeSuggestion = (index > 0) ?
                        this.state.suggestions[index - 1] :
                        this.state.suggestions[this.state.suggestions.length - 1];
                }
            }
            else {
                if (keyCode === 40)
                    activeSuggestion = this.state.suggestions[0];
                if (keyCode === 38)
                    activeSuggestion = this.state.suggestions[this.state.suggestions.length - 1];
            }
            this.setState({ activeSuggestion });
        };
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.query !== nextProps.query) {
            this.setState({
                query: nextProps.query
            });
        }
    }
    render() {
        return (React.createElement(Section, null,
            React.createElement(Label, null, "Search in text"),
            React.createElement(Input, { onChange: (ev) => __awaiter(this, void 0, void 0, function* () {
                    const query = ev.target.value;
                    this.setState({ query });
                    this.props.onChange(query);
                    const suggestions = this.props.autoSuggest && query.length >= this.props.minimalQueryLength ?
                        yield this.props.autoSuggest(query) :
                        [];
                    this.setState({ suggestions });
                }), onKeyDown: (ev) => {
                    if (ev.keyCode === 38 || ev.keyCode === 40) {
                        this.setActiveSuggestion(ev.keyCode);
                    }
                    else if (ev.keyCode === 13) {
                        const activeSuggestion = this.state.activeSuggestion;
                        if (typeof activeSuggestion === 'string') {
                            this.activateSuggestion(activeSuggestion);
                        }
                        else {
                            this.props.onChange(this.state.query);
                            this.search(this.state.query, ev);
                        }
                    }
                    else if (this.props.onKeyDown != null) {
                        this.props.onKeyDown(ev);
                    }
                }, value: this.state.query }),
            React.createElement(Button, { onClick: (ev) => this.search(this.state.query, ev) }, "Search"),
            this.props.autoSuggest != null &&
                React.createElement(auto_suggest_1.default, { activateSuggestion: this.activateSuggestion, activeSuggestion: this.state.activeSuggestion, suggestions: this.state.suggestions })));
    }
}
FullTextSearchInput.defaultProps = {
    minimalQueryLength: 2,
    query: '',
};
exports.default = FullTextSearchInput;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const Suggestions = (props) => React.createElement("ul", { style: {
        boxSizing: 'border-box',
        listStyle: 'none',
        margin: 0,
        padding: 0,
        position: 'absolute',
        width: 'calc(100% - 100px)',
        border: '1px solid #eee',
        borderBottom: '0px',
        zIndex: 1,
    } }, props.children);
class Suggestion extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            hover: false,
        };
    }
    render() {
        return (React.createElement("li", { onClick: (ev) => this.props.activateSuggestion(this.props.children), onMouseEnter: () => this.setState({ hover: true }), onMouseLeave: () => this.setState({ hover: false }), style: {
                background: this.props.active || this.state.hover ? '#eee' : '#fff',
                borderBottom: '1px solid #eee',
                padding: '.3em',
            } }, this.props.children));
    }
}
const AutoSuggest = (props) => React.createElement(Suggestions, null, props.suggestions.map((suggestion, index) => React.createElement(Suggestion, { activateSuggestion: props.activateSuggestion, active: props.activeSuggestion === suggestion, key: index, onClick: () => { } }, suggestion)));
exports.default = AutoSuggest;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const default_styles_1 = __webpack_require__(9);
const Section = (props) => React.createElement("section", { style: default_styles_1.fontStyle }, props.children);
const Header = (props) => React.createElement("header", { role: "heading", style: {
        color: '#888',
        display: 'grid',
        fontSize: '.85em',
        gridTemplateColumns: '1fr 1fr',
        padding: '0 1em 1em 1em',
    } }, props.children);
const ResultCount = (props) => React.createElement("div", null,
    "Found ",
    props.resultCount,
    " result",
    props.resultCount === 1 ? '' : 's');
const ResultList = (props) => React.createElement("ul", { style: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
    } }, props.children);
const Result = (props) => React.createElement("li", { onClick: props.onClick, style: {
        backgroundColor: '#F6F6F6',
        marginBottom: '1em',
        padding: '1em',
        cursor: 'pointer',
    } }, props.children);
const HucSearchResults = (props) => React.createElement(Section, null,
    React.createElement(Header, null,
        React.createElement(ResultCount, { resultCount: props.searchResults.total })),
    React.createElement(ResultList, null, props.searchResults.hits.map((result, i) => React.createElement(Result, { key: i, onClick: (ev) => props.onClickResult(result, ev) },
        React.createElement(props.resultBodyComponent, Object.assign({}, props, { result: result }))))));
HucSearchResults.defaultProps = {
    searchResults: {
        hits: [],
        id: null,
        query: {},
        total: 0,
    }
};
exports.default = HucSearchResults;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const levisLabel = (props) => React.createElement("div", { style: {
        backgroundColor: '#268f75',
        borderRadius: '2px 0px 2px 0px',
        bottom: '80px',
        color: '#fff',
        fontFamily: "'Roboto', sans-serif",
        fontSize: '11px',
        fontWeight: 300,
        marginRight: '-35px',
        padding: '.5em 1em',
        position: 'fixed',
        right: '0',
        transform: 'rotate(90deg)',
        zIndex: 999
    } },
    React.createElement("a", { href: props.href, target: "_blanc", style: {
            color: '#fff',
            textDecoration: 'none',
        } },
        "Powered by",
        React.createElement("img", { style: {
                height: 'auto',
                width: '17px',
                margin: '-5px 0 -5px 5px',
                transform: 'rotate(-90deg)',
            }, src: `${props.imgBaseDir}/logo-pergamon.svg`, alt: "Pergamon" })));
levisLabel.defaultProps = {
    href: "http://it.huygens.knaw.nl/index.php/digital-infrastructure/pergamon/",
    imgBaseDir: '/static/graphics/ui',
};
exports.default = levisLabel;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const tipBackgroundByOrientation = {
    bottom: React.createElement("polygon", { points: "15,12 0,30 30,30 15,12" }),
    left: React.createElement("polygon", { points: "0,0 18,15 0,30 0,0" }),
    right: React.createElement("polygon", { points: "30,0 30,30 12,15, 30,0" }),
    top: React.createElement("polygon", { points: "0,0 30,0 15,18 0,0" })
};
const tipBorderByOrientation = (strokeColor) => {
    return {
        bottom: React.createElement("path", { d: "M0,30 L15,12 L30,30", stroke: strokeColor, strokeWidth: "3" }),
        left: React.createElement("path", { d: "M0,0 L18,15 L0,30", stroke: strokeColor, strokeWidth: "3" }),
        right: React.createElement("path", { d: "M30,0 L12,15 L30,30", stroke: strokeColor, strokeWidth: "3" }),
        top: React.createElement("path", { d: "M0,0 L15,18 L30,0", stroke: strokeColor, strokeWidth: "3" })
    };
};
class Tooltip extends React.Component {
    constructor() {
        super(...arguments);
        this.getTipStyle = () => {
            let style;
            const bottomOrTop = {
                left: `calc(${100 * this.props.shift}% - 10px)`,
            };
            const leftOrRight = {
                top: `calc(${100 * this.props.shift}% - 10px)`,
            };
            switch (this.props.orientation) {
                case "bottom":
                    bottomOrTop.top = "-19px";
                    style = bottomOrTop;
                    break;
                case "top":
                    bottomOrTop.bottom = "-19px";
                    style = bottomOrTop;
                    break;
                case "left":
                    leftOrRight.right = "-19px";
                    style = leftOrRight;
                    break;
                case "right":
                    leftOrRight.left = "-19px";
                    style = leftOrRight;
                    break;
            }
            style.position = 'absolute';
            return style;
        };
    }
    componentDidMount() {
        if (this.props.orientation === 'top' || this.props.orientation === 'bottom') {
            const svgRect = this.svgEl.getBoundingClientRect();
            const elRect = this.el.getBoundingClientRect();
            if (svgRect.left < elRect.left)
                this.svgEl.style.left = '1px';
            if (svgRect.left + svgRect.width > elRect.left + elRect.width) {
                this.svgEl.style.left = (elRect.width - 21) + 'px';
            }
        }
        else if (this.props.orientation === 'left' || this.props.orientation === 'right') {
            const svgRect = this.svgEl.getBoundingClientRect();
            const elRect = this.el.getBoundingClientRect();
            if (svgRect.top < elRect.top)
                this.svgEl.style.top = '1px';
            if (svgRect.top + svgRect.height > elRect.top + elRect.height) {
                this.svgEl.style.top = (elRect.height - 21) + 'px';
            }
        }
    }
    render() {
        const borderColor = this.props.bodyStyle.hasOwnProperty('borderColor') ?
            this.props.bodyStyle.borderColor :
            '#aaa';
        const backgroundColor = this.props.bodyStyle.hasOwnProperty('backgroundColor') ?
            this.props.bodyStyle.backgroundColor :
            'white';
        return (React.createElement("div", { ref: el => { this.el = el; }, style: Object.assign({ position: 'absolute', zIndex: 999 }, this.props.style) },
            React.createElement("div", { style: Object.assign({ backgroundColor,
                    borderColor, fontFamily: "'Roboto', sans-serif", fontWeight: 300, borderRadius: '2px', borderStyle: 'solid', borderWidth: '1px', color: '#666', height: '100%', padding: '1em', boxShadow: '3px 3px 9px #ccc' }, this.props.bodyStyle) }, this.props.children),
            React.createElement("svg", { fill: backgroundColor, height: "20px", ref: el => { this.svgEl = el; }, style: this.getTipStyle(), viewBox: "0 0 30 30", width: "20px" },
                tipBorderByOrientation(borderColor)[this.props.orientation],
                tipBackgroundByOrientation[this.props.orientation])));
    }
}
Tooltip.defaultProps = {
    bodyStyle: {},
    orientation: "bottom",
    shift: .5,
    style: {},
};
exports.default = Tooltip;


/***/ })
/******/ ]);