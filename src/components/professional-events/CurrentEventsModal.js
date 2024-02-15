import React, {useState} from 'react';
import './CurrentEventsModal.css';
import {Button, Modal, Image} from 'react-bootstrap'; 

function CurrentEventsModal(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <div class="test"> 
            {/* This button will most likely take it's text from a prop
            since we will use the Google Calendar API at the highest lvl
            of component Hierarchy */}
            <Button variant="dark" size="md" className="current-events-button" onClick={handleShow}>{props.textValue}</Button>

        <Modal show={show} onHide={handleClose} className="events-modal">
            <Modal.Body className="events-modal-card">
                <Image src={require('./images/' + props.imageName)} fluid />
            </Modal.Body>
            <Modal.Footer className="events-modal-card">
            
            <Button variant="primary" onClick={handleClose}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>
        </div>
    );

}


export default CurrentEventsModal;