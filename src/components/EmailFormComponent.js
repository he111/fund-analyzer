import React, {useState } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

function EmailFormComponent(props) {
    const [receipt, setReceipt] = useState('');
    const [sender , setSender ] = useState('')

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Please enter valid email address(es) and click "Send".
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formToEmail">
              <Form.Label>To: *</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter emails"
                value={receipt}
                onChange={(e) => setReceipt(e.target.value)}
              />
              <Form.Text className="text-muted">
                (Enter up to 20 email addresses separated by commas)
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formFromEmail">
              <Form.Label>From: *</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={sender}
                onChange={(e) => setSender(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Send me a copy" />
            </Form.Group>
            <Form.Group controlId="formEmailSubject">
              <Form.Label>Subject</Form.Label>
              <Form.Control type="text" placeholder="<insert text>" />
            </Form.Group>
            <Form.Group controlId="formEmailMsg">
              <Form.Label>Message</Form.Label>
              <Form.Control type="text" placeholder="<insert text>" />
            </Form.Group>
          </Form>
          <Alert variant="warning">
            <FontAwesomeIcon
              className="fa-exclamation-triangle"
              icon={faExclamationTriangle}
            />
            <span style={{ color: "red", fontWeight: "bold" }}>
              Industry Professionals
            </span>
            : Your firm's policies for review and retention of correspondence
            may prohibit your use of this functionality or the Fund Analyzer.
            Please contact your compliance office for guidance.
          </Alert>
        </Modal.Body>
        <Modal.Footer>
          <Button disabled={!receipt && !sender}  onClick={props.onHide}>
            Send
          </Button>
          <Button variant="danger" onClick={props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
}

export default EmailFormComponent
