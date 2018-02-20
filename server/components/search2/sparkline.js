"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Wrapper = (props) => React.createElement("div", { style: {
        bottom: 0,
        display: 'grid',
        gridTemplateColumns: '320px 3em auto 1em',
        margin: '0 auto',
        left: 0,
        right: 0,
        pointerEvents: 'none',
        position: 'fixed',
        width: '1100px',
    } }, props.children);
const SparklineBorder = (props) => React.createElement("div", { style: {
        backgroundColor: 'white',
        border: '1px solid #ccc',
        boxShadow: '0 0 20px rgba(0,0,0,0.19), 0 0 6px rgba(0,0,0,0.23)',
        height: '40px',
        padding: '1em 1em 1.25em 1em',
    } }, props.children);
class Sparkline extends React.PureComponent {
    async componentDidMount() {
        this.timeline = await Promise.resolve().then(() => require('timeline'));
    }
    render() {
        if (this.timeline == null ||
            !this.props.aggregate.length)
            return null;
        return (React.createElement(Wrapper, null,
            React.createElement("div", null),
            React.createElement("div", null),
            this.props.aggregate.length > 1 &&
                React.createElement(SparklineBorder, null,
                    React.createElement(this.timeline.default, { aggregate: this.props.aggregate, domains: [{
                                domainLabels: true,
                                rulers: false,
                                type: this.timeline.DomainType.Sparkline,
                            }], from: new Date(this.props.aggregate[0].year, 0, 1), to: new Date(this.props.aggregate[this.props.aggregate.length - 1].year, 0, 1) }),
                    React.createElement("div", null)),
            React.createElement("div", null)));
    }
}
exports.default = Sparkline;
