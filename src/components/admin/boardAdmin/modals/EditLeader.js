import React, { useState } from "react";
import { useRef } from "react";
import { Modal, Form, Button, InputGroup } from "react-bootstrap";
import ListPhotos from "./ListPhotos";
const EditLeader = (props) => {
  const firstRef = useRef("");
  const lastRef = useRef("");
  const positionRef = useRef("");
  const [img, setImg] = useState(null);
  const [imageList, setListModal] = useState(false);

  const updateLeaderHandler = (e) => {
    e.preventDefault();
    const editedLeader = {
      leader: {
        first: firstRef.current.value
          ? firstRef.current.value
          : props.leader.first,
        last: lastRef.current.value ? lastRef.current.value : props.leader.last,
        position: positionRef.current.value
          ? positionRef.current.value
          : props.leader.position,
        img: img ? img : props.leader.img,
      },
    };
    props.onUpdate(editedLeader);
    props.onHide();
  };

  //uploading image
  const handleImg = (e) => {
    const file = e.target.files[0];
    setImg(file);
  };

  const setExistingImage = (selectedImage) =>{
    setImg(selectedImage.link);
  };
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <Form>
            <InputGroup className="mb-3">
              <InputGroup.Text>First name</InputGroup.Text>
              <Form.Control
                type="text"
                aria-label="First name"
                placeholder={props.leader.first}
                ref={firstRef}
              />
              <InputGroup.Text className="ml-3">Last name</InputGroup.Text>
              <Form.Control
                type="text"
                aria-label="Last name"
                placeholder={props.leader.last}
                ref={lastRef}
              />
            </InputGroup>
            <Form.Group controlId="title">
              <Form.Label>Position</Form.Label>
              <Form.Control
                type="text"
                placeholder={props.leader.position}
                ref={positionRef}
              />
            </Form.Group>
            <Form.Group controlId="image">
              <br />
              <Button onClick={() => setListModal(true)}>
                Select existing photo
              </Button>{" "}
              OR
              <br />
              <br />
              <Form.Label>Upload new photo</Form.Label>
              <Form.Control type="file" onChange={handleImg} />
            </Form.Group>
            <Modal.Footer>
              <Button
                variant="success"
                onClick={updateLeaderHandler}
                className="mb-2"
              >
                Confirm
              </Button>
              <Button variant="warning" onClick={props.onHide} className="mb-2">
                Cancel
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
        <ListPhotos
          imgs={props.imgs}
          onHide={() => setListModal(false)}
          onSetImage={setExistingImage}
          show={imageList}
        />
      </Modal>
    </>
  );
};

export default EditLeader;
