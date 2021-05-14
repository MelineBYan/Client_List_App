import React, { memo } from "react";
import PropTypes from "prop-types";
import { Modal, Button } from "react-bootstrap";

const Confirm = (props) => {
  const { onHide, removeClient, client } = props;
  return (
    <Modal show={true} onHide={onHide}>
      <Modal.Header
        closeButton
        className="bg-primary text-light"
      ></Modal.Header>
      <Modal.Body>
        <Modal.Title>Are you sure you want to delete {client} ?</Modal.Title>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={removeClient}>
          Yes
        </Button>
        <Button variant="outline-primary" onClick={onHide}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
Confirm.propTypes = {
  onHide: PropTypes.func.isRequired,
  removeClient: PropTypes.func.isRequired,
};

export default memo(Confirm);
