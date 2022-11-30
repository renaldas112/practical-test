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

export default function App() {
  const [attendeeInfo, setAttendeeInfo] = useState({
    firstName: "",
    lastName: "",
    age: "",
    email: "",
  });
  const [attendees, setAttendees] = useState([]);

  return (
    <>
      <CreateAttendee>
        <Button>Submit</Button>
      </CreateAttendee>
      <AttendeeList>
        {attendees.map((attendee) => {
          return (
            <Container key={attendee.id}>
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
                  <Button color="danger">Delete</Button>
                </Attendee>
              </Row>
            </Container>
          );
        })}
      </AttendeeList>
    </>
  );
}
