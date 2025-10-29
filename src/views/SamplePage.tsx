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
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex corporis totam qui, accusamus consequuntur quas voluptate eveniet
          consequatur quasi, alias doloribus illo eligendi ab quisquam deserunt saepe dignissimos libero dolores.
        </MainCard>
      </Col>
    </Row>
  );
}
