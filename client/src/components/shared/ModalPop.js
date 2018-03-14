import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from 'react-router-dom';

const ModalPop = ({ showModal, toggleModal, headerText, bodyText }) => (
  <div>
    <Modal isOpen={showModal} toggle={toggleModal}>
      <ModalHeader toggle={toggleModal}>{headerText}</ModalHeader>
      <ModalBody>{bodyText}</ModalBody>
      <ModalFooter>
        <Link to={'/'}><Button color="primary">OK</Button></Link>
      </ModalFooter>
    </Modal>
  </div>
);

export default ModalPop;