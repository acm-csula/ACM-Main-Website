import React, { useRef, useState } from "react";
import { Button, Form, Image, Modal, Row } from "react-bootstrap";
import { db } from "../../../professional-events/firebaseConfig";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
const ProjectEditModal = (props) => {
  const [title, setTitle] = useState("");
  const [leaders, setLeaders] = useState([]);
  const [uploadImg, setUploadImg] = useState(null);
  const [leaderImgs, setLeaderImgs] = useState([]);
  const [skills, setSkills] = useState("");

  const [imgName, setImageName] = useState("");

  const editHandler = () => {
    const editProject = async () => {
      try {
        const projectRef = doc(db, "project_workshop", props.data.id);

        //handles title change
        if (title !== "") {
          const nestedPath = "level." + props.data.level + ".title";
          await updateDoc(projectRef, { [nestedPath]: title });
          console.log("Successfully edited: ", title);
          props.editProject(props.data.id, title);
        }
        //handles image uploded and flyer change
        else if (uploadImg) {
          const storage = getStorage();
          const storageRef = ref(
            storage,
            `${"gs://acm-calstatela.appspot.com/Spring 2024/" + imgName}`
          );
          await uploadBytes(storageRef, uploadImg);

          const downloadLink = await getDownloadURL(
            ref(
              storage,
              `${"gs://acm-calstatela.appspot.com/Spring 2024/" + imgName}`
            )
          );

          console.log("Image uploaded successfuly", downloadLink);

          const nestedPath = "level." + props.data.level + ".flyer";
          await updateDoc(projectRef, { [nestedPath]: downloadLink });
        } else if (skills !== "") {
          const nestedPath = "level." + props.data.level + ".skills";
          let skillsArr = skills.split(", ");
          const fireLength = props.data.level.skills.length;
          const fireSkillsArr = props.data.level.skills;

          for (const element of fireSkillsArr) {
            await updateDoc(projectRef, { [nestedPath]: arrayRemove(element) });
          }
          for (const element of skillsArr) {
            await updateDoc(projectRef, { [nestedPath]: arrayUnion(element) });
          }
        }
      } catch (error) {
        console.error("Error editing project:", error.message);
      }
    };
    editProject();
  };

  const handleImg = (e) => {
    const file = e.target.files[0];
    const fileName = e.target.files[0].name;
    setUploadImg(file);
    setImageName(fileName);
  };

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit "{props.data.title}"
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="mb-5">
            <Row md={5} style={{ gap: "40px" }}>
              <Form.Group controlId="title" style={{ gap: "40px" }}>
                <Form.Label>Change Title</Form.Label>
                <Form.Control
                  type="text"
                  style={{ marginBottom: "40px" }}
                  placeholder={props.data.title}
                  onChange={(e) => setTitle(e.target.value)}
                />

                <Form.Label>Change Skills</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder={props.data.skills}
                  style={{ marginBottom: "40px", paddingBottom: "20px" }}
                />

                <Form.Label>Change Leaders</Form.Label>
                <Form.Control
                  as="textarea"
                  onChange={(e) => setSkills(e.target.value)}
                  style={{ paddingBottom: "20px" }}
                />
              </Form.Group>

              <Form.Group style={{}} controlId="changeImg">
                <Image width="300px" height="350px" src={props.imgUrl} />
                <Form.Control type="file" size="lg" onChange={handleImg} />
              </Form.Group>
            </Row>
            <Button
              variant="success"
              style={{ float: "right" }}
              onClick={editHandler}>
              Confirm
            </Button>
            <Button
              onClick={props.onHide}
              style={{ float: "right", marginRight: "20px" }}>
              Close
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProjectEditModal;
