import React, { useState, useEffect } from 'react';
import * as d3 from 'd3';

const datum = [
  {
    key: 'Cumulative Return',
    values: [
      {
        label: 'A',
        value: -29.765957771107,
        color: '#3ebfea'
      },
      {
        label: 'B',
        value: 10,
        color: '#04a9f5'
      },
      {
        label: 'C',
        value: 32.807804682612,
        color: '#ff8a65'
      },
      {
        label: 'D',
        value: 196.45946739256,
        color: '#1de9b6'
      },
      {
        label: 'E',
        value: 0.25434030906893,
        color: '#4C5667'
      },
      {
        label: 'F',
        value: -98.079782601442,
        color: '#69CEC6'
      },
      {
        label: 'G',
        value: -13.925743130903,
        color: '#a389d4'
      },
      {
        label: 'H',
        value: -5.1387322875705,
        color: '#FE8A7D'
      }
    ]
  }
];

function BarDiscreteChart() {
  const isSmallScreen = window.matchMedia('(max-width: 1024px)').matches;
  const width = isSmallScreen ? 300 : 510;
  const height = 300;

  const [data, setData] = useState([]);

  useEffect(() => {
    const chartData = datum;
    if (chartData.length) {
      setData(chartData);
    }
  }, []);

  useEffect(() => {
    if (data.length) {
      drawChart();
    }
  });

  function drawChart() {
    const margin = { top: 20, right: 50, bottom: 50, left: 50 };
    const boundedHeight = height - margin.top - margin.bottom;
    const boundedWidth = width - margin.left - margin.right;

    const svg = d3
      .select('#container')
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .style('transform', `translate(${margin.left}px, ${margin.top}px)`);

    const yAccessor = (d) => d.value;
    const xAccessor = (d) => d.label;

    const xScale = d3.scaleBand().domain(data[0].values.map(xAccessor)).range([0, boundedWidth]).padding(0.1);
    const yScale = d3
      .scaleLinear()
      .domain([d3.min(data[0].values, yAccessor), d3.max(data[0].values, yAccessor)])
      .range([boundedHeight, 0]);

    svg
      .selectAll('rect')
      .data(data[0].values)
      .enter()
      .append('rect')
      .attr('x', (d) => xScale(xAccessor(d)))
      .attr('y', (d) => yScale(Math.max(0, yAccessor(d))))
      .attr('width', xScale.bandwidth())
      .attr('height', (d) => Math.abs(yScale(0) - yScale(yAccessor(d))))
      .attr('fill', (d) => d.color)
      .attr('title', (d) => `${d.label}: ${d.value}`) // Add this line for tooltips
      .append('title')
      .text((d) => `${d.label}: ${d.value}`);

    svg.append('g').attr('transform', `translate(0, ${boundedHeight})`).call(d3.axisBottom(xScale));

    svg.append('g').call(d3.axisLeft(yScale));
  }

  return <div id="container"></div>;
}

export default BarDiscreteChart;
