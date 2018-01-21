webpackJsonp([0],{

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EVENT_MIN_SPACE = 320;
exports.EVENT_HEIGHT = 12;
exports.EVENT_ROW_HEIGHT = 16;
exports.DATE_BAR_HEIGHT = 60;
exports.RULER_LABELS_HEIGHT = 60;
exports.timelineBlue = '#0091EA';
exports.timelineLightBlue = '#00B0FF';
exports.timelineLighterBlue = '#40C4FF';
exports.timelineLightestBlue = '#80D8FF';


/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const debounce = __webpack_require__(27);
const index_1 = __webpack_require__(859);
const event_1 = __webpack_require__(868);
const event_2 = __webpack_require__(870);
const sparkline_1 = __webpack_require__(871);
const domain_1 = __webpack_require__(433);
const Container = (props) => React.createElement("div", { ref: props.setRef, style: Object.assign({ backgroundColor: 'white', boxSizing: 'border-box', height: '100%', overflow: 'hidden', position: 'relative', width: '100%' }, props.style) }, props.children);
class Timeline extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.state = {
            domains: [],
            domainCenter: this.props.domainCenter,
            events: [],
        };
        this.domainComponents = (domain, index) => {
            switch (domain.type) {
                case domain_1.DomainType.Sparkline: {
                    return (React.createElement(sparkline_1.default, { aggregate: this.props.aggregate, domain: domain, key: "sparkline", style: { zIndex: index } }));
                }
                case domain_1.DomainType.Event: {
                    return (React.createElement(index_1.default, { domain: domain, events: this.state.events, fetchEvents: this.props.fetchEvents, key: "events", style: { zIndex: index } }));
                }
            }
        };
        this.debouncedHandleResize = debounce(() => this.setState({ domains: this.getDomains(this.props) }), 200);
    }
    componentDidMount() {
        const domains = this.getDomains(this.props);
        const events = this.getEvents(this.props.events, domains.find(d => d.type === domain_1.DomainType.Event));
        this.setState({ domains, events });
        window.addEventListener('resize', this.debouncedHandleResize);
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.from !== nextProps.from ||
            this.props.to !== nextProps.to) {
            this.setState({ domains: this.getDomains(nextProps) });
        }
        if (this.props.events !== nextProps.events) {
            const events = this.getEvents(nextProps.events, this.state.domains.find(d => d.type === domain_1.DomainType.Event));
            this.setState({ events });
        }
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.debouncedHandleResize);
    }
    render() {
        return (React.createElement(Container, { setRef: (el) => { this.el = el; }, style: this.props.style }, this.state.domains.map(this.domainComponents)));
    }
    getDomains(props) {
        const rect = this.el.getBoundingClientRect();
        return props.domains.map(d => {
            return new domain_1.default(props.from, props.to, rect.width, rect.height, props.domainCenter, d);
        });
    }
    getEvents(events, domain) {
        return event_2.addTop(events.map(e => new event_1.default(e, domain)));
    }
}
Timeline.defaultProps = {
    aggregate: [],
    async: false,
    domainCenter: .5,
    events: [],
};
exports.default = Timeline;
var domain_2 = __webpack_require__(433);
exports.DomainType = domain_2.DomainType;


/***/ }),

/***/ 431:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const rulers_1 = __webpack_require__(864);
const domain_labels_1 = __webpack_require__(867);
const DomainWrapper = (props) => React.createElement("div", { style: Object.assign({ height: `${props.domain.heightRatio * 100}%`, position: 'absolute', top: `${props.domain.topOffsetRatio * 100}%`, width: '100%' }, props.style) },
    props.domain.rulers &&
        React.createElement(rulers_1.default, { domain: props.domain }),
    props.domain.domainLabels &&
        React.createElement(domain_labels_1.default, { domain: props.domain }),
    props.children);
exports.default = DomainWrapper;


/***/ }),

/***/ 432:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.countDays = (from, to) => {
    if (to == null)
        return 0;
    return Math.round(to.getTime() - from.getTime()) / (1000 * 60 * 60 * 24);
};
exports.isEqual = (date1, date2) => date1.getTime() === date2.getTime();
exports.format = (date, granularity) => {
    if (date == null)
        return '∞';
    let displayDate = date.getFullYear().toString();
    if (granularity >= 3) {
        const months = [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
        ];
        displayDate = `${months[date.getMonth()]} ${displayDate}`;
    }
    if (granularity >= 1) {
        displayDate = `${date.getDate()} ${displayDate}`;
    }
    if (granularity === 0) {
        displayDate = `${date.getHours()}:${date.getMinutes()} ${displayDate}`;
    }
    return displayDate;
};


/***/ }),

/***/ 433:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const DateUtils = __webpack_require__(432);
var DomainType;
(function (DomainType) {
    DomainType[DomainType["Event"] = 0] = "Event";
    DomainType[DomainType["Navigator"] = 1] = "Navigator";
    DomainType[DomainType["Sparkline"] = 2] = "Sparkline";
})(DomainType = exports.DomainType || (exports.DomainType = {}));
class Domain {
    constructor(from, to, viewPortWidth, viewPortHeight, domainCenter, domainDef) {
        this.domainLabels = false;
        this.heightRatio = 1;
        this.visibleRatio = 1;
        this.rulerLabels = true;
        this.rulers = true;
        this.topOffsetRatio = 0;
        this.type = DomainType.Event;
        Object.keys(domainDef).map(k => {
            if (domainDef[k] !== this[k])
                this[k] = domainDef[k];
        });
        this.from = from;
        this.to = to;
        if (this.visibleRatio < 1) {
            const leftRatio = domainCenter - (this.visibleRatio / 2);
            const rightRatio = domainCenter + (this.visibleRatio / 2);
            const from = this.dateAtProportion(leftRatio);
            const to = this.dateAtProportion(rightRatio);
            this.from = from;
            this.to = to;
        }
        this.width = viewPortWidth;
        this.height = viewPortHeight * this.heightRatio;
        this.pixelsPerDay = this.width / this.countDays();
        this.granularity = this.getGranularity();
    }
    positionAtDate(date) {
        return DateUtils.countDays(this.from, date) * this.pixelsPerDay;
    }
    dateAtPosition(x) {
        return this.dateAtProportion(this.proportionAtPosition(x));
    }
    countDays() {
        return DateUtils.countDays(this.from, this.to);
    }
    dateAtProportion(proportion) {
        if (proportion < 0 || proportion > 1)
            throw new Error('[dateAtProportion] proportion should be between 0 and 1.');
        const fromTime = this.from.getTime();
        const toTime = this.to.getTime();
        const newTime = fromTime + ((toTime - fromTime) * proportion);
        return new Date(newTime);
    }
    proportionAtPosition(position) {
        return position / this.width;
    }
    getGranularity() {
        const days = this.countDays();
        if (days < 1)
            return 0;
        if (days < 15)
            return 1;
        if (days < 45)
            return 2;
        if (days < 1.5 * 365)
            return 3;
        if (days < 15 * 365)
            return 4;
        if (days < 150 * 365)
            return 5;
        return 6;
    }
}
exports.default = Domain;


/***/ }),

/***/ 859:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const interval_of_time_1 = __webpack_require__(860);
const index_1 = __webpack_require__(861);
const domain_wrapper_1 = __webpack_require__(431);
const constants_1 = __webpack_require__(132);
const Wrapper = (props) => React.createElement("div", { onScroll: props.onScroll, style: {
        height: `calc(100% - ${constants_1.RULER_LABELS_HEIGHT}px)`,
        overflowX: 'hidden',
        overflowY: 'auto',
        position: 'relative',
        width: '100%',
    } }, props.children);
const Ul = (props) => React.createElement("ul", { style: {
        height: `${props.height}px`,
        listStyle: 'none',
        margin: 0,
        padding: 0,
        width: '100%',
    } }, props.children);
class Events extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.state = {
            events: this.props.events.filter(e => e.top < this.props.domain.height),
            activeRegionHeight: this.props.domain.height,
        };
    }
    componentDidMount() {
        if (this.props.fetchEvents != null)
            this.props.fetchEvents(this.props.domain.from, this.props.domain.to);
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.events !== nextProps.events) {
            this.setState({
                events: nextProps.events.filter(e => e.top < this.state.activeRegionHeight)
            });
        }
    }
    render() {
        return (React.createElement(domain_wrapper_1.default, { domain: this.props.domain, style: this.props.style },
            React.createElement(Wrapper, { onScroll: (ev) => {
                    const activeRegionHeight = ev.nativeEvent.target.scrollTop + this.props.domain.height;
                    if (activeRegionHeight > this.state.activeRegionHeight) {
                        const events = this.props.events.filter(e => e.top < this.state.activeRegionHeight);
                        this.setState({ activeRegionHeight, events });
                    }
                } },
                React.createElement(Ul, { height: this.props.events.reduce((a, b) => { if (b.top == null)
                        b.top = 0; return Math.max(a, b.top); }, 0) }, this.state.events
                    .map((event, index) => event.isInterval() ?
                    React.createElement(interval_of_time_1.default, { event: event, key: index }) :
                    React.createElement(index_1.default, { event: event, key: index }))))));
    }
}
exports.default = Events;


/***/ }),

/***/ 860:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const cx = __webpack_require__(160);
const constants_1 = __webpack_require__(132);
const IntervalOfTimeLink = (props) => React.createElement("a", { style: {
        background: 'rgba(0, 0, 0, 0.4)',
        borderRadius: '2px',
        boxSizing: 'border-box',
        color: '#DDD',
        cursor: 'pointer',
        maxWidth: (props) => props.event.width > constants_1.EVENT_MIN_SPACE ? 'calc(100% - 8px)' : constants_1.EVENT_MIN_SPACE,
        overflow: 'hidden',
        padding: '0 4px',
        position: 'absolute',
        textDecoration: 'none',
        textOverflow: 'ellipsis',
    } }, props.children);
class IntervalOfTimeComp extends React.Component {
    render() {
        const { event, isNewEvent } = this.props;
        return (React.createElement("li", { className: this.props.className }, isNewEvent ?
            React.createElement("div", { className: "handles" },
                React.createElement("div", { className: "w-resize-handle" }),
                isNewEvent && event.isUncertain() ? React.createElement("div", { className: "uncertain-w-resize-handle" }) : null,
                React.createElement("div", { className: "move-handle" },
                    React.createElement("div", { className: cx('title', event.types, {
                            fill: event.width > constants_1.EVENT_MIN_SPACE,
                        }) }, event.title)),
                isNewEvent && event.isUncertain() ? React.createElement("div", { className: "uncertain-e-resize-handle" }) : null,
                React.createElement("div", { className: "e-resize-handle" })) :
            React.createElement(IntervalOfTimeLink, { event: event, onClick: (ev) => this.props.onEventClick(event, ev) }, event.title)));
    }
}
exports.default = IntervalOfTimeComp;


/***/ }),

/***/ 861:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const point_1 = __webpack_require__(862);
const title_1 = __webpack_require__(863);
const constants_1 = __webpack_require__(132);
const PointInTimeContainer = (props) => React.createElement("li", { style: {
        boxSizing: 'border-box',
        fontSize: '0.8em',
        left: `${props.event.left - 5}px`,
        position: 'absolute',
        top: `${props.event.top}px`,
        whiteSpace: 'nowrap',
        maxWidth: `${constants_1.EVENT_MIN_SPACE}px`,
    }, title: props.event.date.toString() }, props.children);
const PointInTime = (props) => React.createElement(PointInTimeContainer, { event: props.event },
    React.createElement(point_1.default, { event: props.event }),
    props.event.title != null &&
        React.createElement(title_1.default, null, props.event.title));
exports.default = PointInTime;


/***/ }),

/***/ 862:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const constants_1 = __webpack_require__(132);
const Point = (props) => React.createElement("div", { style: {
        backgroundImage: 'radial-gradient(white 20%, black 100%)',
        borderRadius: `${constants_1.EVENT_HEIGHT / 2}px`,
        display: 'inline-block',
        margin: '.25em 0',
        width: `${constants_1.EVENT_HEIGHT}px`,
        height: `${constants_1.EVENT_HEIGHT}px`,
    } });
exports.default = Point;


/***/ }),

/***/ 863:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const constants_1 = __webpack_require__(132);
const Title = (props) => React.createElement("div", { style: {
        backgroundColor: 'rgba(255, 255, 255, 0.75)',
        display: 'inline-block',
        lineHeight: `${constants_1.EVENT_HEIGHT}px`,
        maxWidth: `calc(${constants_1.EVENT_MIN_SPACE}px - ${constants_1.EVENT_HEIGHT}px)`,
        overflow: 'hidden',
        padding: '.25em',
        textOverflow: 'ellipsis',
    } }, props.children);
exports.default = Title;


/***/ }),

/***/ 864:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const ruler_1 = __webpack_require__(865);
const date_range_1 = __webpack_require__(866);
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const getWeekNumber = (date) => {
    const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    const dayNum = d.getUTCDay() || 7;
    d.setUTCDate(d.getUTCDate() + 4 - dayNum);
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    return Math.ceil((((d.getTime() - yearStart.getTime()) / 86400000) + 1) / 7);
};
const labelFormatter = (granularity) => {
    if (granularity >= 4) {
        return (d) => React.createElement("span", null, d.getFullYear().toString());
    }
    else if (granularity === 3) {
        return (d) => React.createElement("span", null,
            (d.getMonth() === 0) &&
                React.createElement("span", null,
                    d.getFullYear().toString(),
                    React.createElement("br", null)),
            months[d.getMonth()]);
    }
    else if (granularity === 2) {
        return (d) => React.createElement("span", null,
            months[d.getMonth()],
            ", week ",
            getWeekNumber(d));
    }
    else if (granularity === 1) {
        const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        return (d) => React.createElement("span", null, days[d.getDate()]);
    }
    else if (granularity === 0) {
        return (d) => React.createElement("span", null, "NOT IMPLEMENTED");
    }
};
const Ul = (props) => React.createElement("ul", { style: {
        bottom: 0,
        heigth: '100%',
        left: 0,
        listStyle: 'none',
        margin: 0,
        padding: 0,
        position: 'absolute',
        right: 0,
        top: 0,
        whiteSpace: 'nowrap',
    } }, props.children);
const Rulers = (props) => {
    const dates = date_range_1.default(props.domain.from, props.domain.to, props.domain.granularity);
    const formatLabel = labelFormatter(props.domain.granularity);
    return (React.createElement(Ul, Object.assign({}, props), dates.map((date, index) => {
        const labelComp = props.domain.rulerLabels ? formatLabel(date) : null;
        return (React.createElement(ruler_1.default, { date: date, key: index, label: labelComp, left: props.domain.positionAtDate(date) }));
    })));
};
exports.default = Rulers;


/***/ }),

/***/ 865:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const constants_1 = __webpack_require__(132);
const Label = (props) => React.createElement("span", { style: {
        alignItems: 'flex-end',
        bottom: '10px',
        display: 'flex',
        height: `calc(${constants_1.DATE_BAR_HEIGHT} - 10px)`,
        color: '#444',
        position: 'absolute',
        zIndex: 2,
    }, title: props.title }, props.children);
const Ruler = (props) => React.createElement("li", { style: {
        borderLeft: '1px solid #ccc',
        boxSizing: 'border-box',
        height: '100%',
        left: `${props.left}px`,
        paddingLeft: '6px',
        position: 'absolute',
        transition: 'all 1s cubic-bezier(.25,.8,.25,1)',
    } }, props.children);
const RulerComp = (props) => React.createElement(Ruler, { left: props.left }, props.label != null &&
    React.createElement(Label, { title: props.date.toString() }, props.label));
exports.default = RulerComp;


/***/ }),

/***/ 866:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const dateRange = (from, to, granularity) => {
    const range = [];
    let nextFrom;
    if (granularity >= 4) {
        from = new Date(from.getFullYear(), 0, 1);
        const step = granularity === 7 ?
            1000 :
            granularity === 6 ?
                100 :
                granularity === 5 ?
                    10 :
                    1;
        nextFrom = (from) => from.setFullYear(from.getFullYear() + step);
    }
    else if (granularity === 3) {
        from = new Date(from.getFullYear(), from.getMonth(), 1);
        nextFrom = (from) => from.setMonth(from.getMonth() + 1);
    }
    else if (granularity === 2) {
        from = new Date(from.getFullYear(), from.getMonth(), from.getDate());
        nextFrom = (from) => from.setDate(from.getDate() + 7);
    }
    else if (granularity === 1) {
        from = new Date(from.getFullYear(), from.getMonth(), from.getDate());
        nextFrom = (from) => from.setDate(from.getDate() + 1);
    }
    else if (granularity === 0) {
        from = new Date(from.getFullYear(), from.getMonth(), from.getDate(), from.getHours());
        nextFrom = (from) => from.setHours(from.getHours() + 1);
    }
    while (from < to) {
        range.push(from);
        from = new Date(from.valueOf());
        nextFrom(from);
    }
    return range;
};
exports.default = dateRange;


/***/ }),

/***/ 867:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const Span = (props) => React.createElement("span", { style: {
        textShadow: '-3px 0 rgba(255, 255, 255, .7), 3px 0 rgba(255, 255, 255, .7), 0 -3px rgba(255, 255, 255, .7), 0 3px rgba(255, 255, 255, .7)',
    } }, props.children);
const DomainLabels = (props) => React.createElement("div", { style: {
        alignItems: 'center',
        boxSizing: 'border-box',
        color: '#666',
        display: 'grid',
        height: '100%',
        gridTemplateColumns: '50% 50%',
        padding: '0 .25em',
        position: 'absolute',
        width: '100%',
        zIndex: 2,
    } },
    React.createElement("div", null,
        React.createElement(Span, null, props.domain.from.getFullYear())),
    React.createElement("div", { style: { textAlign: 'right' } },
        React.createElement(Span, null, props.domain.to.getFullYear())));
exports.default = DomainLabels;


/***/ }),

/***/ 868:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const base_event_1 = __webpack_require__(869);
const Constants = __webpack_require__(132);
class Event extends base_event_1.default {
    constructor(data, domain) {
        super(data);
        this.left = domain.positionAtDate(this.from);
        const width = this.countDays() * domain.pixelsPerDay;
        this.width = (width > 0 && width < 12) ? 12 : width;
    }
    space() {
        const minWidth = (w) => (w === 0 || w < Constants.EVENT_MIN_SPACE) ? Constants.EVENT_MIN_SPACE : w;
        const width = minWidth(this.width);
        const left = this.left;
        return [left, width];
    }
}
exports.default = Event;


/***/ }),

/***/ 869:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const DateUtils = __webpack_require__(432);
class BaseEvent {
    constructor(data) {
        this.body = '';
        this.coordinates = [];
        this.types = [];
        this.dateGranularity = 1;
        this.dateRangeGranularity = null;
        this.formatDate = (dateToFormat) => {
            let date = this.date;
            let granularity = this.dateGranularity;
            if (date == null) {
                if (this.dateUncertain != null) {
                    const from = DateUtils.format(this.dateUncertain.from, this.dateGranularity);
                    const to = DateUtils.format(this.dateUncertain.to, this.dateRangeGranularity);
                    return `${from} - ${to}`;
                }
                else if (dateToFormat == null) {
                    throw new Error('[formatDate] Unknown date to format!');
                }
                else {
                    granularity = (dateToFormat === 'from') ?
                        this.dateGranularity :
                        this.dateRangeGranularity;
                    if (this.dateRangeUncertain == null) {
                        date = this.dateRange[dateToFormat];
                    }
                    else {
                        if (DateUtils.isEqual(this.dateRange[dateToFormat], this.dateRangeUncertain[dateToFormat])) {
                            date = this.dateRangeUncertain[dateToFormat];
                        }
                        else {
                            const from = DateUtils.format(this.dateRange[dateToFormat], granularity);
                            const to = DateUtils.format(this.dateRangeUncertain[dateToFormat], granularity);
                            return `${from} - ${to}`;
                        }
                    }
                }
            }
            return DateUtils.format(date, granularity);
        };
        Object.assign(this, data);
        this.setTo();
        this.setFrom();
    }
    countDays() {
        return DateUtils.countDays(this.from, this.to);
    }
    formatFromDate() {
        return this.formatDate('from');
    }
    formatToDate() {
        return this.formatDate('to');
    }
    isInterval() {
        return this.dateRange != null;
    }
    isUncertain() {
        return this.dateUncertain != null || this.dateRangeUncertain != null;
    }
    setFrom() {
        this.from = (this.dateRange != null) ?
            this.dateRange.infiniteFrom ?
                new Date(-4713, 0, 1) :
                this.dateRange.from :
            this.date != null ?
                this.date :
                (this.dateUncertain != null) ?
                    this.dateUncertain.from :
                    null;
    }
    setTo() {
        this.to = (this.dateRange != null) ?
            this.dateRange.infiniteTo ?
                new Date() :
                this.dateRange.to :
            (this.dateUncertain != null) ?
                this.dateUncertain.to :
                null;
    }
}
exports.default = BaseEvent;


/***/ }),

/***/ 870:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Constants = __webpack_require__(132);
const hasOverlap = (a, b) => {
    const [aLeft, aWidth] = a.space();
    const [bLeft, bWidth] = b.space();
    let overlap = true;
    if (aLeft + aWidth < bLeft)
        overlap = false;
    if (bLeft + bWidth < aLeft)
        overlap = false;
    return overlap;
};
exports.addTop = (events) => {
    if (!events.length)
        return events;
    const firstEvent = events[0];
    const rows = [[firstEvent]];
    const calc = (event) => {
        if (event === firstEvent)
            return event;
        for (let row = 0; row < rows.length; row++) {
            const eventsInRow = rows[row];
            const isRowWithSpace = eventsInRow.reduce((prev, curr) => {
                return prev && !hasOverlap(event, curr);
            }, true);
            if (isRowWithSpace) {
                eventsInRow.push(event);
                event.top = row * Constants.EVENT_ROW_HEIGHT;
                break;
            }
        }
        if (event.top == null) {
            const newRow = rows.push([event]);
            event.top = (newRow - 1) * Constants.EVENT_ROW_HEIGHT;
        }
        return event;
    };
    return events.map(calc);
};
const parseDate = (date) => {
    date = date.split('+')[0];
    return (date === 'infinity') ? null : new Date(date);
};
const parseDateRange = (dateRange) => {
    return {
        from: parseDate(dateRange.from),
        infiniteFrom: dateRange.from === 'infinity',
        infiniteTo: dateRange.to === 'infinity',
        to: parseDate(dateRange.to),
    };
};
const clone = (data) => JSON.parse(JSON.stringify(data));
exports.parseEvent = (eventData) => {
    eventData = clone(eventData);
    if (eventData.date) {
        eventData.date = parseDate(eventData.date);
    }
    if (eventData.dateUncertain != null) {
        eventData.dateUncertain = parseDateRange(eventData.dateUncertain);
    }
    if (eventData.dateRange != null) {
        eventData.dateRange = parseDateRange(eventData.dateRange);
    }
    if (eventData.dateRangeUncertain != null) {
        eventData.dateRangeUncertain = parseDateRange(eventData.dateRangeUncertain);
    }
    return eventData;
};


/***/ }),

/***/ 871:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const domain_wrapper_1 = __webpack_require__(431);
const Sparkline = (props) => {
    if (props.aggregate == null)
        return null;
    if (props.aggregate.length > props.domain.width)
        return null;
    const countMax = props.aggregate.reduce((prev, curr) => { return Math.max(prev, curr.count); }, 0);
    const path = props.aggregate.reduce((prev, curr, index) => {
        const curveType = index === 0 ? 'M' : 'L';
        const x = (props.domain.width / (props.aggregate.length - 1)) * index;
        const y = props.domain.height - ((curr.count / countMax) * props.domain.height);
        return `${prev} ${curveType} ${x} ${y}`;
    }, '');
    const pathCloser = ` L ${props.domain.width + 1} ${props.domain.height + 1} L -1 ${props.domain.height + 1}`;
    return (React.createElement(domain_wrapper_1.default, { domain: props.domain, style: props.style },
        React.createElement("svg", { viewBox: `0 0 ${props.domain.width} ${props.domain.height}`, style: {
                position: 'relative',
                zIndex: 1,
            } },
            React.createElement("path", { d: path + pathCloser, style: {
                    fill: 'rgba(245, 245, 255, .7)',
                    stroke: 'rgb(180, 180, 255)',
                } }))));
};
exports.default = Sparkline;


/***/ })

});