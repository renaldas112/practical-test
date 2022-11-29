import { React, useEffect, useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { CreateAttendee } from "./Components/CreateAttendee";
import { AttendeeList } from "./Components/AttendeeList";
import {
  Attendee,
  AttendeeName,
  AttendeeInfo,
} from "./StyledComponents/MyStyledComponents";
import axios from "axios";
import { updateJSON } from "./db";

export default function App() {
  const [attendeeInfo, setAttendeeInfo] = useState({
    firstName: "",
    lastName: "",
    age: "",
    email: "",
  });
  const [attendees, setAttendees] = useState([]);

  useEffect(() => {
    const fetchAttendees = async () => {
      const response = await fetch("attendees.json");
      const data = await response.json();
      setAttendees(data);
    };
    fetchAttendees();
  }, []);

  const deleteAttendee = async (id) => {
    axios.get("attendees.json", attendees).then((res) => {
      if (res.status === 200) {
        setAttendees(
          attendees.filter((attendee) => {
            return attendee.id !== id;
          })
        );
      }
    });
    const newData = attendees;
    // updateJSON(newData);
  };

  const addAttendee = async (firstName, lastName, age, email) => {
    let response = await fetch("attendees.json", {
      method: "POST",
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        age: age,
        email: email,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    let data = await response.json();
    setAttendees((attendees) => [data, ...attendees]);
    setAttendeeInfo({
      firstName: "",
      lastName: "",
      age: "",
      email: "",
    });
  };

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
                  <Button
                    color="danger"
                    onClick={() => deleteAttendee(attendee.id)}
                  >
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
