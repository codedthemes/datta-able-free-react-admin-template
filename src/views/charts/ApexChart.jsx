// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// project-imports
import MainCard from 'components/MainCard';
import ApexBarChart from 'sections/charts/apex-charts/BarChart';
import ApexBarHorizontalChart from 'sections/charts/apex-charts/BarHorizontalChart';
import ApexBarHorizontalStackedChart from 'sections/charts/apex-charts/BarHorizontalStackedChart';
import ApexBarStackedChart from 'sections/charts/apex-charts/BarStackedChart';
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
        <Col sm={6}>
          <MainCard title="Bar chart">
            <ApexBarChart />
          </MainCard>
        </Col>
        <Col sm={6}>
          <MainCard title="Bar chart stacked">
            <ApexBarStackedChart />
          </MainCard>
        </Col>
        <Col sm={6}>
          <MainCard title="Bar chart horizontal">
            <ApexBarHorizontalChart />
          </MainCard>
        </Col>
        <Col sm={6}>
          <MainCard title="Bar chart horizontal stacked">
            <ApexBarHorizontalStackedChart />
          </MainCard>
        </Col>
      </Row>
    </>
  );
}
