import Modal from "react-modal";
import { Form, Row, Col, FormGroup, Input, Button } from "reactstrap";
import { EditModalContent } from "../StyledComponents/MyStyledComponents";

export function EditModal(props) {
  const useHandleOnChange = (e) => {
    props.setAttendee({
      ...props.attendee,
      [e.target.name]: e.target.value,
    });
  };
  Modal.setAppElement("#root");

  return (
    <EditModalContent>
      <Form>
        {props.children}
        <Row>
          <Col md={2}>
            <FormGroup>
              <Input
                name="firstName"
                placeholder="cia bus bbz"
                type="text"
                required
                onChange={useHandleOnChange}
              />
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Input
                name="lastName"
                placeholder="cia bus bbz"
                type="text"
                required
                onChange={useHandleOnChange}
              />
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Input
                name="age"
                type="number"
                placeholder="cia bus bbz"
                min="1"
                required
                onChange={useHandleOnChange}
              />
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Input
                name="email"
                placeholder="cia bus bbz"
                type="email"
                required
                onChange={useHandleOnChange}
              />
            </FormGroup>
          </Col>
        </Row>
      </Form>
    </EditModalContent>
  );
}
