"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const filterText = (root) => {
    if (root.hasOwnProperty('children')) {
        root.children = root.children
            .map(filterText)
            .filter(c => c != null);
    }
    return root.type === '__text' ? null : root;
};
const update = async (props, d3) => {
    const svg = d3.select("svg.vis");
    svg.html('');
    d3.select('#tooltip').remove();
    const svgNode = svg.node();
    const svgRect = svgNode.getBoundingClientRect();
    const g = svg.append("g").attr("transform", "translate(40,0)");
    var tree = d3.tree().size([svgRect.height, svgRect.height - 160]);
    const nodes = filterText(props.tree[0]);
    const root = d3.hierarchy(nodes);
    tree(root);
    const tooltip = d3.select('body').append('div')
        .attr('id', 'tooltip')
        .style('opacity', 0);
    g.selectAll(".link")
        .data(root.descendants().slice(1))
        .enter().append("path")
        .attr("class", "link")
        .attr("d", function (d) {
        return "M" + d.y + "," + d.x
            + "C" + (d.parent.y) + "," + d.x
            + " " + (d.parent.y) + "," + d.parent.x
            + " " + d.parent.y + "," + d.parent.x;
    });
    var node = g.selectAll(".node")
        .data(root.descendants())
        .enter().append("g")
        .attr("class", function (d) {
        return "node" + (d.children ? " node--internal" : " node--leaf");
    })
        .attr("transform", function (d) {
        return "translate(" + d.y + "," + d.x + ")";
    })
        .on('mouseover', (d) => {
        tooltip.transition().duration(200).style('opacity', 1);
        const html = Object.assign({ text: props.text.slice(d.data.start, d.data.end) }, d.data.attributes);
        delete html.xmlns;
        tooltip
            .html(JSON.stringify(html))
            .style("left", (d3.event.pageX - 314) + "px")
            .style("top", (d3.event.pageY - 28) + "px");
    })
        .on("mouseout", function (d) {
        tooltip.transition()
            .duration(500)
            .style("opacity", 0);
    })
        .on('click', (d) => {
    });
    node
        .append("circle")
        .attr("r", (d) => {
        return d.children ? 2 + d.children.length : 2;
    });
    node
        .append("text")
        .attr("dy", 3)
        .attr("x", function (d) {
        return d.children ? -8 - d.children.length : 8;
    })
        .style("text-anchor", function (d) {
        return d.children ? "end" : "start";
    })
        .text(function (d) {
        return d.data.hasOwnProperty('type') ? d.data.type : 'root';
    });
};
class Tree extends React.Component {
    async componentDidMount() {
        this.d3 = await Promise.resolve().then(() => require('d3'));
        update(this.props, this.d3);
    }
    async componentWillReceiveProps(nextProps) {
        this.d3 = await Promise.resolve().then(() => require('d3'));
        update(nextProps, this.d3);
    }
    render() {
        return (React.createElement("svg", { className: "vis", style: {
                width: '100%',
                height: '100%',
            } }));
    }
}
exports.default = Tree;
