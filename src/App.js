import "./app.css";
import { React, useEffect, useState } from "react";
import { Row, Col, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { CreateAttendee } from "./Components/CreateAttendee";
import { AttendeeList } from "./Components/AttendeeList";
import { NoAttendees } from "./Components/NoAttendees";
import { customModalStyling, EditModal } from "./Components/EditModal";
import Modal from "react-modal";
import {
  MainTitle,
  AttendeeName,
  AttendeeInfo,
  MinutesAgoStyled,
} from "./StyledComponents/MyStyledComponents";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import useTheme from "./Hooks/ThemeContext";
import ReactSwitch from "react-switch";

export default function App() {
  const [selectedAttendee, setSelectedAttendee] = useState("");
  const [addAttendeeInfo, setAddAttendeeInfo] = useState();
  const [modalIsOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [editingUser, setEditingUser] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/attendees")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setAddAttendeeInfo(data);
      });
  }, []);

  Modal.setAppElement("#root");
  const [attendee, setAttendee] = useState({
    id: "",
    firstName: "",
    lastName: "",
    age: null,
    email: "",
  });

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
      console.log(addAttendeeInfo);
      setAttendee({
        id: "",
        firstName: "",
        lastName: "",
        age: null,
        email: "",
      });
      document.querySelector("form").reset();
    }

    fetch("http://localhost:8000/attendees", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(attendee),
    }).then(() => {
      console.log("Added", attendee.id);
    });
  };

  const handleDelete = (id) => {
    const newAttendeesList = addAttendeeInfo.filter(
      (attend) => attend.id !== id,
      fetch(`http://localhost:8000/attendees/${id}`, {
        method: "DELETE",
      }).then(() => {
        console.log("deleted", id);
      })
    );
    setAddAttendeeInfo(newAttendeesList);
  };

  const handleEdit = (data) => {
    console.log(data.id);
    console.log(data);
    setEditingUser(data.id);
    setIsOpen(true);
  };

  const handleOnEditSubmit = (e) => {
    console.log(editingUser);
    fetch(`http://localhost:8000/attendees/${editingUser}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(selectedAttendee),
    }).then(() => {
      console.log("Edited", attendee.id);
    });
    window.location.reload(false);
    setIsOpen(false);
  };

  let dateTimeAgo = null;
  let date = new Date();

  const displayTimeAgo = () => {
    let todaysDayConvert = `${date.getHours()}:${
      (date.getMinutes() < 10 ? "0" : "") + date.getMinutes()
    }`;
    dateTimeAgo = `Modified ${todaysDayConvert}`;
  };

  displayTimeAgo();
  setInterval(function () {
    displayTimeAgo();
  }, 10000);

  return (
    <div className="main-body" id={theme}>
      <div className="theme-switch">
        <ReactSwitch
          onChange={toggleTheme}
          checked={theme === "dark"}
          onColor="#172432"
          onHandleColor="#27ebad"
          uncheckedIcon={false}
          checkedIcon={false}
        />
      </div>
      <MainTitle className="main-title">Management Dashboard</MainTitle>
      <CreateAttendee id={theme} attendee={attendee} setAttendee={setAttendee}>
        <Button className="button-submit" onClick={handleSubmit}>
          Submit
        </Button>
      </CreateAttendee>
      {addAttendeeInfo && addAttendeeInfo.length ? (
        <AttendeeList id={theme}>
          {addAttendeeInfo.map((attendee) => {
            return (
              <div
                className="attendee d-flex align-items-baseline flex-column justify-content-center"
                id={theme}
                key={uuidv4()}
              >
                <Row>
                  <AttendeeName className="attendee-text">
                    <h3>{attendee.firstName}</h3>
                    <h3>{attendee.lastName}</h3>
                  </AttendeeName>
                  <MinutesAgoStyled className="minutes-ago">
                    {dateTimeAgo}
                  </MinutesAgoStyled>
                </Row>
                <Col className="attendee-info d-flex border-bottom align-items-baseline">
                  <AttendeeInfo className="attendee-text">
                    <p>Age: {attendee.age}</p>
                    <p>Email: {attendee.email}</p>
                  </AttendeeInfo>
                  <Col className="d-flex flex-row">
                    <Button
                      id={attendee.id}
                      className="button-edit"
                      onClick={() => {
                        handleEdit(attendee);
                      }}
                    >
                      <FontAwesomeIcon icon={faPenToSquare} />
                    </Button>
                    <Button
                      className="button-delete"
                      onClick={() => handleDelete(attendee.id)}
                    >
                      <FontAwesomeIcon icon={faTrashCan} />
                    </Button>
                  </Col>
                </Col>
              </div>
            );
          })}
        </AttendeeList>
      ) : (
        <NoAttendees />
      )}
      <Modal
        isOpen={modalIsOpen}
        style={customModalStyling}
        contentLabel="Example Modal"
        id={theme}
      >
        <EditModal
          selectedAttendee={selectedAttendee}
          setSelectedAttendee={setSelectedAttendee}
          id={theme}
        >
          <Button className="button-submit" onClick={handleOnEditSubmit}>
            Submit
          </Button>
        </EditModal>
      </Modal>
    </div>
  );
}
