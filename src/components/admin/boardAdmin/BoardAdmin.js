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
        console.log("Error occured when fetching events", err);
      }
    };
    fetchData();

    return () => {
      // Cleanup function to set isMounted to false when the component is unmounted
      isMounted = false;
    };
  }, []);
  console.log(currentBoard);

  return (
    <div class="container main-boardadmin">
      {currentBoard && (
        <>
          <h1 align="center">Board page</h1>

          <Button className="mr-3 mb-3">Add new empty board</Button>
          <Tabs id="sub-tabs" className="mb-3 event-tabs">
            <Tab eventKey="current" title="Current">
              <CurrentTab data={currentBoard} />
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
