import { useEffect, useState } from 'react';

// third-party
import ReactApexChart from 'react-apexcharts';

// project-imports
import MainCard from 'components/MainCard';

// chart-options
const earningChartOptions = {
  chart: {
    toolbar: {
      show: false
    }
  },
  dataLabels: {
    enabled: false
  },
  markers: {
    size: 6,
    hover: {
      size: 5
    }
  },
  stroke: {
    curve: 'straight',
    width: 6
  },

  grid: {
    xaxis: {
      lines: {
        show: false
      }
    },
    yaxis: {
      lines: {
        show: false
      }
    }
  },

  tooltip: {
    x: {
      show: false
    },

    marker: {
      show: false
    }
  },

  yaxis: {
    labels: {
      show: false
    }
  },

  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    axisTicks: {
      show: false
    },
    axisBorder: {
      show: false
    }
  }
};

// =============================|| DEFAULT - EARNING CHART ||============================== //

export default function EarningChart() {
  const [series] = useState([{ name: 'Market Days ', data: [10, 60, 45, 72, 45, 86], color: '#fff' }]);

  const [options, setOptions] = useState(earningChartOptions);

  useEffect(() => {
    setOptions({
      ...earningChartOptions,
      chart: { ...earningChartOptions.chart },
      xaxis: { ...earningChartOptions.xaxis, labels: { style: { colors: '#fff' } } }
    });
  }, []);

  return (
    <MainCard
      title={<p className="mb-0 text-white">Earnings</p>}
      headerClassName="border-0"
      className="bg-primary overflow-hidden"
      bodyClassName="py-0"
    >
      <div className="earning-text">
        <h3 className="mb-2 text-white f-w-300">
          $4295.36 <i className="ph ph-arrow-up" />
        </h3>
        <span className="text-uppercase text-white d-block">Total Earnings</span>
      </div>
      <ReactApexChart options={options} series={series} type="line" height={210} />
    </MainCard>
  );
}
