import Modal from "react-modal";
import { Form, Row, Col, FormGroup, Input } from "reactstrap";
import { EditModalContent } from "../StyledComponents/MyStyledComponents";

export function EditModal(props) {
  const useHandleOnChange = (e) => {
    props.setSelectedAttendee({
      ...props.selectedAttendee,
      [e.target.name]: e.target.value,
    });
  };
  Modal.setAppElement("#root");

  return (
    <EditModalContent>
      <Form className="d-flex flex-row">
        <Row>
          <Col md={2}>
            <FormGroup>
              <Input
                name="firstName"
                placeholder="First Name"
                type="text"
                onChange={useHandleOnChange}
              />
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Input
                name="lastName"
                placeholder="Last Name"
                type="text"
                onChange={useHandleOnChange}
              />
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Input
                name="age"
                type="number"
                placeholder="Age"
                min="1"
                onChange={useHandleOnChange}
              />
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Input
                name="email"
                placeholder="email"
                type="email"
                onChange={useHandleOnChange}
              />
            </FormGroup>
          </Col>
        </Row>
        {props.children}
      </Form>
    </EditModalContent>
  );
}
