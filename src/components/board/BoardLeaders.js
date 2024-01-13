import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import logo from "./img/acm_logo.png";
import { Button } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import EditLeader from "../admin/boardAdmin/modals/EditLeader";

const BoardLeaders = (props) => {
  //the following useState variables are only used for the board admin
  const [editModal, setEditModal] = useState(false);
  const [selectedLeader, setSelected] = useState(null);

  if (props.leader == null) {
    return <div></div>;
  } else {
    return (
      <div class="leadercontainer card">
        {props.enableEdit && (
          <div>
            <Button
              style={{ width: "3em" }}
              onClick={() => {
                setSelected(props.leader);
                setEditModal(true);
              }}
            >
              <Icon.PencilFill />
            </Button>
            <Button
              style={{ width: "3em"}}
              variant="danger"
            >
              <Icon.Trash />
            </Button>
          </div>
        )}
        <div align="center">
          {props.leader.img && (
            <img
              class="leaderimg rounded-circle p-3 card-img"
              src={props.leader.img}
            />
          )}
          {!props.leader.img && (
            <img class="leaderimg rounded-circle p-3 card-img" src={logo} />
          )}

          <div class="card-body leadercardbody">
            <h5 class="leadercard-title leadercardtitle">
              {props.leader.first} {props.leader.last}
            </h5>
            <h6 class="role card-subtitle mb-2 text-muted">
              {props.leader.position}
            </h6>
          </div>
        </div>

        {/*This component is only rendered on editing leaders*/}
        {selectedLeader && (
          <EditLeader
            leader={selectedLeader}
            show={editModal}
            onHide={() => setEditModal(false)}
            onUpdate={props.onUpdate}
          />
        )}
      </div>
    );
  }
};

export default BoardLeaders;
