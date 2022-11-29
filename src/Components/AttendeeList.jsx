import { Container } from "reactstrap";
import { FormTitle } from "../StyledComponents/MyStyledComponents";

export function AttendeeList(props) {
  return (
    <Container>
      <FormTitle>Attendee list</FormTitle>
      {props.children}
    </Container>
  );
}
