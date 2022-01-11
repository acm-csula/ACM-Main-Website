import React from "react";
import "./board.css";
import "bootstrap/dist/css/bootstrap.css";

class BoardLeaders extends React.Component {
  render() {
    return (
      <div className="col-leaders leader-background">
        <img
          className="image-cropper profile-pic "
          src={this.props.photo}
          alt={this.props.firstName + " " + this.props.year}
        ></img>
        <div className="officer-info">
          <h2>
            {this.props.firstName}
            <br />
            {this.props.lastName}
          </h2>
          {this.props.position}
        </div>
      </div>
    );
  }
}

export default BoardLeaders;
