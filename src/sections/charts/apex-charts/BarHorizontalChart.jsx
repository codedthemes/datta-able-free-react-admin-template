import { useEffect, useState } from 'react';

// third-party
import ReactApexChart from 'react-apexcharts';

// chart-options
const barHorizontalChartOptions = {
  chart: {
    type: 'bar',
    height: 350,
    background: 'transparent',
    toolbar: { show: false }
  },
  plotOptions: {
    bar: {
      horizontal: true,
      dataLabels: {
        position: 'top'
      }
    }
  },
  dataLabels: {
    enabled: true,
    offsetX: -6,
    style: {
      fontSize: '12px',
      colors: ['#fff']
    }
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  xaxis: {
    categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007]
  },
  legend: {
    show: true,
    position: 'bottom',
    offsetX: 10,
    offsetY: 10,
    labels: { useSeriesColors: false },
    markers: { size: 6, shape: 'circle', strokeWidth: 0 },
    itemMargin: { horizontal: 15, vertical: 8 }
  }
};

// ==============================|| APEX CHART - BAR HORIZONTAL CHART ||============================== //

export default function BarHorizontalChart() {
  const primaryMain = 'var(--bs-primary)';
  const successMain = 'var(--bs-success)';
  const line = 'var(--bs-border-color)';

  const [series] = useState([
    {
      data: [44, 55, 41, 64, 22, 43, 21]
    },
    {
      data: [53, 32, 33, 52, 13, 44, 32]
    }
  ]);

  const [options, setOptions] = useState(barHorizontalChartOptions);

  useEffect(() => {
    setOptions({
      ...barHorizontalChartOptions,
      chart: { ...barHorizontalChartOptions.chart },
      colors: [primaryMain, successMain],
      xaxis: { ...barHorizontalChartOptions.xaxis },
      grid: { borderColor: line },
      legend: { ...barHorizontalChartOptions.legend, labels: { ...barHorizontalChartOptions.legend.labels } }
    });
  }, [line, primaryMain, successMain]);

  return <ReactApexChart options={options} series={series} type="bar" height={350} />;
}
