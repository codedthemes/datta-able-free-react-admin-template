// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// project-imports
import MainCard from 'components/MainCard';

// ==============================|| OTHER - SAMPLE PAGE ||============================== //

export default function SamplePage() {
  return (
    <Row>
      <Col xl={12}>
        <MainCard title="Hello Card">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt molestias soluta unde facilis corrupti commodi inventore
          deleniti maxime temporibus delectus? Totam nam architecto minima sed labore nostrum laborum quis dignissimos?
        </MainCard>
      </Col>
    </Row>
  );
}
