import { React, useEffect, useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { CreateAttendee } from "./Components/CreateAttendee";
import { AttendeeList } from "./Components/AttendeeList";
import { Attendee } from "./StyledComponents/MyStyledComponents";

export default function App() {
  const [attendees, setAttendees] = useState([]);
  useEffect(() => {
    fetch("attendees.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setAttendees(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

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
                  <div className="d-flex gap-2">
                    <h3>{attendee.firstName}</h3>
                    <h3>{attendee.lastName}</h3>
                  </div>
                  <div className="d-flex gap-3">
                    <p>Age: {attendee.age}</p>
                    <p>Email: {attendee.email}</p>
                  </div>
                </Attendee>
              </Row>
            </Container>
          );
        })}
      </AttendeeList>
    </>
  );
}
