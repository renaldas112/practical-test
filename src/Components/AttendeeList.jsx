import { FormTitle, AttendeeListStyled } from "../StyledComponents/MyStyledComponents";

export function AttendeeList(props) {
  return (
    <AttendeeListStyled>
      <FormTitle>Attendee list</FormTitle>
      {props.children}
    </AttendeeListStyled>
  );
}
