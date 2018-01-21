"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const timeline_1 = require("./timeline");
const cocitation_1 = require("./graph/cocitation");
const correspondent_1 = require("./graph/correspondent");
exports.Li = (props) => React.createElement("li", { onClick: props.onClick, style: Object.assign({ backgroundColor: props.fullScreen ? 'initial' : '#f2f2f2', backgroundPosition: 0, backgroundSize: 'cover', border: props.fullScreen ? 'none' : '2px solid #ccc', borderRadius: '6px', cursor: 'pointer', display: 'block', fontWeight: props.active ? 'bold' : 'initial', marginBottom: '1em', padding: props.fullScreen ? 0 : '1.5em', transition: 'all 300ms', width: props.fullScreen ? '100px' : 'auto' }, props.style) }, props.children);
var Vis;
(function (Vis) {
    Vis[Vis["Map"] = 0] = "Map";
    Vis[Vis["Timeline"] = 1] = "Timeline";
    Vis[Vis["CorrespondentGraph"] = 2] = "CorrespondentGraph";
    Vis[Vis["CoCitationGraph"] = 3] = "CoCitationGraph";
})(Vis || (Vis = {}));
class VisualizationsPanel extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.state = {
            active: Vis.Timeline
        };
    }
    render() {
        return (React.createElement("div", { style: {
                display: this.props.fullScreen ? 'grid' : 'block',
                gridTemplateColumns: '1fr 5fr 3em',
                height: '100%',
                width: '100%',
            } },
            React.createElement("ul", { style: { margin: '3em 0', padding: 0 } },
                React.createElement(exports.Li, { active: this.state.active === Vis.Map, fullScreen: this.props.fullScreen, onClick: () => {
                        this.setState({ active: Vis.Map });
                        this.props.handleFullScreen();
                    } }, "Map"),
                React.createElement(exports.Li, { active: this.state.active === Vis.Timeline, fullScreen: this.props.fullScreen, onClick: () => {
                        this.setState({ active: Vis.Timeline });
                        this.props.handleFullScreen();
                    } }, "Timeline"),
                React.createElement(exports.Li, { active: this.state.active === Vis.CorrespondentGraph, fullScreen: this.props.fullScreen, onClick: () => {
                        this.setState({ active: Vis.CorrespondentGraph });
                        this.props.handleFullScreen();
                    } }, "Correspondent graph"),
                React.createElement(exports.Li, { active: this.state.active === Vis.CoCitationGraph, fullScreen: this.props.fullScreen, onClick: () => {
                        this.setState({ active: Vis.CoCitationGraph });
                        this.props.handleFullScreen();
                    } }, "Cocitation graph")),
            (this.state.active === Vis.Timeline &&
                this.props.fullScreen) &&
                React.createElement(timeline_1.default, null),
            (this.state.active === Vis.CorrespondentGraph &&
                this.props.fullScreen) &&
                React.createElement(correspondent_1.default, { searchResults: this.props.searchResults }),
            (this.state.active === Vis.CoCitationGraph &&
                this.props.fullScreen) &&
                React.createElement(cocitation_1.default, { searchResults: this.props.searchResults })));
    }
}
exports.default = VisualizationsPanel;
