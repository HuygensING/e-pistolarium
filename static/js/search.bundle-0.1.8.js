webpackJsonp([4],{

/***/ 0:
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ 12:
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

class Graph extends __WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"] {
    async componentDidMount() {
        this.d3 = await __webpack_require__.e/* import() */(2).then(__webpack_require__.bind(null, 91));
        this.createGraph();
    }
    componentDidUpdate() {
        this.createGraph();
    }
    async createGraph() {
        const svg = this.d3.select("#graph");
        const svgNode = svg.node();
        const svgRect = svgNode.getBoundingClientRect();
        const { height, width } = svgRect;
        const simulation = this.d3.forceSimulation(this.props.nodes)
            .force('charge', this.d3.forceManyBody().strength(this.props.strength))
            .force('link', this.d3.forceLink(this.props.links).distance(this.props.distance))
            .force('center', this.d3.forceCenter(width / 2, height / 2));
        const link = svg.append('g')
            .attr('class', 'links')
            .selectAll('line')
            .data(this.props.links)
            .enter().append('line')
            .attr('stroke-width', d => {
            let width = (d.w / 1000) * 10;
            if (width < 1)
                width = 1;
            else if (width > 10)
                width = 10;
            return width;
        })
            .attr('stroke', (d) => '#444');
        const node = svg.append("g")
            .attr("class", "nodes")
            .selectAll("circle")
            .data(this.props.nodes)
            .enter().append("circle")
            .attr("r", 3)
            .attr("stroke", '#000');
        const label = svg.append('g')
            .attr('class', 'labels')
            .selectAll("text")
            .data(this.props.nodes)
            .enter().append("text")
            .text((d) => d.name)
            .style("fill", "#444")
            .style("font-family", "Arial")
            .style("font-size", 12);
        simulation
            .nodes(this.props.nodes)
            .on('tick', () => {
            link
                .attr("x1", (d) => {
                return d.source.x;
            })
                .attr("y1", (d) => d.source.y)
                .attr("x2", (d) => d.target.x)
                .attr("y2", (d) => d.target.y);
            node
                .attr("cx", (d) => d.x >= width ? width - 3 :
                d.x < 3 ? 3 : d.x)
                .attr("cy", (d) => d.y >= height ? height - 3 :
                d.y < 3 ? 3 : d.y);
            label
                .attr("x", (d) => d.x > width / 2 ? d.x + 8 : d.x - 8)
                .attr("y", (d) => d.y + 4)
                .style("text-anchor", (d) => d.x > width / 2 ? 'start' : "end");
        });
        const dragstarted = (d) => {
            if (!this.d3.event.active)
                simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
        };
        const dragged = (d) => {
            d.fx = this.d3.event.x;
            d.fy = this.d3.event.y;
        };
        const dragended = (d) => {
            if (!this.d3.event.active)
                simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
        };
        const drag = this.d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended);
        node.call(drag);
        label.call(drag);
    }
    render() {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", { id: "graph", style: {
                width: '100%',
                height: '100%'
            } }));
    }
}
Graph.defaultProps = {
    distance: 200,
    links: [],
    nodes: [],
    strength: -100,
};
/* harmony default export */ __webpack_exports__["a"] = (Graph);


/***/ }),

/***/ 25:
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = debounce;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__props__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__(16);





Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["hydrate"])(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__search__["a" /* default */], Object.assign({}, Object(__WEBPACK_IMPORTED_MODULE_2__props__["a" /* getClientProps */])())), document.getElementById('container'));
window.addEventListener(__WEBPACK_IMPORTED_MODULE_4__constants__["b" /* STATE_CHANGE */], (ev) => {
    Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["render"])(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__search__["a" /* default */], Object.assign({}, ev.detail)), document.getElementById('container'));
});


/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_huc_ui_components__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_huc_ui_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_huc_ui_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__facets__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__aside__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__result_body__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__full_text_search__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_debounce__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_debounce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash_debounce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions_search__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sparkline__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils__ = __webpack_require__(10);











const Wrapper = (props) => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { role: "search", style: {
        display: 'grid',
        gridTemplateColumns: '320px 4em auto',
        margin: '2em auto',
        maxWidth: '1100px',
    } }, props.children);
class Search extends __WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"] {
    constructor() {
        super(...arguments);
        this.onScroll = () => {
            const doc = document.documentElement;
            if (doc.scrollHeight - (doc.scrollTop + doc.clientHeight) < doc.scrollHeight * 0.1) {
                Object(__WEBPACK_IMPORTED_MODULE_7__actions_search__["a" /* fetchNextSearchResult */])();
            }
        };
        this.onScrollDebounced = __WEBPACK_IMPORTED_MODULE_6_lodash_debounce__(this.onScroll, 100);
    }
    componentDidMount() {
        document.addEventListener('scroll', this.onScrollDebounced);
    }
    componentWillUnmount() {
        document.removeEventListener('scroll', this.onScrollDebounced);
    }
    render() {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_9__app__["a" /* default */], null,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Wrapper, null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: { marginLeft: '2em' } },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__full_text_search__["a" /* default */], Object.assign({}, this.props)),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__facets__["a" /* default */], { receiveSearchResults: __WEBPACK_IMPORTED_MODULE_7__actions_search__["c" /* receiveSearchResults */] })),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: {
                        marginBottom: '10em',
                        marginRight: '2em',
                    } },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_huc_ui_components__["HucSearchResults"], { onClickResult: (result) => Object(__WEBPACK_IMPORTED_MODULE_10__utils__["a" /* changeLocation */])(`/documents/${result.id}`), resultBodyComponent: __WEBPACK_IMPORTED_MODULE_4__result_body__["a" /* default */], searchResults: this.props.search.results }),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_8__sparkline__["a" /* default */], { aggregate: this.props.search.aggregate })),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__aside__["a" /* default */], { searchResults: this.props.search.results }))));
    }
}
/* harmony default export */ __webpack_exports__["a"] = (Search);


/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pergamon_ui_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pergamon_ui_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_pergamon_ui_components__);


class Facets extends __WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"] {
    async componentDidMount() {
        this.searchkit = await __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, 90));
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
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](SearchkitProvider, { searchkit: this.searchkitManager },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: __WEBPACK_IMPORTED_MODULE_1_pergamon_ui_components__["fontStyle"] },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](ResetFilters, null),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](DynamicRangeFilter, { field: "year", id: "range_year", title: "Date range" }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](RefinementListFilter, { field: "sender", id: "count_per_sender", operator: "OR", size: 10, title: "Senders" }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](RefinementListFilter, { field: "recipient", id: "count_per_recipient", operator: "OR", size: 10, title: "Recipients" }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](RefinementListFilter, { field: "senderloc", id: "count_per_senderloc", operator: "OR", size: 10, title: "Sender Locations" }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](RefinementListFilter, { field: "recipientloc", id: "count_per_recipientloc", operator: "OR", size: 10, title: "Recipient Locations" }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](RefinementListFilter, { field: "correspondence", id: "count_per_correspondence", operator: "OR", size: 10, title: "Correspondence" }))));
    }
}
/* harmony default export */ __webpack_exports__["a"] = (Facets);


/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_huc_ui_components__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_huc_ui_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_huc_ui_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__visualizations__ = __webpack_require__(81);



class AsideComp extends __WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"] {
    constructor() {
        super(...arguments);
        this.state = {
            fullScreen: false,
        };
    }
    render() {
        if (this.props.searchResults == null || this.props.searchResults.total > 0)
            return null;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_huc_ui_components__["HucOffCanvasAside"], { fullScreen: this.state.fullScreen, onClose: () => this.setState({ fullScreen: false }) },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_huc_ui_components__["Panel"], { style: { height: 'calc(100% - 65px)' }, type: __WEBPACK_IMPORTED_MODULE_1_huc_ui_components__["Aside"].Visualisations },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__visualizations__["a" /* default */], { fullScreen: this.state.fullScreen, handleFullScreen: () => this.setState({ fullScreen: true }), searchResults: this.props.searchResults }))));
    }
}
/* harmony default export */ __webpack_exports__["a"] = (AsideComp);


/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__timeline__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__graph_cocitation__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__graph_correspondent__ = __webpack_require__(84);




const Li = (props) => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", { onClick: props.onClick, style: Object.assign({ backgroundColor: props.fullScreen ? 'initial' : '#f2f2f2', backgroundPosition: 0, backgroundSize: 'cover', border: props.fullScreen ? 'none' : '2px solid #ccc', borderRadius: '6px', cursor: 'pointer', display: 'block', fontWeight: props.active ? 'bold' : 'initial', marginBottom: '1em', padding: props.fullScreen ? 0 : '1.5em', transition: 'all 300ms', width: props.fullScreen ? '100px' : 'auto' }, props.style) }, props.children);
/* unused harmony export Li */

var Vis;
(function (Vis) {
    Vis[Vis["Map"] = 0] = "Map";
    Vis[Vis["Timeline"] = 1] = "Timeline";
    Vis[Vis["CorrespondentGraph"] = 2] = "CorrespondentGraph";
    Vis[Vis["CoCitationGraph"] = 3] = "CoCitationGraph";
})(Vis || (Vis = {}));
class VisualizationsPanel extends __WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"] {
    constructor() {
        super(...arguments);
        this.state = {
            active: Vis.Timeline
        };
    }
    render() {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: {
                display: this.props.fullScreen ? 'grid' : 'block',
                gridTemplateColumns: '1fr 5fr 3em',
                height: '100%',
                width: '100%',
            } },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("ul", { style: { margin: '3em 0', padding: 0 } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Li, { active: this.state.active === Vis.Map, fullScreen: this.props.fullScreen, onClick: () => {
                        this.setState({ active: Vis.Map });
                        this.props.handleFullScreen();
                    } }, "Map"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Li, { active: this.state.active === Vis.Timeline, fullScreen: this.props.fullScreen, onClick: () => {
                        this.setState({ active: Vis.Timeline });
                        this.props.handleFullScreen();
                    } }, "Timeline"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Li, { active: this.state.active === Vis.CorrespondentGraph, fullScreen: this.props.fullScreen, onClick: () => {
                        this.setState({ active: Vis.CorrespondentGraph });
                        this.props.handleFullScreen();
                    } }, "Correspondent graph"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Li, { active: this.state.active === Vis.CoCitationGraph, fullScreen: this.props.fullScreen, onClick: () => {
                        this.setState({ active: Vis.CoCitationGraph });
                        this.props.handleFullScreen();
                    } }, "Cocitation graph")),
            (this.state.active === Vis.Timeline &&
                this.props.fullScreen) &&
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__timeline__["a" /* default */], null),
            (this.state.active === Vis.CorrespondentGraph &&
                this.props.fullScreen) &&
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__graph_correspondent__["a" /* default */], { searchResults: this.props.searchResults }),
            (this.state.active === Vis.CoCitationGraph &&
                this.props.fullScreen) &&
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__graph_cocitation__["a" /* default */], { searchResults: this.props.searchResults })));
    }
}
/* harmony default export */ __webpack_exports__["a"] = (VisualizationsPanel);


/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_search__ = __webpack_require__(11);


class TimelineVisualization extends __WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"] {
    constructor() {
        super(...arguments);
        this.state = {
            aggregate: [],
            events: [],
            from: null,
            to: null,
        };
        this.fetchEvents = async (from, to) => {
            const response = await Object(__WEBPACK_IMPORTED_MODULE_1__actions_search__["b" /* postSearch */])({
                _source: [
                    'date',
                    'sender',
                    'recipient',
                ],
                query: {
                    range: {
                        date: {
                            gte: from.toISOString(),
                            lte: to.toISOString(),
                        }
                    }
                },
                size: 10000,
                sort: 'date',
            });
            const data = await response.json();
            const events = data.hits.hits
                .map(h => {
                const sender = h._source.sender.replace(/\s\(.*\)/, '');
                const recipient = h._source.recipient.replace(/\s\(.*\)/, '');
                return {
                    date: new Date(h._source.date),
                    title: `${sender} - ${recipient}`
                };
            });
            this.setState({
                events
            });
        };
    }
    async componentDidMount() {
        this.timeline = await __webpack_require__.e/* import() */(0/* duplicate */).then(__webpack_require__.bind(null, 26));
        this.init();
    }
    render() {
        if (this.state.from == null)
            return null;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](this.timeline.default, Object.assign({ domains: [
                {
                    heightRatio: .25,
                    topOffsetRatio: .75,
                    type: this.timeline.DomainType.Sparkline,
                },
                {
                    heightRatio: .75,
                    type: this.timeline.DomainType.Event,
                    visibleRatio: .01,
                },
            ], fetchEvents: this.fetchEvents }, this.state)));
    }
    async init() {
        const response = await Object(__WEBPACK_IMPORTED_MODULE_1__actions_search__["b" /* postSearch */])({
            aggs: {
                letter_per_year: {
                    date_histogram: {
                        field: 'date',
                        interval: 'year',
                    }
                }
            },
            size: 0,
        });
        const data = await response.json();
        const aggregate = data.aggregations.letter_per_year.buckets.map(b => ({
            count: b.doc_count,
            year: +b.key_as_string.slice(0, 4),
        }));
        this.setState({
            aggregate,
            from: new Date(aggregate.first().year, 0, 1),
            to: new Date(aggregate.last().year, 0, 1),
        });
    }
}
/* harmony default export */ __webpack_exports__["a"] = (TimelineVisualization);


/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(24);


class CoCitationGraph extends __WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"] {
    constructor() {
        super(...arguments);
        this.state = {
            links: [],
            loading: true,
            nodes: [],
        };
    }
    async componentDidMount() {
        let body = JSON.parse(JSON.stringify(this.props.searchResults.query));
        body = body.hasOwnProperty('query') ?
            body.query :
            body.hasOwnProperty('post_filter') ?
                body.post_filter :
                { match_all: {} };
        body = { query: body };
        const response = await fetch('/api/docsets', {
            body: JSON.stringify(body),
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
            method: 'POST',
        });
        let location = response.headers.get('Location');
        if (location == null)
            return;
        location = location + '/cocitations';
        const response2 = await fetch(location);
        const data = await response2.json();
        const nodes = data.reduce((prev, curr) => {
            const [item1, item2] = curr.items;
            const node1Index = prev.findIndex(n => n.name === item1);
            const node2Index = prev.findIndex(n => n.name === item2);
            if (node1Index === -1)
                prev.push({ name: item1, group: 1, w: 1 });
            else
                prev[node1Index].w++;
            if (node2Index === -1)
                prev.push({ name: item2, group: 1, w: 1 });
            else
                prev[node2Index].w++;
            return prev;
        }, []);
        const links = data.reduce((prev, curr) => {
            const [item1, item2] = curr.items;
            const node1Index = nodes.findIndex(n => n.name === item1);
            const node2Index = nodes.findIndex(n => n.name === item2);
            prev.push({
                source: node1Index,
                target: node2Index,
                w: curr.count
            });
            return prev;
        }, []);
        this.setState({ links, loading: false, nodes });
    }
    render() {
        if (this.state.loading)
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { src: "/static/graphics/ui/loader.svg" });
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */], Object.assign({ links: this.state.links, nodes: this.state.nodes }, this.props)));
    }
}
/* harmony default export */ __webpack_exports__["a"] = (CoCitationGraph);


/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(24);


class CorrespondentGraph extends __WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"] {
    constructor() {
        super(...arguments);
        this.state = {
            links: [],
            loading: true,
            nodes: [],
        };
    }
    async componentDidMount() {
        let body = JSON.parse(JSON.stringify(this.props.searchResults.query));
        body = body.hasOwnProperty('query') ?
            body.query :
            body.hasOwnProperty('post_filter') ?
                body.post_filter :
                { match_all: {} };
        const response = await fetch('/api/documents/graph?field1=sender&field2=recipient', {
            body: JSON.stringify(body),
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
            method: 'POST',
        });
        let data = await response.json();
        const nodes = data.reduce((prev, curr) => {
            const sourceIndex = prev.findIndex(n => n.name === curr.source);
            const targetIndex = prev.findIndex(n => n.name === curr.target);
            if (sourceIndex === -1)
                prev.push({ name: curr.source, group: 1, w: 1 });
            else
                prev[sourceIndex].w++;
            if (targetIndex === -1)
                prev.push({ name: curr.target, group: 1, w: 1 });
            else
                prev[targetIndex].w++;
            return prev;
        }, []);
        const links = data.reduce((prev, curr) => {
            const sourceIndex = nodes.findIndex(n => n.name === curr.source);
            const targetIndex = nodes.findIndex(n => n.name === curr.target);
            prev.push({
                source: sourceIndex,
                target: targetIndex,
                w: curr.weight
            });
            return prev;
        }, []);
        this.setState({ links, loading: false, nodes });
    }
    render() {
        if (this.state.loading)
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { src: "/static/graphics/ui/loader.svg" });
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */], Object.assign({ links: this.state.links, nodes: this.state.nodes }, this.props)));
    }
}
/* harmony default export */ __webpack_exports__["a"] = (CorrespondentGraph);


/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

const Wrapper = (props) => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("section", { style: {
        display: 'grid',
        gridTemplateRows: '1fr .5fr .5fr 1fr 1fr',
        gridTemplateColumns: '4fr auto 4fr',
    } }, props.children);
const Cell = (props) => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: {
        color: props.small ? '#888' : 'black',
        fontSize: props.small ? '.85em' : '1em',
        fontWeight: props.bold ? 'bold' : 'normal',
        textAlign: props.right ? 'right' : 'left'
    } }, props.children);
const ResultBody = (props) => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Wrapper, null,
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Cell, { bold: true }, props.result.date),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Cell, { right: true }, props.result.correspondence),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: { gridColumn: '1 / 4' } }),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: { borderTop: '1px solid #CCC', gridColumn: '1 / 4' } }),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Cell, null, props.result.sender),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null, "\u21D2"),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Cell, { right: true }, props.result.recipient),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Cell, { small: true }, props.result.senderloc),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Cell, { right: true, small: true }, props.result.recipientloc));
/* harmony default export */ __webpack_exports__["a"] = (ResultBody);


/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_huc_ui_components__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_huc_ui_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_huc_ui_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_full_text_search__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_pergamon_ui_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_pergamon_ui_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_pergamon_ui_components__);




class FullTextSearch extends __WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"] {
    constructor() {
        super(...arguments);
        this.state = {
            requesting: false,
            suggestions: [],
        };
        this.search = async (query) => {
            this.setState({ requesting: true });
            Object(__WEBPACK_IMPORTED_MODULE_2__actions_full_text_search__["b" /* searchFullText */])(query);
            const suggestions = await Object(__WEBPACK_IMPORTED_MODULE_2__actions_full_text_search__["c" /* searchSemanticSuggestions */])(query);
            this.setState({ suggestions, requesting: false });
        };
    }
    render() {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], null,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_huc_ui_components__["HucFullTextSearchInput"], { autoSuggest: __WEBPACK_IMPORTED_MODULE_2__actions_full_text_search__["a" /* autoSuggest */], onChange: () => {
                    if (this.state.suggestions.length)
                        this.setState({ suggestions: [] });
                }, onKeyDown: (ev) => {
                    if (ev.keyCode === 13)
                        this.search(ev.target.value);
                }, query: '', search: (q) => this.search(q) }),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_pergamon_ui_components__["SemanticSuggestions"], { onClickSuggestion: __WEBPACK_IMPORTED_MODULE_2__actions_full_text_search__["b" /* searchFullText */], requesting: this.state.requesting, semanticSuggestions: this.state.suggestions })));
    }
}
/* harmony default export */ __webpack_exports__["a"] = (FullTextSearch);


/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__search__ = __webpack_require__(11);

const autoSuggest = async (query) => {
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
    const data = await Object(__WEBPACK_IMPORTED_MODULE_0__search__["b" /* postSearch */])(body);
    return data.suggest.woorden[0].options.map(x => x.text);
};
/* harmony export (immutable) */ __webpack_exports__["a"] = autoSuggest;

const searchFullText = async (query) => {
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
    const data = await Object(__WEBPACK_IMPORTED_MODULE_0__search__["b" /* postSearch */])(body);
    Object(__WEBPACK_IMPORTED_MODULE_0__search__["c" /* receiveSearchResults */])(esQuery, data);
};
/* harmony export (immutable) */ __webpack_exports__["b"] = searchFullText;

const searchSemanticSuggestions = async (query) => {
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
/* harmony export (immutable) */ __webpack_exports__["c"] = searchSemanticSuggestions;



/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

const Wrapper = (props) => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: {
        bottom: 0,
        display: 'grid',
        gridTemplateColumns: '320px 3em auto 1em',
        margin: '0 auto',
        left: 0,
        right: 0,
        position: 'fixed',
        width: '1100px',
    } }, props.children);
const SparklineBorder = (props) => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: {
        backgroundColor: 'white',
        border: '1px solid #ccc',
        boxShadow: '0 0 20px rgba(0,0,0,0.19), 0 0 6px rgba(0,0,0,0.23)',
        height: '40px',
        padding: '1em 1em 1.25em 1em',
    } }, props.children);
class Sparkline extends __WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"] {
    async componentDidMount() {
        this.timeline = await __webpack_require__.e/* import() */(0/* duplicate */).then(__webpack_require__.bind(null, 26));
    }
    render() {
        if (this.timeline == null ||
            !this.props.aggregate.length)
            return null;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Wrapper, null,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null),
            this.props.aggregate.length > 1 &&
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](SparklineBorder, null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](this.timeline.default, { aggregate: this.props.aggregate, domains: [{
                                domainLabels: true,
                                rulers: false,
                                type: this.timeline.DomainType.Sparkline,
                            }], from: new Date(this.props.aggregate[0].year, 0, 1), to: new Date(this.props.aggregate[this.props.aggregate.length - 1].year, 0, 1) }),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null)),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null)));
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Sparkline;



/***/ })

},[77]);