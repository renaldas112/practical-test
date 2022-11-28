import { React, useState } from "react";
import { Row, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { CreateAttendee } from "./Components/CreateAttendee";
import { AttendeeList } from "./Components/AttendeeList";

export default function App() {
  let id = 0;
  const [attendee, setAttendee] = useState({
    id: 0,
    firstName: "",
    lastName: "",
    age: null,
    email: "",
  });


  return (
    <>
      <CreateAttendee attendee={attendee} setAttendee={setAttendee}>
        <Button>Submit</Button>
      </CreateAttendee>
      <AttendeeList attendee={attendee}></AttendeeList>
    </>
  );
}
