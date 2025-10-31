// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// project-imports
import MainCard from 'components/MainCard';
import BarChart from 'sections/charts/apex-charts/BarChart';
import BarHorizontalChart from 'sections/charts/apex-charts/BarHorizontalChart';
import BarHorizontalStackedChart from 'sections/charts/apex-charts/BarHorizontalStackedChart';
import BarStackedChart from 'sections/charts/apex-charts/BarStackedChart';
import ReferenceHeader from 'components/ReferenceHeader';

// =============================|| CHARTS - APEX CHART ||============================== //

export default function ApexChartPage() {
  return (
    <>
      <ReferenceHeader
        caption="ApexCharts is a modern charting library that helps developers to create beautiful and interactive visualizations for web pages."
        link="https://apexcharts.com/"
      />
      <Row>
        <Col lg={6}>
          <MainCard title="Bar chart">
            <BarChart />
          </MainCard>
        </Col>
        <Col lg={6}>
          <MainCard title="Bar chart stacked">
            <BarStackedChart />
          </MainCard>
        </Col>
        <Col lg={6}>
          <MainCard title="Bar chart horizontal">
            <BarHorizontalChart />
          </MainCard>
        </Col>
        <Col lg={6}>
          <MainCard title="Bar chart horizontal stacked">
            <BarHorizontalStackedChart />
          </MainCard>
        </Col>
      </Row>
    </>
  );
}
