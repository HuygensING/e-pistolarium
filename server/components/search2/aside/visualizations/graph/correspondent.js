"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const index_1 = require("./index");
class CorrespondentGraph extends React.PureComponent {
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
            return React.createElement("img", { src: "/static/graphics/ui/loader.svg" });
        return (React.createElement(index_1.default, Object.assign({ links: this.state.links, nodes: this.state.nodes }, this.props)));
    }
}
exports.default = CorrespondentGraph;
