import React, { useState } from "react";
import { useRef } from "react";
import {
  Modal,
  Form,
  Button,
  InputGroup,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import { addDoc, collection, getDoc, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db } from "../../../professional-events/firebaseConfig";

const AddCommittee = (props) => {
  const [selectedGroup, setGroup] = useState("Select role group");

  const firstRef = useRef("");
  const lastRef = useRef("");
  const positionRef = useRef("");
  const [img, setImg] = useState(null);

  //uploading image
  const handleImg = (e) => {
    const file = e.target.files[0];
    setImg(file);
  };

  //uploads new member to database
  const addHandler = async (e) => {
    e.preventDefault();

    //get input values
    const firstN = firstRef.current.value;
    const lastN = lastRef.current.value;
    const pos = positionRef.current.value;

    const storage = getStorage();

    try {
      const docRef = doc(db, "acm_board", props.data.id);
      const docSnapshot = await getDoc(docRef);

      //store image in firebase storage first
      if (img) {
        // Create a storage reference with the folderName as the path
        const storageRef = ref(
          storage,
          `${
            "gs://acm-calstatela.appspot.com/Leaders" +
            " " +
            props.data.schoolyear
          }/${img.name}`
        );

        // Upload the file to the specified folder
        await uploadBytes(storageRef, img);

        // Get the download URL of the uploaded file
        const downloadURL = await getDownloadURL(storageRef);

        console.log("Image uploaded successfully:", downloadURL);

        if(props.section == "committee"){
            const newLeader = {
                first: firstN,
                last: lastN,
                position: pos,
                img: downloadURL,
            }
            const leaders = "leaders";
            const committee = "committee";
            const updateObj = { [`${leaders}.${committee}.${selectedGroup}`]: arrayUnion(newLeader) };
            await updateDoc(docRef, updateObj);
        }

      }
    } catch (error) {
      console.error("Error adding event:", error.message);
    }
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
          <DropdownButton id="dropdown-basic-button" title={selectedGroup}>
            {props.roleGroups.map((group) => (
              <Dropdown.Item onClick={() => setGroup(group)}>
                {group}
              </Dropdown.Item>
            ))}
          </DropdownButton>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={addHandler}>
            <InputGroup className="mb-3">
              <InputGroup.Text>First name</InputGroup.Text>
              <Form.Control
                type="text"
                aria-label="First name"
                ref={firstRef}
                required
              />
              <InputGroup.Text className="ml-3">Last name</InputGroup.Text>
              <Form.Control
                type="text"
                aria-label="Last name"
                ref={lastRef}
                required
              />
            </InputGroup>
            <Form.Group controlId="title">
              <Form.Label>Position</Form.Label>
              <Form.Control type="text" ref={positionRef} required />
            </Form.Group>
            <Form.Group controlId="image">
              <Form.Label>Update photo</Form.Label>
              <Form.Control type="file" onChange={handleImg} required />
            </Form.Group>
            <Modal.Footer>
              <Button variant="success" className="mb-2" type="submit">
                Confirm
              </Button>
              <Button variant="warning" onClick={props.onHide} className="mb-2">
                Cancel
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddCommittee;
