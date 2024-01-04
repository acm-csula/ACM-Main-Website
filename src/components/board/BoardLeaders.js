import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import logo from "./img/acm_logo.png";
import { Button } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

const BoardLeaders = (props) => {
  if (props.leader == null) {
    return <div></div>;
  } else {
    return (
      <div class="leadercontainer card">
          {props.enableEdit && <Button style={{width:"3em"}}><Icon.PencilFill/></Button>}
        <div align="center">
          {props.leader.img && (
            <img
              class="leaderimg rounded-circle p-3 card-img"
              src={props.leader.img}
            />
          )}
          {!props.leader.img && (
            <img
              class="leaderimg rounded-circle p-3 card-img"
              src={logo}
            />
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
      </div>
    );
  }
};

export default BoardLeaders;