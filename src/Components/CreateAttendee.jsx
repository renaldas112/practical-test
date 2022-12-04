import { Form, Row, Col, FormGroup, Input } from "reactstrap";
import { FormTitle } from "../StyledComponents/MyStyledComponents";
import { v4 as uuidv4 } from "uuid";
import useTheme from "../Hooks/ThemeContext";

export function CreateAttendee(props) {
  const { theme } = useTheme();

  const useHandleOnChange = (e) => {
    props.setAttendee({
      ...props.attendee,
      [e.target.name]: e.target.value,
      id: uuidv4(),
    });
  };

  return (
    <>
      <div
        className="d-flex flex-column card-body create-attendee-styled align-items-center"
        id={theme}
      >
        <FormTitle className="form-title card-header">
          Create Attendee
        </FormTitle>
        <Form className="create-attendee-form">
          <Row>
            <Col className="create-attendee-form--input col-md-2">
              <Input
                name="firstName"
                placeholder="First Name"
                type="text"
                onChange={useHandleOnChange}
                required
              />
            </Col>
            <Col className="create-attendee-form--input col-md-2">
              <Input
                name="lastName"
                placeholder="Last Name"
                type="text"
                onChange={useHandleOnChange}
                required
              />
            </Col>
            <Col className="create-attendee-form--input col-md-2">
              <Input
                name="age"
                type="number"
                placeholder="Age"
                min="1"
                onChange={useHandleOnChange}
                required
              />
            </Col>
            <Col className="create-attendee-form--input col-md-2">
              <Input
                name="email"
                placeholder="Email"
                type="email"
                onChange={useHandleOnChange}
                required
              />
            </Col>
            <Col className="col-md-1">{props.children}</Col>
          </Row>
        </Form>
      </div>
    </>
  );
}
