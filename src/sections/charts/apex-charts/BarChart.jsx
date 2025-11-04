import { useEffect, useState } from 'react';

// third-party
import ReactApexChart from 'react-apexcharts';

// chart options
const columnChartOptions = {
  chart: {
    type: 'bar',
    height: 350,
    background: 'transparent',
    toolbar: { show: false }
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      endingShape: 'rounded'
    }
  },
  dataLabels: { enabled: false },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  xaxis: { categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'] },
  fill: { opacity: 1 },
  tooltip: {
    y: {
      formatter(val) {
        return `$ ${val} thousands`;
      }
    }
  },
  legend: {
    show: true,
    position: 'bottom',
    offsetX: 10,
    offsetY: 10,
    labels: { useSeriesColors: false },
    markers: { size: 6, shape: 'circle', strokeWidth: 0 },
    itemMargin: { horizontal: 15, vertical: 8 }
  },
  responsive: [{ breakpoint: 600, options: { yaxis: { show: false } } }]
};

// ==============================|| APEXCHART - COLUMN ||============================== //

export default function ApexColumnChart() {
  const textPrimary = 'var(--bs-primary)';
  const line = 'var(--bs-border-color)';

  const primary700 = 'var(--bs-teal)';
  const primaryMain = 'var(--bs-primary)';
  const successMain = 'var(--bs-success)';

  const [series] = useState([
    {
      name: 'Net Profit',
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    },
    {
      name: 'Revenue',
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
    },
    {
      name: 'Free Cash Flow',
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
    }
  ]);

  const [options, setOptions] = useState(columnChartOptions);

  useEffect(() => {
    setOptions({
      ...columnChartOptions,
      chart: { ...columnChartOptions.chart },
      colors: [primary700, primaryMain, successMain],
      xaxis: { ...columnChartOptions.xaxis },
      grid: { borderColor: line },
      legend: { ...columnChartOptions.legend, labels: { ...columnChartOptions.legend.labels } }
    });
  }, [textPrimary, line, primary700, primaryMain, successMain]);

  return <ReactApexChart options={options} series={series} type="bar" height={350} />;
}
