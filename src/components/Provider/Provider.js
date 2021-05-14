import React, { memo, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faEdit,
  faCheck,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { Form, Button, Row, Col } from "react-bootstrap";
import "./Provider.scss";

const Provider = ({
  provider,
  providers,
  toggleChecked,
  updateProvider,
  setEditableProvider,
  changeProvider,
  editableProvider,
  removeProvider,
}) => {
  const currentlyEditing = editableProvider?._id === provider._id;

  useEffect(() => {
    currentlyEditing && inputRef.current.focus();
  }, [setEditableProvider, currentlyEditing]);

  let checked = false;
  if (providers.length) {
    providers.forEach((p) => {
      if (p._id === provider._id) {
        checked = true;
        return;
      }
    });
  }

  const inputRef = useRef(null);

  return (
    <Form.Group as={Row} className="d-flex justify-content-center my-0 ">
      <Col
        sm={5}
        className="d-flex justify-content-start align-items-center p-0 mr-5"
      >
        <Button
          variant="light"
          className="p-0 border-secondary mr-1 my-1"
          onClick={() => toggleChecked(provider)}
        >
          <FontAwesomeIcon
            icon={faCheck}
            style={checked ? { color: "black" } : { color: "white" }}
          />
        </Button>
        {currentlyEditing ? (
          <Form.Control
            type="text"
            name="inputValue"
            value={editableProvider.name}
            ref={inputRef}
            className="border-light bg-light my-1 mx-1"
            onChange={(e) => {
              changeProvider(e.target.value);
            }}
          />
        ) : (
          <Form.Control
            className="border-light bg-light mb-1"
            readOnly={true}
            value={provider.name}
          />
        )}
        {!currentlyEditing ? (
          <>
            <Button
              variant="light"
              className="ml-auto mr-2 p-0"
              onClick={() => setEditableProvider(provider)}
            >
              <FontAwesomeIcon icon={faEdit} />
            </Button>
            <Button
              type="button"
              variant="light"
              className="p-0"
              onClick={() => removeProvider(provider._id)}
            >
              <FontAwesomeIcon icon={faTrash} />
            </Button>
          </>
        ) : (
          <>
            <Button
              variant="light"
              className="ml-auto mr-2 p-0"
              disabled={!editableProvider.name}
              onClick={() => {
                updateProvider(editableProvider);
                setEditableProvider(null);
              }}
            >
              <FontAwesomeIcon icon={faCheck} />
            </Button>
            <Button
              type="button"
              variant="light"
              className="p-0"
              onClick={() => {
                setEditableProvider(null);
              }}
            >
              <FontAwesomeIcon icon={faTimes} />
            </Button>
          </>
        )}
      </Col>
    </Form.Group>
  );
};

export default memo(Provider);
