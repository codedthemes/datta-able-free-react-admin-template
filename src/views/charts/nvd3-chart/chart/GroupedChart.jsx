import React, { useEffect } from 'react';
import * as d3 from 'd3';

function generateNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getDatum() {
  let data = [];
  const len = 12;

  for (let i = 0; i < len; i++) {
    data.push({
      x: i,
      y0: generateNumber(0, 60),
      y1: generateNumber(0, 50),
      y2: generateNumber(0, 30)
    });
  }

  return data;
}

const GroupedColumnChart = () => {
  useEffect(() => {
    const data = getDatum();

    const isSmallScreen = window.matchMedia('(max-width: 1024px)').matches;
    const customWidth = isSmallScreen ? 300 : 480;
    const margin = { top: 20, right: 20, bottom: 40, left: 40 };
    const width = customWidth - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;

    const svg = d3
      .select('#multi-chart')
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const colorScale = d3.scaleOrdinal().range(['#A389D4', '#04a9f5', '#1de9b6']);
    const groupKeys = ['y0', 'y1', 'y2'];

    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d.x))
      .range([0, width])
      .padding(0.1);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => Math.max(d.y0, d.y1, d.y2))])
      .range([height, 0]);

    data.forEach((d) => {
      const groupWidth = xScale.bandwidth() / groupKeys.length;

      groupKeys.forEach((key, index) => {
        svg
          .append('rect')
          .attr('x', xScale(d.x) + index * groupWidth)
          .attr('y', yScale(d[key]))
          .attr('height', height - yScale(d[key]))
          .attr('width', groupWidth)
          .attr('fill', colorScale(key));
      });
    });

    // Add X axis
    svg.append('g').attr('transform', `translate(0,${height})`).call(d3.axisBottom(xScale));

    // Add Y axis
    svg.append('g').call(d3.axisLeft(yScale));
  }, []);

  return <div id="multi-chart"></div>;
};

export default GroupedColumnChart;
