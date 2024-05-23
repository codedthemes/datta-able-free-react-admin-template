import React, { useEffect } from 'react';
import * as d3 from 'd3';

function getDatum() {
  var sin = [],
    sin2 = [],
    cos = [];
  for (var i = 0; i < 100; i++) {
    sin.push({
      x: i,
      y: Math.sin(i / 10)
    });
    sin2.push({
      x: i,
      y: Math.sin(i / 10) * 0.25 + 0.5
    });
    cos.push({
      x: i,
      y: 0.5 * Math.cos(i / 10)
    });
  }
  return [
    {
      values: sin,
      key: 'Sine Wave',
      color: '#A389D4'
    },
    {
      values: cos,
      key: 'Cosine Wave',
      color: '#04a9f5'
    },
    {
      values: sin2,
      key: 'Another sine wave',
      color: '#1de9b6',
      area: true
    }
  ];
}

const LineChart = () => {
  useEffect(() => {
    const data = getDatum();

    const isSmallScreen = window.matchMedia('(max-width: 1024px)').matches;
    const customWidth = isSmallScreen ? 300 : 510;
    const margin = { top: 20, right: 50, bottom: 50, left: 50 };
    const width = customWidth - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;

    const svg = d3
      .select('#line-chart-container') // Assuming you have a container element with id 'line-chart-container'
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const xScale = d3.scaleLinear().domain([0, 100]).range([0, width]);
    const yScale = d3.scaleLinear().domain([-1, 1]).range([height, 0]);

    const line = d3
      .line()
      .x((d) => xScale(d.x))
      .y((d) => yScale(d.y));

    data.forEach((series) => {
      svg
        .append('path')
        .datum(series.values)
        .attr('class', 'line')
        .attr('d', line)
        .style('stroke', series.color)
        .style('fill', series.color);
    });

    // Add X axis
    svg
      .append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(xScale))
      .append('text')
      .attr('x', width / 2)
      .attr('y', 30)
      .attr('dy', '1em')
      .style('text-anchor', 'middle')
      .text('Time (ms)');

    // Add Y axis
    svg
      .append('g')
      .call(d3.axisLeft(yScale))
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', -40)
      .attr('x', -height / 2)
      .attr('dy', '1em')
      .style('text-anchor', 'middle')
      .text('Voltage (v)');
  }, []);

  return <div id="line-chart-container"></div>;
};

export default LineChart;
