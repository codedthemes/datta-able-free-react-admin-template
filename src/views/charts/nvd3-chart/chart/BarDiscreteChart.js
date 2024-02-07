import React from 'react';
import NVD3Chart from 'react-nvd3';

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

const BarDiscreteChart = () => {
  return <NVD3Chart tooltip={{ enabled: true }} type="discreteBarChart" datum={datum} x="label" y="value" height={300} showValues />;
};

export default BarDiscreteChart;
