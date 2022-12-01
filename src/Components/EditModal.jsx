import Modal from "react-modal";
import { useState } from 'react'
import { Form, Row, Col, FormGroup, Input } from "reactstrap";

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

export function EditModal() {
  Modal.setAppElement("#root");

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    console.log("Editing...")
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <Form>
        <Row>
          <Col md={2}>
            <FormGroup>
              <Input
                name="firstName"
                placeholder="First Name"
                type="text"
                required
              />
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Input
                name="lastName"
                placeholder="Last Name"
                type="text"
                required
              />
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Input
                name="age"
                type="number"
                placeholder="Age"
                min="1"
                required
              />
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Input name="email" placeholder="Email" type="email" required />
            </FormGroup>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
}
