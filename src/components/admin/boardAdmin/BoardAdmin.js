import React, { useState } from "react";
import { useEffect } from "react";
import "./boardadmin.css";
import EventSubTab from "../eventsAdmin/event-subtab";
import AddModal from "../eventsAdmin/modals/addModal";
import { Tabs, Tab, Button } from "react-bootstrap";
import {
  collectionGroup,
  getDocs,
  query,
  orderBy,
  collection,
  updateDoc,
  doc,
  getDoc,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db } from "../../professional-events/firebaseConfig";
import CurrentTab from "./CurrentTab";
import ArchiveTab from "./ArchiveTab";
const BoardAdmin = () => {
  const [currentBoard, setCurrent] = useState(null);
  const lodash = require("lodash");

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const board = query(
          collectionGroup(db, "acm_board"),
          orderBy("year", "asc")
        );
        const boardSnapshot = await getDocs(board);

        if (isMounted) {
          const boardList = [];
          boardSnapshot.forEach((doc) => {
            const boardItem = { id: doc.id, ...doc.data() };
            boardList.push(boardItem);
          });
          setCurrent(boardList.at(boardList.length - 1));
        }
      } catch (err) {
        console.log("Error occured when fetching board", err);
      }
    };
    fetchData();

    return () => {
      // Cleanup function to set isMounted to false when the component is unmounted
      isMounted = false;
    };
  }, []);
  console.log("Current Leaders State: ",currentBoard);

  const updateLeaderHandler = (newData) => {
    if (newData.section == "board") {
      if (newData.oldLeader.position == "President") {
        setCurrent((prevLeaders) => {
          const newLeaders = { ...prevLeaders };
          let selectedLeader = newLeaders.leaders.board.president;
          selectedLeader.first = newData.leader.first;
          selectedLeader.last = newData.leader.last;
          selectedLeader.position = newData.leader.position;
          return newLeaders;
        });
        updateBoardFirebase(newData,"leaders.board.president");
      } else if (newData.oldLeader.position == "Vice President") {
        setCurrent((prevLeaders) => {
          const newLeaders = { ...prevLeaders };
          let selectedLeader = newLeaders.leaders.board.vicepresident;
          selectedLeader.first = newData.leader.first;
          selectedLeader.last = newData.leader.last;
          selectedLeader.position = newData.leader.position;
          return newLeaders;
        });
        updateBoardFirebase(newData,"leaders.board.vicepresident");
      } else if (newData.oldLeader.position == "Secretary") {
        setCurrent((prevLeaders) => {
          const newLeaders = { ...prevLeaders };
          let selectedLeader = newLeaders.leaders.board.secretary;
          selectedLeader.first = newData.leader.first;
          selectedLeader.last = newData.leader.last;
          selectedLeader.position = newData.leader.position;
          return newLeaders;
        });
        updateBoardFirebase(newData,"leaders.board.secretary");
      } else if (newData.oldLeader.position == "Treasurer") {
        setCurrent((prevLeaders) => {
          const newLeaders = { ...prevLeaders };
          let selectedLeader = newLeaders.leaders.board.treasurer;
          selectedLeader.first = newData.leader.first;
          selectedLeader.last = newData.leader.last;
          selectedLeader.position = newData.leader.position;
          return newLeaders;
        });
        updateBoardFirebase(newData,"leaders.board.treasurer");
      } else if (newData.oldLeader.position == "VP of Internal Affairs") {
        setCurrent((prevLeaders) => {
          const newLeaders = { ...prevLeaders };
          let selectedLeader = newLeaders.leaders.board.vp_affairs1;
          selectedLeader.first = newData.leader.first;
          selectedLeader.last = newData.leader.last;
          selectedLeader.position = newData.leader.position;
          return newLeaders;
        });
        updateBoardFirebase(newData,"leaders.board.vp_affairs1");
      } else if (newData.oldLeader.position == "VP of External Affairs") {
        setCurrent((prevLeaders) => {
          const newLeaders = { ...prevLeaders };
          let selectedLeader = newLeaders.leaders.board.vp_affairs2;
          selectedLeader.first = newData.leader.first;
          selectedLeader.last = newData.leader.last;
          selectedLeader.position = newData.leader.position;
          return newLeaders;
        });
        updateBoardFirebase(newData,"leaders.board.vp_affairs2");
      } else if (newData.oldLeader.position == "Web Master") {
        setCurrent((prevLeaders) => {
          const newLeaders = { ...prevLeaders };
          let selectedLeader = newLeaders.leaders.board.webmaster;
          selectedLeader.first = newData.leader.first;
          selectedLeader.last = newData.leader.last;
          selectedLeader.position = newData.leader.position;
          return newLeaders;
        });
        updateBoardFirebase(newData,"leaders.board.webmaster");
      } else if (newData.oldLeader.position == "Project Manager") {
        setCurrent((prevLeaders) => {
          const newLeaders = { ...prevLeaders };
          let selectedLeader = newLeaders.leaders.board.proj_manager1;
          selectedLeader.first = newData.leader.first;
          selectedLeader.last = newData.leader.last;
          selectedLeader.position = newData.leader.position;
          return newLeaders;
        });
        updateBoardFirebase(newData,"leaders.board.proj_manager1");
      }
    } else if (newData.section === "officers") {
      updateOfficersOrCommittee(
        newData,
        currentBoard.leaders.officers,
        "officers"
      );
    } else if (newData.section === "committee") {
      updateOfficersOrCommittee(
        newData,
        currentBoard.leaders.committee,
        "committee"
      );
    } else {
      console.log(currentBoard.leaders.advisors);
      currentBoard.leaders.advisors.forEach((element) => {
        if (lodash.isEqual(element, newData.oldLeader)) {
          console.log(element);
        }
      });
    }
  };

  const updateOfficersOrCommittee = (newData, section, sectionName) => {
    const groupIndex = section.findIndex(
      (g) => g.role_group === newData.role_group
    );
    const memberIndex = section[groupIndex].members.findIndex((member) =>
      lodash.isEqual(member, newData.oldLeader)
    );
    setCurrent((prevLeaders) => {
      // Create a shallow copy of the leaders object
      const newLeaders = { ...prevLeaders };

      // Navigate to the deep nested structure
      let selectedLeader;
      if (sectionName == "committee") {
        selectedLeader =
          newLeaders.leaders.committee[groupIndex].members[memberIndex];
      } else {
        selectedLeader =
          newLeaders.leaders.officers[groupIndex].members[memberIndex];
      }

      // Update the desired property
      selectedLeader.first = newData.leader.first;
      selectedLeader.last = newData.leader.last;
      selectedLeader.position = newData.leader.position;

      // Return the updated state
      return newLeaders;
    });
  };

  const updateBoardFirebase = async (newInfo, boardPath) => {
    const storage = getStorage();
    try {
      const docRef = doc(db, "acm_board", currentBoard.id);
      const docSnapshot = await getDoc(docRef);
      let leader = newInfo.leader;
      if (typeof newInfo.leader.img === "object") {
        // Create a storage reference with the folderName as the path
        const storageRef = ref(
          storage,
          `${"gs://acm-calstatela.appspot.com/Leaders" + " " + currentBoard.schoolyear}/${newInfo.leader.img.name}`
        );

        // Upload the file to the specified folder
        await uploadBytes(storageRef, newInfo.leader.img);

        // Get the download URL of the uploaded file
        const downloadURL = await getDownloadURL(storageRef);

        console.log("Image uploaded successfully:", downloadURL);

        leader.img = downloadURL;
        console.log(leader);

        if (docSnapshot.exists()) {
          // Document exists, proceed with the update
          await updateDoc(docRef, { [boardPath]: leader });
          console.log("Board leader successfully updated!");
        } else {
          console.error("Document does not exist!");
        }
      }
    } catch (error) {
      console.error("Error updating President subobject: ", error);
    }
  };
  return (
    <div class="container main-boardadmin">
      {currentBoard && (
        <>
          <h1 align="center">Board page</h1>

          <Button className="mr-3 mb-3">Add new empty board</Button>
          <Tabs id="sub-tabs" className="mb-3 event-tabs">
            <Tab eventKey="current" title="Current">
              <CurrentTab data={currentBoard} onUpdate={updateLeaderHandler} />
            </Tab>
            <Tab eventKey="archive" title="Archive">
              <ArchiveTab />
            </Tab>
          </Tabs>
        </>
      )}
    </div>
  );
};

export default BoardAdmin;
