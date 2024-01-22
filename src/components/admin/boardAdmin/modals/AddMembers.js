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
import {
  addDoc,
  collection,
  getDoc,
  arrayUnion,
  doc,
  updateDoc,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db } from "../../../professional-events/firebaseConfig";
import ListPhotos from "./ListPhotos";

const AddMembers = (props) => {
  const [selectedGroup, setGroup] = useState("Select role group");
  const [imageList, setListModal] = useState(false);

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
    let newLeader;
    try {
      const docRef = doc(db, "acm_board", props.data.id);
      let downloadURL = "";
      //store image in firebase storage first
      if (typeof img === "object") {
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
        downloadURL = await getDownloadURL(storageRef);

        console.log("Image uploaded successfully:", downloadURL);
      }
      else{
        downloadURL = img;
      }
      newLeader = {
        first: firstN,
        last: lastN,
        position: pos,
        img: downloadURL ? downloadURL : "",
      };
      const leaders = "leaders";
      let updateObj = {};
      if (props.section == "committee") {
        const committee = "committee";
        updateObj = {
          [`${leaders}.${committee}.${selectedGroup}`]: arrayUnion(newLeader),
        };
      } else if (props.section == "officers") {
        const officers = "officers";
        updateObj = {
          [`${leaders}.${officers}.${selectedGroup}`]: arrayUnion(newLeader),
        };
      } else {
        const advisors = "advisors";
        updateObj = {
          [`${leaders}.${advisors}`]: arrayUnion(newLeader),
        };
      }
      await updateDoc(docRef, updateObj);
      console.log("New leader: ", newLeader);
    } catch (error) {
      console.error("Error adding event:", error.message);
    }
    props.onAdd(newLeader, props.section, selectedGroup);
    setImg("");
    props.onHide();
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
        <Form onSubmit={addHandler}>
          <Modal.Header closeButton>
            {props.section !== "advisors" &&
              Object.keys(props.data.leaders[props.section]).map((group) => (
                <Form.Check // prettier-ignore
                  inline
                  type={"radio"}
                  id={`default-radio`}
                  label={group}
                  name="radioGroup"
                  onClick={() => setGroup(group)}
                  required
                />
              ))}
          </Modal.Header>
          <Modal.Body>
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
              <br />
              <Button onClick={()=>setListModal(true)}>
                Select existing photo
              </Button>{" "}
              OR
              <br />
              <br />
              <Form.Label>Upload new photo</Form.Label>
              <Form.Control type="file" onChange={handleImg} />
            </Form.Group>
            <Modal.Footer>
              <Button variant="success" className="mb-2" type="submit">
                Confirm
              </Button>
              <Button
                variant="warning"
                onClick={() => {
                  setGroup("Select role group");
                  props.onHide();
                }}
                className="mb-2"
              >
                Cancel
              </Button>
            </Modal.Footer>
          </Modal.Body>
        </Form>
        <ListPhotos imgs={props.imgs} onSetImage={setExistingImage} onHide={() => setListModal(false)} show={imageList} />
      </Modal>
    </>
  );
};

export default AddMembers;
