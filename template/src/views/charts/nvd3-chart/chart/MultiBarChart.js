import React from 'react';
import NVD3Chart from 'react-nvd3';

function generateNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getDatum() {
  let sin = [],
    sin2 = [],
    sin3 = [];

  const len = 35 + Math.random() * (70 - 35);
  for (let i = 0; i < len; i++) {
    sin.push({
      x: i,
      y: generateNumber(0, 60)
    });
    sin2.push({
      x: i,
      y: generateNumber(0, 100)
    });
    sin3.push({
      x: i,
      y: generateNumber(0, 30)
    });
  }
  return [
    {
      values: sin,
      key: 'Stream #0',
      color: '#A389D4'
    },
    {
      values: sin3,
      key: 'Stream #1',
      color: '#04a9f5'
    },
    {
      values: sin2,
      key: 'Stream #3',
      color: '#1de9b6',
      area: true
    }
  ];
}

const MultiBarChart = () => {
  const data = getDatum();
  return <NVD3Chart type="multiBarChart" datum={data} x="x" y="y" height={300} showValues groupSpacing={0.2} />;
};

export default MultiBarChart;
