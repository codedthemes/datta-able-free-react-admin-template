// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// project-imports
import ChecksandRadios from 'sections/form-element/ChecksandRadios';
import CustomForms from 'sections/form-element/CustomForms';
import DataList from 'sections/form-element/DataList';
import FormControls from 'sections/form-element/FormControls';
import FormControlState from 'sections/form-element/FormControlState';
import FormGrid from 'sections/form-element/FormGrid';
import HorizontalForm from 'sections/form-element/HorizontalForm';
import InlineForm from 'sections/form-element/InlineForm';
import InputGroup from 'sections/form-element/InputGroup';
import Picker from 'sections/form-element/Picker';
import Sizeing from 'sections/form-element/Sizing';
import SupportedElements from 'sections/form-element/SupportedElements';
import Tooltips from 'sections/form-element/Tooltips';
import ValidationForm from 'sections/form-element/ValidationForm';

export default function FormBasic() {
  return (
    <Row>
      <Col xs={12}>
        <FormControls />
        <Sizeing />
        <Picker />
        <DataList />
        <FormControlState />
        <InlineForm />
        <FormGrid />
        <HorizontalForm />
        <ValidationForm />
        <SupportedElements />
        <Tooltips />
        <ChecksandRadios />
        <InputGroup />
        <CustomForms />
      </Col>
    </Row>
  );
}
