import { React, useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { CreateAttendee } from "./Components/CreateAttendee";
import { AttendeeList } from "./Components/AttendeeList";
import { NoAttendees } from "./Components/NoAttendees";
import { EditModal } from "./Components/EditModal";
import Modal from "react-modal";
import {
  MainTitle,
  Attendee,
  AttendeeName,
  AttendeeInfo,
} from "./StyledComponents/MyStyledComponents";
import { v4 as uuidv4 } from "uuid";

//TODO: finish edit

const customModalStyling = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default function App() {
  Modal.setAppElement("#root");
  const [attendee, setAttendee] = useState({
    id: "",
    firstName: "",
    lastName: "",
    age: null,
    email: "",
  });

  const [addAttendeeInfo, setAddAttendeeInfo] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setAddAttendeeInfo(addAttendeeInfo.concat(attendee));
    document.querySelector("form").reset();
    console.log(attendee.id);
  };

  const handleDelete = (id) => {
    const newAttendeesList = addAttendeeInfo.filter(
      (attend) => attend.id !== id
    );
    setAddAttendeeInfo(newAttendeesList);
  };

  const handleEdit = (id) => {
    editableAttendee = addAttendeeInfo.findIndex((att) => att.id === id);
    console.log(addAttendeeInfo[editableAttendee].id);
    console.log(addAttendeeInfo);
  };

  const handleOnEditSubmit = (e, id) => {
    e.preventDefault();
    [e.target.name] = e.target.value;
    const changedArray = addAttendeeInfo.filter((attend) => attend.id === id);
    setAddAttendeeInfo(addAttendeeInfo.concat(changedArray));
  };

  let editableAttendee = undefined;
  //TODO: stuck here

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    console.log("Editing...");
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <MainTitle>Management Dashboard</MainTitle>
      <CreateAttendee attendee={attendee} setAttendee={setAttendee}>
        <Button onClick={handleSubmit}>Submit</Button>
      </CreateAttendee>
      {addAttendeeInfo.length ? (
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
                    <Button
                      color="primary"
                      onClick={() => {
                        handleEdit(attendee.id);
                        openModal();
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      color="danger"
                      onClick={() => handleDelete(attendee.id)}
                    >
                      Delete
                    </Button>
                  </Attendee>
                </Row>
              </Container>
            );
          })}
        </AttendeeList>
      ) : (
        <NoAttendees />
      )}
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customModalStyling}
        contentLabel="Example Modal"
      >
        <Button style={{ float: "right" }} onClick={closeModal}>
          X
        </Button>
        <EditModal attendee={attendee} setAttendee={setAttendee}>
          <Button onClick={handleOnEditSubmit}>Submit</Button>
        </EditModal>
      </Modal>
    </>
  );
}
