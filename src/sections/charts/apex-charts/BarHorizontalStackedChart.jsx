import { useEffect, useState } from 'react';

// third-party
import ReactApexChart from 'react-apexcharts';

// chart-options
const barHorizontalStckedChartOptions = {
  chart: {
    type: 'bar',
    height: 350,
    background: 'transparent',
    toolbar: { show: false },
    stacked: true
  },
  plotOptions: {
    bar: {
      horizontal: true
    }
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  xaxis: {
    categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014]
  },

  tooltip: {
    y: {
      formatter: function (val) {
        return val + 'K';
      }
    }
  },
  fill: {
    opacity: 1
  },
  legend: {
    show: true,
    position: 'top',
    offsetX: 10,
    offsetY: 10,
    labels: { useSeriesColors: false },
    markers: { size: 6, shape: 'circle', strokeWidth: 0 },
    itemMargin: { horizontal: 15, vertical: 8 }
  }
};

// ==============================|| APEX CHART - BAR HORIZONTAL STACKED  CHART ||============================== //

export default function BarHorizontalStackedChart() {
  const primaryMain = 'var(--bs-primary)';
  const successMain = 'var(--bs-success)';
  const warningMain = 'var(--bs-warning)';
  const infoMain = 'var(--bs-info)';
  const indigoMain = 'var(--bs-indigo)';

  const line = 'var(--bs-border-color)';

  const [series] = useState([
    {
      name: 'Marine Sprite',
      data: [44, 55, 41, 37, 22, 43, 21]
    },
    {
      name: 'Striking Calf',
      data: [53, 32, 33, 52, 13, 43, 32]
    },
    {
      name: 'Tank Picture',
      data: [12, 17, 11, 9, 15, 11, 20]
    },
    {
      name: 'Bucket Slope',
      data: [9, 7, 5, 8, 6, 9, 4]
    },
    {
      name: 'Reborn Kid',
      data: [25, 12, 19, 32, 25, 24, 10]
    }
  ]);

  const [options, setOptions] = useState(barHorizontalStckedChartOptions);

  useEffect(() => {
    setOptions({
      ...barHorizontalStckedChartOptions,
      chart: { ...barHorizontalStckedChartOptions.chart },
      colors: [primaryMain, successMain, warningMain, infoMain, indigoMain],
      xaxis: { ...barHorizontalStckedChartOptions.xaxis },
      grid: { borderColor: line },
      legend: { ...barHorizontalStckedChartOptions.legend, labels: { ...barHorizontalStckedChartOptions.legend.labels } }
    });
  }, [primaryMain, successMain, warningMain, infoMain, indigoMain]);

  return <ReactApexChart options={options} series={series} type="bar" height={350} />;
}
