import {
  FormTitle,
  AttendeeListStyled,
} from "../StyledComponents/MyStyledComponents";

export function AttendeeList(props) {
  return (
    <>
      <FormTitle>Attendee list</FormTitle>
      <AttendeeListStyled>{props.children}</AttendeeListStyled>
    </>
  );
}
