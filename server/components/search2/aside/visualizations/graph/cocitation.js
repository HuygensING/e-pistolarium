"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const index_1 = require("./index");
class CoCitationGraph extends React.PureComponent {
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
            return React.createElement("img", { src: "/static/graphics/ui/loader.svg" });
        return (React.createElement(index_1.default, Object.assign({ links: this.state.links, nodes: this.state.nodes }, this.props)));
    }
}
exports.default = CoCitationGraph;
