import {
  Container,
  Form,
  Row,
  Col,
  FormGroup,
  Input,
  Button,
} from "reactstrap";
import { FormTitle, MainForm, MainTitle } from "../StyledComponents/MyStyledComponents";

export function CreateAttendee() {
  return (
    <Container>
      <MainTitle>Management Dashbaord</MainTitle>
      <MainForm>
        <FormTitle>Create Attendee</FormTitle>
        <Form>
          <Row>
            <Col md={2}>
              <FormGroup>
                <Input
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  type="text"
                  required
                />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Input
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  type="text"
                  required
                />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Input
                  id="age"
                  name="age"
                  type="number"
                  placeholder="Age"
                  min="1"
                  required
                />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Input
                  id="lemail"
                  name="email"
                  placeholder="Email"
                  type="email"
                  required
                />
              </FormGroup>
            </Col>
            <Col md={1}>
              <Button>Submit</Button>
            </Col>
          </Row>
        </Form>
      </MainForm>
    </Container>
  );
}
