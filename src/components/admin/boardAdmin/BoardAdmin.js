import React, { useState } from "react";
import { useEffect } from "react";
import "./boardadmin.css";
import EventSubTab from "../eventsAdmin/event-subtab";
import AddModal from "../eventsAdmin/modals/addModal";
import { Tabs, Tab, Button } from "react-bootstrap";
import { collectionGroup, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../../professional-events/firebaseConfig";
import CurrentTab from "./CurrentTab";
import ArchiveTab from "./ArchiveTab";
const BoardAdmin = () => {
  const [currentBoard, setCurrent] = useState(null);

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
  console.log(currentBoard);


  const updateLeaderHandler = (newData)=>{
    if (newData.section == "board"){
      if (newData.oldLeader.position == "President"){
        console.log(currentBoard.leaders.board.president);
      }
      else if (newData.oldLeader.position == "Vice President"){
        console.log(currentBoard.leaders.board.vicepresident);
      }
      else if (newData.oldLeader.position == "Secretary"){
        console.log(currentBoard.leaders.board.secretary);
      }
      else if (newData.oldLeader.position == "Treasurer"){
        console.log(currentBoard.leaders.board.treasurer);
      }
      else if (newData.oldLeader.position == "VP of Internal Affairs"){
        console.log(currentBoard.leaders.board.vp_affairs1);
      }
      else if (newData.oldLeader.position == "VP of External Affairs"){
        console.log(currentBoard.leaders.board.vp_affairs2);
      }
      else if (newData.oldLeader.position == "Web Master"){
        console.log(currentBoard.leaders.board.webmaster);
      }
      else if (newData.oldLeader.position == "Project Manager"){
        console.log(currentBoard.leaders.board.proj_manager1);
      }
    }
    else if (newData.section === "officers"){
      const lodash = require('lodash');
      const selectedGroup = currentBoard.leaders.officers.filter(g => g.role_group === newData.role_group);
      selectedGroup.at(0).members.forEach(element => {
        if(lodash.isEqual(element, newData.oldLeader)){
          console.log(element);
        }
      });
    }
    else if (newData.section === "committee"){
      const lodash = require('lodash');
      const selectedGroup = currentBoard.leaders.committee.filter(g => g.role_group === newData.role_group);
      selectedGroup.at(0).members.forEach(element => {
        if(lodash.isEqual(element, newData.oldLeader)){
          console.log(element);
        }
      });
    }
    else{
      console.log(currentBoard.leaders.advisors);
      const lodash = require('lodash');
      currentBoard.leaders.advisors.forEach(element => {
        if(lodash.isEqual(element, newData.oldLeader)){
          console.log(element);
        }
      });
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
              <CurrentTab data={currentBoard} onUpdate={updateLeaderHandler}/>
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
