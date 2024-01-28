import React, { useEffect, useRef, useState } from "react";
import { Button, Form, Image, Modal, Row } from "react-bootstrap";
import { db } from "../../../professional-events/firebaseConfig";
import { arrayRemove, arrayUnion, collection, doc,getDocs, documentId, getCountFromServer, query, updateDoc, where } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
const ProjectEditModal = (props) => {
  const [title, setTitle] = useState("");
  const [leaders, setLeaders] = useState([]);
  const [uploadImg, setUploadImg] = useState(null);
  
  const [skills, setSkills] = useState("");

  const [imgName, setImageName] = useState("");


    const fetchData = async () => {
      try{
        const boardRef = collection(db, "acm_board");
        const countBoardDocs = await getCountFromServer(boardRef)
        const latestBoard = countBoardDocs.data().count
        const curBoard = query(boardRef, where(documentId(), "==", latestBoard.toString()))
        const boardSnap = await getDocs(curBoard)
        
        boardSnap.forEach((doc) => {
          console.log(doc.data())
        })

      }
      catch(err){
        console.log(err)

      }
    }
    fetchData();


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
        } 
        else if (skills !== "") {
          const nestedPath = "level." + props.data.level + ".skills";
          let skillsArr = skills.split(", ");
          const fireSkillsArr = props.data.skills.split(', ');
          
          console.log(fireSkillsArr)
          console.log(skillsArr)
          

          for (const element of fireSkillsArr) {
            
            await updateDoc(projectRef, { [nestedPath]:  arrayRemove(element) });
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
                  style={{ marginBottom: "20px" }}
                  placeholder={props.data.title}
                  onChange={(e) => setTitle(e.target.value)}
                />

                <Form.Label>Change Skills</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder={props.data.skills}
                  onChange={(e) => setSkills(e.target.value)}
                  style={{ marginBottom: "20px", paddingBottom: "20px" }}
                />

                <Form.Label>Change Leaders</Form.Label>
                <select multiple={true}>

                </select>
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
