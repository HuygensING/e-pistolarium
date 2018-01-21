"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const huc_ui_components_1 = require("huc-ui-components");
const visualizations_1 = require("./visualizations");
class AsideComp extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.state = {
            fullScreen: false,
        };
    }
    render() {
        if (this.props.searchResults == null || this.props.searchResults.total > 0)
            return null;
        return (React.createElement(huc_ui_components_1.HucOffCanvasAside, { fullScreen: this.state.fullScreen, onClose: () => this.setState({ fullScreen: false }) },
            React.createElement(huc_ui_components_1.Panel, { style: { height: 'calc(100% - 65px)' }, type: huc_ui_components_1.Aside.Visualisations },
                React.createElement(visualizations_1.default, { fullScreen: this.state.fullScreen, handleFullScreen: () => this.setState({ fullScreen: true }), searchResults: this.props.searchResults }))));
    }
}
exports.default = AsideComp;
