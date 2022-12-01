import { React, useEffect, useState } from "react";
import { Container, Row, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { CreateAttendee } from "./Components/CreateAttendee";
import { AttendeeList } from "./Components/AttendeeList";
import {
  Attendee,
  AttendeeName,
  AttendeeInfo,
} from "./StyledComponents/MyStyledComponents";
import { v4 as uuidv4 } from "uuid";

export default function App() {
  const [attendee, setAttendee] = useState({
    id: "",
    firstName: "",
    lastName: "",
    age: null,
    email: "",
  });

  const [addAttendeeInfo, setAddAttendeeInfo] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setAddAttendeeInfo(addAttendeeInfo.concat(attendee));
    document.querySelector("form").reset();
  };

  const handleDelete = (id) => {
    const newAttendeesList = addAttendeeInfo.filter(
      (attend) => attend.id !== id
    );
    setAddAttendeeInfo(newAttendeesList);
  };

  return (
    <>
      <CreateAttendee attendee={attendee} setAttendee={setAttendee}>
        <Button onClick={handleSubmit}>Submit</Button>
      </CreateAttendee>
      <AttendeeList>
        {addAttendeeInfo.map((attendee) => {
          return (
            <Container key={uuidv4()}>
              <Row>
                <Attendee>
                  <AttendeeName>
                    <h3>{attendee.firstName}</h3>
                    <h3>{attendee.lastName}</h3>
                  </AttendeeName>
                  <AttendeeInfo>
                    <p>Age: {attendee.age}</p>
                    <p>Email: {attendee.email}</p>
                  </AttendeeInfo>
                  <Button color="primary">Edit</Button>
                  <Button color="danger" onClick={() => handleDelete(attendee.id)}>
                    Delete
                  </Button>
                </Attendee>
              </Row>
            </Container>
          );
        })}
      </AttendeeList>
    </>
  );
}
