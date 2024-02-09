import React from "react";
import { useState, useRef } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { db } from "../../../professional-events/firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const AddModal = (props) => {
  //refers to field values from form inputs
  const titleRef = useRef(null);
  const yearRef = useRef(null);
  const fallRef = useRef(null);
  const springRef = useRef(null);
  const [image, setImage] = useState(null);

  //uploading image
  const handleImg = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };


  //uploads new event to database
  const addHandler = async (e) => {
    e.preventDefault();

    //get input values
    const title = titleRef.current.value;
    const semester = fallRef.current.checked ? "Fall" : "Spring";
    const year = yearRef.current.value;

    const storage = getStorage();
    
    try {
      //store image in firebase storage first
      if (image) {
        // Create a storage reference with the folderName as the path
        const storageRef = ref(
          storage,
          `${"gs://acm-calstatela.appspot.com/" + semester + " " + year}/${image.name}`
        );

        // Upload the file to the specified folder
        await uploadBytes(storageRef, image);

        // Get the download URL of the uploaded file
        const downloadURL = await getDownloadURL(storageRef);

        console.log("Image uploaded successfully:", downloadURL);

        //add new firestore document into the collection based on selected "currentTab"
        const newEvent = await addDoc(collection(db, props.currentTab), {
          altText: title,
          imgUrl: downloadURL,
        });
  
        props.onAdd(newEvent.id, title, downloadURL);
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
                    ref={fallRef}
                  />
                  <Form.Check
                    inline
                    label="Spring"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                    ref={springRef}
                  />
                </div>
              ))}
            </Form.Group>
            <Form.Group controlId="title">
              <Form.Label>Year</Form.Label>
              <Form.Control
                type="text"
                placeholder="YYYY"
                ref={yearRef}
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
