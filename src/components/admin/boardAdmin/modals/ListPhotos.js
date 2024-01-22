import React from "react";
import { useState } from "react";
import {
  Modal,
  Button,
  Row,
  Col,
  Image,
  Container,
  Card,
} from "react-bootstrap";
const ListPhotos = (props) => {
  const selectImageHandler = (img) =>{
    console.log("selected image",img);
    props.onSetImage(img);
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
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Row className="container justify-content-center">
            {props.imgs.map((img, index) => (
              <>
                {img.link !== "" && (
                  <Card className="col-md-3 listimg" style={{ cursor: "pointer" }} onClick={()=>selectImageHandler(img)}>
                    <Card.Img
                      src={img.link}
                      class="leaderimg rounded-circle p-3 card-img"
                    />
                    <Card.Text>{img.name}</Card.Text>
                  </Card>
                )}
              </>
            ))}
          </Row>
          <Modal.Footer>
            <Button variant="success" className="mb-2" type="submit">
              Confirm
            </Button>
            <Button
              variant="warning"
              className="mb-2"
              onClick={() => props.onHide()}
            >
              Cancel
            </Button>
          </Modal.Footer>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ListPhotos;
