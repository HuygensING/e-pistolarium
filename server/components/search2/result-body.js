"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Wrapper = (props) => React.createElement("section", { style: {
        display: 'grid',
        gridTemplateRows: '1fr .5fr .5fr 1fr 1fr',
        gridTemplateColumns: '4fr auto 4fr',
    } }, props.children);
const Cell = (props) => React.createElement("div", { style: {
        color: props.small ? '#888' : 'black',
        fontSize: props.small ? '.85em' : '1em',
        fontWeight: props.bold ? 'bold' : 'normal',
        textAlign: props.right ? 'right' : 'left'
    } }, props.children);
const ResultBody = (props) => React.createElement(Wrapper, null,
    React.createElement(Cell, { bold: true }, props.result.date),
    React.createElement("div", null),
    React.createElement(Cell, { right: true }, props.result.correspondence),
    React.createElement("div", { style: { gridColumn: '1 / 4' } }),
    React.createElement("div", { style: { borderTop: '1px solid #CCC', gridColumn: '1 / 4' } }),
    React.createElement(Cell, null, props.result.sender),
    React.createElement("div", null, "\u21D2"),
    React.createElement(Cell, { right: true }, props.result.recipient),
    React.createElement(Cell, { small: true }, props.result.senderloc),
    React.createElement("div", null),
    React.createElement(Cell, { right: true, small: true }, props.result.recipientloc));
exports.default = ResultBody;
