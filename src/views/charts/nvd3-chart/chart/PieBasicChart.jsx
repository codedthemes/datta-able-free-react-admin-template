import React, { useEffect } from 'react';
import * as d3 from 'd3';

const datum = [
  { key: 'One', y: 29, color: '#ff8a65' },
  { key: 'Two', y: 0, color: '#f4c22b' },
  { key: 'Three', y: 32, color: '#04a9f5' },
  { key: 'Four', y: 196, color: '#3ebfea' },
  { key: 'Five', y: 2, color: '#4F5467' },
  { key: 'Six', y: 98, color: '#1de9b6' },
  { key: 'Seven', y: 13, color: '#a389d4' },
  { key: 'Eight', y: 5, color: '#FE8A7D' }
];

const PieBasicChart = () => {
  useEffect(() => {
    const width = 300;
    const height = 300;
    const radius = Math.min(width, height) / 2;

    const svg = d3
      .select('#chart')
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`);

    const colorScale = d3.scaleOrdinal().range(['#ff8a65', '#f4c22b', '#04a9f5', '#3ebfea', '#4F5467', '#1de9b6', '#a389d4', '#FE8A7D']);

    const pie = d3.pie().value((d) => d.y);

    const path = d3.arc().outerRadius(radius).innerRadius(0);

    const arcs = svg.selectAll('arc').data(pie(datum)).enter().append('g');

    arcs
      .append('path')
      .attr('d', path)
      .attr('fill', (d) => colorScale(d.data.color))
      .attr('stroke', 'white')
      .style('stroke-width', '2px');

    arcs
      .append('text')
      .attr('transform', (d) => `translate(${path.centroid(d)})`)
      .attr('dy', '0.35em')
      .style('text-anchor', 'middle')
      .text((d) => d.data.key);

    arcs.append('svg:text').attr('text-anchor', 'middle');
  }, []);

  return <div id="chart"></div>;
};

export default PieBasicChart;
