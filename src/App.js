import { React, useState } from "react";
import { Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { CreateAttendee } from "./Components/CreateAttendee";
import { AttendeeList } from "./Components/AttendeeList";
import { NoAttendees } from "./Components/NoAttendees";
import { EditModal } from "./Components/EditModal";
import Modal from "react-modal";
import {
  MainTitle,
  ButtonSubmit,
  ButtonEdit,
  ButtonDelete,
  Attendee,
  AttendeeName,
  AttendeeInfo,
  MinutesAgoStyled,
} from "./StyledComponents/MyStyledComponents";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";

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

  const [selectedAttendee, setSelectedAttendee] = useState("");

  const [addAttendeeInfo, setAddAttendeeInfo] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      attendee.firstName === "" ||
      attendee.lastName === "" ||
      attendee.age === "" ||
      attendee.email === ""
    ) {
      alert("Please fill in required form");
    } else {
      setAddAttendeeInfo(addAttendeeInfo.concat(attendee));
      setAttendee({
        id: "",
        firstName: "",
        lastName: "",
        age: null,
        email: "",
      });
      document.querySelector("form").reset();
    }
  };

  const handleDelete = (id) => {
    const newAttendeesList = addAttendeeInfo.filter(
      (attend) => attend.id !== id
    );
    setAddAttendeeInfo(newAttendeesList);
  };

  let editableAttendee = undefined;

  const handleEdit = (id) => {
    editableAttendee = addAttendeeInfo.findIndex((att) => att.id === id);
    setSelectedAttendee({
      id: uuidv4(),
      firstName: "",
      lastName: "",
      age: null,
      email: "",
    });
  };

  const handleOnEditSubmit = (id) => {
    editableAttendee = addAttendeeInfo.findIndex((att) => att.id === id);
    addAttendeeInfo.splice(editableAttendee, 1, selectedAttendee);
  };

  const dateTimeAgo = moment(new Date()).fromNow();

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
        <ButtonSubmit className="btn" onClick={handleSubmit}>
          Submit
        </ButtonSubmit>
      </CreateAttendee>
      {addAttendeeInfo.length ? (
        <AttendeeList>
          {addAttendeeInfo.map((attendee) => {
            return (
              <Attendee key={uuidv4()}>
                <Row>
                  <AttendeeName>
                    <h3>{attendee.firstName}</h3>
                    <h3>{attendee.lastName}</h3>
                  </AttendeeName>
                  <MinutesAgoStyled>{dateTimeAgo}</MinutesAgoStyled>
                </Row>
                <Col className="d-flex border-bottom align-items-baseline">
                  <AttendeeInfo>
                    <p>Age: {attendee.age}</p>
                    <p>Email: {attendee.email}</p>
                  </AttendeeInfo>
                  <Col className="d-flex flex-row">
                    <ButtonEdit
                      className="btn"
                      onClick={() => {
                        handleEdit(attendee.id);
                        openModal();
                      }}
                    >
                      <FontAwesomeIcon icon={faPenToSquare} />
                    </ButtonEdit>
                    <ButtonDelete
                      className="btn"
                      onClick={() => handleDelete(attendee.id)}
                    >
                      <FontAwesomeIcon icon={faTrashCan} />
                    </ButtonDelete>
                  </Col>
                </Col>
              </Attendee>
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
        <EditModal
          selectedAttendee={selectedAttendee}
          setSelectedAttendee={setSelectedAttendee}
        >
          <ButtonSubmit
            className="btn"
            type="button"
            onClick={() => {
              handleOnEditSubmit();
              closeModal();
            }}
          >
            Submit
          </ButtonSubmit>
        </EditModal>
      </Modal>
    </>
  );
}
