import React, { useEffect, useRef, memo } from "react";
import Provider from "../Provider/Provider";
import { connect } from "react-redux";
import {
  changeModalForm,
  setModalInitialState,
  resetModalData,
  toggleCheckedProvider,
  updateProvider,
  setEditableProvider,
  changeProvider,
  removeProvider,
  submitClientModalForm,
  setError,
} from "../../redux/actions";
import { Form, Modal, Button, Row, Col } from "react-bootstrap";
import "./ClientModal.scss";

const ClientModal = (props) => {
  const inputRef = useRef(null);
  const inputs = [
    {
      name: "name",
      type: "text",
      label: "Name:",
      ref: inputRef,
    },
    {
      name: "email",
      type: "email",
      label: "Email:",
    },
    {
      name: "phone",
      type: "number",
      label: "Phone:",
    },
    {
      name: "provider",
      type: "text",
      label: "Providers:",
    },
  ];
  const {
    state,
    onHide,
    onSubmit,
    editableClient,
    providersList,
    errorMessage,
    //dispatch
    changeModalForm,
    setState,
    resetModalData,
    toggleChecked,
    updateProvider,
    setEditableProvider,
    setIsOpenConfirmModal,
    changeProvider,
    createProvider,
    removeProvider,
    setError,
    submitForm,
  } = props;

  const { name, email, phone, provider, providers, editableProvider, error } =
    state;
  useEffect(() => {
    setError(error);
  }, [setError, error]);
  const inputsJSX = inputs.map((input, idx) => (
    <Form.Group key={idx} as={Row} className="d-flex justify-content-between">
      <Form.Label column sm={2}>
        {input.label}
      </Form.Label>
      <Col
        sm={idx === inputs.length - 1 ? 6 : 10}
        className="d-flex justify-content-between "
      >
        <Form.Control
          name={input.name}
          type={input.type}
          className="bg-light"
          onChange={({ target }) => changeModalForm(target)}
          value={state[input.name]}
          autoComplete={"off"}
          ref={null ?? input.ref}
        />
      </Col>

      <Col sm={4}>
        {idx === inputs.length - 1 && (
          <Button
            variant="light"
            className="border-secondary rounded"
            disabled={!state[input.name]}
            onClick={() => createProvider({ name: provider })}
          >
            Add Provider
          </Button>
        )}
      </Col>
    </Form.Group>
  ));

  const providersJSX = providersList.map((p) => (
    <Provider
      key={p._id}
      toggleChecked={toggleChecked}
      provider={p}
      providers={providers}
      updateProvider={updateProvider}
      setEditableProvider={setEditableProvider}
      changeProvider={changeProvider}
      editableProvider={editableProvider}
      removeProvider={removeProvider}
    />
  ));

  useEffect(() => {
    inputRef.current.focus();
    setState(editableClient);
    return () => {
      resetModalData();
    };
  }, [setState, editableClient, resetModalData]);

  return (
    <>
      <Modal show={true} onHide={onHide}>
        <Modal.Header closeButton className="text-info">
          <Modal.Title>
            {!editableClient ? "New Client" : "Edit Client"}
          </Modal.Title>
        </Modal.Header>
        <div className="text-danger mx-auto">{errorMessage}</div>
        <Modal.Body>
          <Form
            onSubmit={(e) => e.preventDefault()}
            className="border-secondary"
          >
            {inputsJSX}

            <Col style={{ border: "1px solid #dee2e6" }}>{providersJSX}</Col>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {editableClient && (
            <Button
              variant="danger"
              className="mr-auto"
              onClick={() => {
                setIsOpenConfirmModal(true);
              }}
            >
              Delete Client
            </Button>
          )}
          <Button
            variant="light"
            onClick={onHide}
            className="border-secondary rounded rounded"
          >
            Cancel
          </Button>
          <Button
            variant="light"
            className="border-secondary rounded"
            disabled={errorMessage || !(name.trim() && email.trim() && phone)}
            onClick={() => {
              submitForm(state, onSubmit);
              onHide();
            }}
          >
            {!editableClient ? "Add Client" : "Save Client"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    state: state.clientModalReducer,
    providersList: state.clientReducer.providersList,
    errorMessage: state.clientReducer.errorMessage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeModalForm: (data) => dispatch(changeModalForm(data)),
    setState: (data) => dispatch(setModalInitialState(data)),
    resetModalData: () => dispatch(resetModalData()),
    toggleChecked: (provider) => dispatch(toggleCheckedProvider(provider)),
    updateProvider: (prov) =>
      dispatch((dispatch) => updateProvider(prov, dispatch)),
    setEditableProvider: (prov) => dispatch(setEditableProvider(prov)),
    changeProvider: (value) => dispatch(changeProvider(value)),
    removeProvider: (id) =>
      dispatch((dispatch) => removeProvider(id, dispatch)),
    setError: (message) => dispatch(setError(message)),
    submitForm: (data, onSubmit) =>
      dispatch((dispatch) => submitClientModalForm(data, onSubmit, dispatch)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(memo(ClientModal));
