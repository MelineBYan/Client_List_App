import React, { memo } from "react";
import PropTypes from "prop-types";
import { Modal, Button } from "react-bootstrap";

const Confirm = (props) => {
  const { onHide, removeClient, client } = props;
  return (
    <Modal show={true} onHide={onHide}>
      <Modal.Header closeButton className="bg-info text-light"></Modal.Header>
      <Modal.Body>
        Are you sure you want to delete
        <span className="text-info"> {client}</span> ?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={removeClient}>
          Yes
        </Button>
        <Button variant="outline-info" onClick={onHide}>
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
