import { useEffect, useState } from 'react';

// third-party
import ReactApexChart from 'react-apexcharts';

// chart-options
const BarStackedChartOptions = {
  chart: {
    stacked: true,
    toolbar: {
      show: false
    },
    zoom: {
      enabled: true
    }
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        legend: {
          position: 'bottom',
          offsetX: -10,
          offsetY: 0
        }
      }
    }
  ],
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      endingShape: 'rounded'
    }
  },
  xaxis: {
    type: 'datetime',
    categories: [
      '2011-01-01T00:00:00Z',
      '2011-01-02T00:00:00Z',
      '2011-01-03T00:00:00Z',
      '2011-01-04T00:00:00Z',
      '2011-01-05T00:00:00Z',
      '2011-01-06T00:00:00Z'
    ]
  },
  legend: {
    show: true,
    position: 'top',
    offsetX: 10,
    offsetY: 10,
    labels: { useSeriesColors: false },
    markers: { size: 6, shape: 'circle', strokeWidth: 0 },
    itemMargin: { horizontal: 10, vertical: 8 }
  },
  fill: {
    opacity: 1
  }
};

// ==============================|| APEX CHART - BAR STACKED CHART ||============================== //

export default function BarStackedChart() {
  const primaryMain = 'var(--bs-primary)';
  const successMain = 'var(--bs-success)';
  const warningMain = 'var(--bs-warning)';
  const infoMain = 'var(--bs-info)';

  const line = 'var(--bs-border-color)';

  const [series] = useState([
    {
      name: 'PRODUCT A',
      data: [44, 55, 41, 67, 22, 43]
    },
    {
      name: 'PRODUCT B',
      data: [13, 23, 20, 8, 13, 27]
    },
    {
      name: 'PRODUCT C',
      data: [11, 17, 15, 15, 21, 14]
    },
    {
      name: 'PRODUCT D',
      data: [21, 7, 25, 13, 22, 8]
    }
  ]);

  const [options, setOptions] = useState(BarStackedChartOptions);

  useEffect(() => {
    setOptions({
      ...BarStackedChartOptions,
      chart: { ...BarStackedChartOptions.chart },
      colors: [primaryMain, successMain, warningMain, infoMain],
      xaxis: { ...BarStackedChartOptions.xaxis },
      grid: { borderColor: line },
      legend: { ...BarStackedChartOptions.legend, labels: { ...BarStackedChartOptions.legend.labels } }
    });
  }, [primaryMain, successMain, warningMain, infoMain]);

  return <ReactApexChart options={options} series={series} type="bar" height={350} />;
}
