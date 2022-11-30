import { Container, Form, Row, Col, FormGroup, Input } from "reactstrap";
import {
  FormTitle,
  MainForm,
  MainTitle,
} from "../StyledComponents/MyStyledComponents";

export function CreateAttendee(props) {
  const useHandleOnChange = (e) => {
    props.setAttendeeInfo({
      ...props.attendeeInfo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Container>
        <MainTitle>Management Dashbaord</MainTitle>
        <MainForm>
          <FormTitle>Create Attendee</FormTitle>
          <Form>
            <Row>
              <Col md={2}>
                <FormGroup>
                  <Input
                    name="firstName"
                    placeholder="First Name"
                    type="text"
                    onChange={useHandleOnChange}
                    required
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
                    required
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
                    required
                  />
                </FormGroup>
              </Col>
              <Col md={2}>
                <FormGroup>
                  <Input
                    name="email"
                    placeholder="Email"
                    type="email"
                    onChange={useHandleOnChange}
                    required
                  />
                </FormGroup>
              </Col>
              <Col md={1}>{props.children}</Col>
            </Row>
          </Form>
        </MainForm>
      </Container>
    </>
  );
}
