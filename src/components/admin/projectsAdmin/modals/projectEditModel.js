import React, { useEffect, useRef, useState } from "react";
import { Button, Col, Form, Image, Modal, Row } from "react-bootstrap";
import { db } from "../../../professional-events/firebaseConfig";
import {
  collection,
  doc,
  getDocs,
  documentId,
  getCountFromServer,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  deleteObject,
} from "firebase/storage";
import Multiselect from "multiselect-react-dropdown";
const ProjectEditModal = (props) => {
  const [title, setTitle] = useState("");
  const [leaders, setLeaders] = useState([]);
  const [curLeaders, setCurLeaders] = useState([]);
  const [uploadImg, setUploadImg] = useState(null);
  const [skills, setSkills] = useState("");
  const [imgName, setImageName] = useState("");
  const [selectedLeaders, setSelectedLeaders] = useState([]);
  const [hideModel, setHideModel] = useState(false)

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      if (props.data.level === "advanced") {
        const leaderArr = [];
        for (const leader of props.data.leaders) {
          leaderArr.push(leader.name);
        }
        setCurLeaders(leaderArr);
      }
      if (props.data.level === "beginners") {
        const leaderArr = [];
        for (const leader of props.data.leaders) {
          leaderArr.push(leader.name);
        }
        setCurLeaders(leaderArr);
      }

      const fetchData = async () => {
        try {
          const boardRef = collection(db, "acm_board");
          const countBoardDocs = await getCountFromServer(boardRef);
          let latestBoard = countBoardDocs.data().count;
          if (latestBoard < 10) {
            latestBoard = "0" + latestBoard.toString();
          }
          // console.log(latestBoard);
          const curBoard = query(
            boardRef,
            where(documentId(), "==", latestBoard)
          );
          const boardSnap = await getDocs(curBoard);

          boardSnap.forEach((doc) => {
            //only fetches officers and committee
            let leaderArr = [];
            let officerArr = doc.data().leaders.officers.Project;
            let committeeArr = doc.data().leaders.committee.Projects;

            for (const element of officerArr) {
              const name = element.first + " " + element.last;
              leaderArr.push(name);
            }

            for (const element of committeeArr) {
              const name = element.first + " " + element.last;
              leaderArr.push(name);
            }
            setLeaders(leaderArr);
          });
        } catch (err) {
          console.log(err);
        }
      };
      fetchData();
    }
  }, [props.data.leaders, props.data.level]);

  const editHandler = () => {
    const editProject = async () => {
      try {
        const projectRef = doc(db, "project_workshop", props.data.id);

        //handles title change
        if (title !== "") {
          const nestedPath = "level." + props.data.level + ".title";
          await updateDoc(projectRef, { [nestedPath]: title });
          console.log("Successfully edited: ", title);
          // props.editProject(props.data.id, title);
        }
        //handles image uploded and flyer change
        if (uploadImg) {
          const storage = getStorage();
          const storageRef = ref(storage, `${"Spring 2024/" + imgName}`);
          const semesterRef = ref(storage, "Spring 2024/");
          listAll(semesterRef)
            .then((res) => {
              res.items.forEach(async (itemRef) => {
                // console.log(itemRef.fullPath);
                const fileRef = ref(
                  storage,
                  `${"gs://acm-calstatela.appspot.com/" + itemRef.fullPath}`
                );
                // console.log(itemRef.fullPath);
                const flyerLink = await getDownloadURL(fileRef);
                if (flyerLink === props.data.imgUrl) {
                  deleteObject(fileRef)
                    .then(() => {
                      console.log(itemRef.name + " deleted Successfully");
                    })
                    .catch((err) => {
                      console.log("Failed to Delete: " + err);
                    });
                }
              });
            })
            .catch((err) => {
              console.log("Error fetching list from storage: " + err);
            });

          await uploadBytes(storageRef, uploadImg)
            .then()
            .catch((err) => {
              console.log("Error uploading: " + err);
            });

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

        //handles skills
        if (skills !== "") {
          const nestedPath = "level." + props.data.level + ".skills";
          let skillsArr = skills.split(", ");
          // console.log(skillsArr);

          await updateDoc(projectRef, { [nestedPath]: skillsArr });
        }
        //handles leaders
        if (selectedLeaders.length !== 0) {
          // console.log("Made it!");

          const nestedPath = "level." + props.data.level + ".leaders";
          const newLeaderArr = [];
          let officerRef = {};
          let committeeRef = {};

          const boardRef = collection(db, "acm_board");
          const countBoardDocs = await getCountFromServer(boardRef);
          let latestBoard = countBoardDocs.data().count;
          if (latestBoard < 10) {
            latestBoard = "0" + latestBoard.toString();
          }
          // console.log(latestBoard);
          const curBoard = query(
            boardRef,
            where(documentId(), "==", latestBoard)
          );
          const boardSnap = await getDocs(curBoard);

          boardSnap.forEach((doc) => {
            officerRef = doc.data().leaders.officers.Project;
            committeeRef = doc.data().leaders.committee.Projects;
          });

          for (const entry of selectedLeaders) {
            let splitName = entry.split(" ");
            //deals with multiple last names
            if (splitName.length > 3) {
              let tempArr = splitName.shift();
              let lastName = tempArr.join(" ");
              splitName[1] = lastName;
              splitName.splice(2, splitName.length - 2);
            }
            for (const leader of officerRef) {
              if (
                splitName[0] === leader.first &&
                splitName[1] === leader.last
              ) {
                const newLeader = {};
                newLeader["img"] = leader.img;
                newLeader["name"] = entry;
                newLeaderArr.push(newLeader);
              }
            }
            for (const leader of committeeRef) {
              if (
                splitName[0] === leader.first &&
                splitName[1] === leader.last
              ) {
                const newLeader = {};
                newLeader["img"] = leader.img;
                newLeader["name"] = entry;
                newLeaderArr.push(newLeader);
              }
            }
          }

          await updateDoc(projectRef, { [nestedPath]: newLeaderArr });
          // console.log(selectedLeaders)
          // console.log(newLeaderArr)

          // await updateDoc(projectRef, {[nestedPath]: arrayRemove(selectedLeaders)})
        }
      } catch (error) {
        console.error("Error editing project:", error.message);
      }
    };
    editProject();
    console.log("Works!");
    setHideModel(true);
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
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit "{props.data.title}"
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{}}>
          <Form
            style={
              {
                // marginLeft: "20px",
              }
            }
          >
            {/* <Row
              md={2}
              style={{
                gap: "100px",
                overflow: "auto",
                display: "inline",
              }}
            > */}

            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                gap: "150px",
              }}
            >
              <Form.Group
                controlId="title"
                style={{ marginTop: "25px", width: "500px" }}
              >
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
                <Multiselect
                  isObject={false}
                  options={leaders}
                  // selectedValues={curLeaders}
                  placeholder="Select Leaders"
                  onSelect={(e) => {
                    setSelectedLeaders(e);
                  }}
                  style={{
                    searchBox: {
                      backgroundColor: "white",
                    },
                    multiselectContainer: {
                      backgroundColor: "black",
                      color: "black",
                      boarderRadius: "20px",
                    },
                  }}
                />
              </Form.Group>

              <Form.Group style={{}} controlId="changeImg">
                <Image width="300px" height="350px" src={props.imgUrl} />
                <Form.Control type="file" size="lg" onChange={handleImg} />
              </Form.Group>
            </div>

            {/* </Row> */}
            <Button
              variant="success"
              style={{ float: "right" }}
              onClick={(e) => {
                editHandler(e)
                props.onHide?.(e)
              }}
              
            >
              Confirm
            </Button>
            <Button
              onClick={props.onHide}
              style={{ float: "right", marginRight: "20px" }}
            >
              Close
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProjectEditModal;
