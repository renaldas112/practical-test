import Modal from "react-modal";
import { Col, FormGroup, Input } from "reactstrap";
import { FormTitle } from "../StyledComponents/MyStyledComponents";
import useTheme from "../Hooks/ThemeContext";


export const customModalStyling = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export function EditModal(props) {
  const {theme} = useTheme();
  
  const useHandleOnChange = (e) => {
    props.setSelectedAttendee({
      ...props.selectedAttendee,
      [e.target.name]: e.target.value,
    });
  };
  Modal.setAppElement("#root");

  return (
    <div className="edit-modal-content">
      <FormTitle>Edit Attendee</FormTitle>
      <Col md={12}>
        <FormGroup>
          <Input
            name="firstName"
            placeholder="First Name"
            type="text"
            onChange={useHandleOnChange}
          />
        </FormGroup>
      </Col>
      <Col md={12}>
        <FormGroup>
          <Input
            name="lastName"
            placeholder="Last Name"
            type="text"
            onChange={useHandleOnChange}
          />
        </FormGroup>
      </Col>
      <Col md={12}>
        <FormGroup>
          <Input
            name="age"
            type="number"
            placeholder="Age"
            min="1"
            onChange={useHandleOnChange}
          />
        </FormGroup>
      </Col>
      <Col md={12}>
        <FormGroup>
          <Input
            name="email"
            placeholder="email"
            type="email"
            onChange={useHandleOnChange}
          />
        </FormGroup>
      </Col>
      {props.children}
    </div>
  );
}
