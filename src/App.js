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
import useLocalStorage from "./hooks/useLocalStorage";
import { v4 as uuidv4 } from 'uuid';

export default function App() {
  const [attendeeInfo, setAttendeeInfo] = useState({
    firstName: "",
    lastName: "",
    age: null,
    email: "",
  });

  const [addAttendeeInfo, setAddAttendeeInfo] = useState([]);

  const [localAttendee, setLocalAttendee] = useLocalStorage("attendees", []);

  // useEffect(() => {
  //   if(addAttendeeInfo === null) {
  //     return;
  //   } else {
  //     setLocalAttendee(addAttendeeInfo)
  //   }
  // });

  return (
    <>
      <CreateAttendee
        attendeeInfo={attendeeInfo}
        setAttendeeInfo={setAttendeeInfo}
      >
        <Button
          onClick={() => {
            setAddAttendeeInfo(addAttendeeInfo.concat(attendeeInfo));
            setLocalAttendee(addAttendeeInfo);
          }}
        >
          Submit
        </Button>
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
