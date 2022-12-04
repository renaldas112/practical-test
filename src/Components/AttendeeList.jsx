import { FormTitle } from "../StyledComponents/MyStyledComponents";

export function AttendeeList(props) {

  return (
    <>
      <FormTitle className="form-title">Attendee list</FormTitle>
      <div className="attendee-list d-flex" >{props.children}</div>
    </>
  );
}
