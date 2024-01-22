import React from "react";
import { Modal, Form, Button } from "react-bootstrap";
const DeleteLeader = (props) => {
    const deleteHandler = () =>{
    props.onDelete(props.leader);
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
          <Modal.Header closeButton>
            Remove {props.leader.first}?
          </Modal.Header>
            <Form >
              <Modal.Footer>
                <Button variant="success" className="mb-2" onClick={deleteHandler}>
                  Confirm
                </Button>
                <Button
                  variant="warning"
                  onClick={props.onHide}
                  className="mb-2"
                >
                  Cancel
                </Button>
              </Modal.Footer>
            </Form>
        </Modal>
    </>
  );
};

export default DeleteLeader;
