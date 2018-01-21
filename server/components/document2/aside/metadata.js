"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const annotation_1 = require("../../../actions/annotation");
const downloadStringAsFile = (str, mimeType = 'text/plain') => {
    const a = document.createElement('a');
    const href = URL.createObjectURL(new Blob([str], { type: mimeType }));
    a.href = href;
    a.target = '_blank';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
};
const MetadataList = (props) => React.createElement("ul", { style: {
        fontFamily: "'Roboto', sans-serif",
        listStyle: 'none',
        margin: '3em 0',
        maxWidth: '550px',
        padding: 0,
    } }, props.children);
const MetadataItem = (props) => React.createElement("li", { style: {
        marginBottom: '1em',
    } }, props.children);
const Label = (props) => React.createElement("label", { style: {
        color: '#888',
        fontSize: '.7em',
    } }, props.children);
class Metadata extends React.PureComponent {
    componentDidMount() {
        const root = this.props.rootAnnotation;
        if (root.id != null)
            annotation_1.fetchKeywords(root);
    }
    render() {
        return (React.createElement(MetadataList, null,
            React.createElement(MetadataItem, null,
                React.createElement(Label, null, "XML"),
                React.createElement("div", null,
                    React.createElement("button", { onClick: async () => {
                            const response = await fetch(`/api/documents/${this.props.rootAnnotation.id}/orig`);
                            const xml = await response.text();
                            downloadStringAsFile(xml, 'text/xml');
                        } }, "Download"))),
            React.createElement(MetadataItem, null,
                React.createElement(Label, null, "ID"),
                React.createElement("div", null, this.props.rootAnnotation.id)),
            React.createElement(MetadataItem, null,
                React.createElement(Label, null, "CORRESPONDENCE"),
                React.createElement("div", null, this.props.rootAnnotation.metadata.get('correspondence'))),
            React.createElement(MetadataItem, null,
                React.createElement(Label, null, "DATE"),
                React.createElement("div", null, this.props.rootAnnotation.metadata.get('date'))),
            React.createElement(MetadataItem, null,
                React.createElement(Label, null, "SENDER"),
                React.createElement("div", null, this.props.rootAnnotation.metadata.get('sender'))),
            React.createElement(MetadataItem, null,
                React.createElement(Label, null, "SENDER LOCATION"),
                React.createElement("div", null, this.props.rootAnnotation.metadata.get('senderloc'))),
            React.createElement(MetadataItem, null,
                React.createElement(Label, null, "RECIPIENT"),
                React.createElement("div", null, this.props.rootAnnotation.metadata.get('recipient'))),
            React.createElement(MetadataItem, null,
                React.createElement(Label, null, "RECIPIENT LOCATION"),
                React.createElement("div", null, this.props.rootAnnotation.metadata.get('recipientloc')))));
    }
}
exports.default = Metadata;
