import React from "react";
import { useState, useRef } from "react";
import { Button, Modal, Form } from "react-bootstrap";

const AddModal = (props) => {
  const titleRef = useRef(null);
  const [image, setImage] = useState(null);

  const handleImg = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const addHandler = (e) => {
    e.preventDefault();
    //store image in firebase storage first
    //create image url
    //create event object and store 'title' and 'imgUrl'
    //add event object to firestore with corresponding section (upcoming, semester, or past)
    props.onHide();
  };
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add new "{props.currentTab}" event
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={addHandler}>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                ref={titleRef}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Semester</Form.Label>
              {["radio"].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    inline
                    label="Fall"
                    name="group1"
                    type={type}
                    id={`inline-${type}-1`}
                  />
                  <Form.Check
                    inline
                    label="Spring"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                  />
                </div>
              ))}
            </Form.Group>
            <Form.Group controlId="title">
              <Form.Label>Year</Form.Label>
              <Form.Control
                type="text"
                placeholder="YYYY"
                required
              />
            </Form.Group>
            <Form.Group controlId="image">
              <Form.Label>Flyer Image</Form.Label>
              <Form.Control type="file" required onChange={handleImg} />
            </Form.Group>
            <Modal.Footer>
              <Button variant="success" type="submit">
                Confirm
              </Button>
              <Button variant="warning" onClick={props.onHide}>
                Cancel
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddModal;
