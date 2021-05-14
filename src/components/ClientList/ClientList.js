import React, { useEffect, memo } from "react";
import { connect } from "react-redux";
import {
  setClients,
  createClient,
  updateClient,
  setIsOpenModal,
  setEditable,
  setProviders,
  createProvider,
  setIsOpenConfirmModal,
  removeClient,
} from "../../redux/actions";
import { Table, Container, Row, Button, Col } from "react-bootstrap";
import Spinner from "../Spinner/Spinner";
import ClientModal from "../ClientModal/ClientModal";
import Client from "../Client/Client";
import Confirm from "../ConfirmModal/ConfirmModal";
import "./client.scss";

import Search from "../Search/Search";

const ClientList = (props) => {
  const {
    state,
    setClients,
    createClient,
    updateClient,
    setEditable,
    setProviders,
    createProvider,
    setIsOpenModal,
    removeClient,
    setIsOpenConfirmModal,
  } = props;
  const { clients, editableClient, loading, isOpenModal, isOpenConfirmModal } =
    state;

  useEffect(() => {
    setClients();
    setProviders();
  }, [setClients, setProviders]);
  const clientList = clients.map((client) => (
    <Client key={client._id} client={client} setEditable={setEditable} />
  ));

  return (
    <Container className="d-flex-column justify-content-center align-items-center mt-5">
      <Row className="d-flex my-3 align-items-center">
        <Search />
      </Row>
      <Row>
        <Col>
          <h5 className="text-info font-weight-bold">Clients</h5>
        </Col>
        <Col className="d-flex justify-content-end mb-2">
          <Button
            variant="light"
            className="rounded border-secondary"
            onClick={() => setIsOpenModal(true)}
          >
            New client
          </Button>
        </Col>
      </Row>
      <Row>
        {!!clients.length && (
          <Table striped bordered hover size="sm" className="clientsTable">
            <thead>
              <tr>
                <th>name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Providers</th>
                <th></th>
              </tr>
            </thead>
            <tbody>{clientList}</tbody>
          </Table>
        )}
      </Row>
      {isOpenModal && (
        <ClientModal
          onHide={() => {
            setEditable(null);
            setIsOpenModal(false);
          }}
          setIsOpenConfirmModal={setIsOpenConfirmModal}
          onSubmit={editableClient ? updateClient : createClient}
          editableClient={editableClient}
          isOpenConfirmModal={isOpenConfirmModal}
          createProvider={createProvider}
        />
      )}
      {isOpenConfirmModal && (
        <Confirm
          onHide={() => setIsOpenConfirmModal(false)}
          removeClient={() => removeClient(editableClient._id)}
          client={editableClient.name}
        />
      )}

      {loading && <Spinner />}
    </Container>
  );
};
const mapStateToProps = (state) => {
  return {
    state: state.clientReducer,
  };
};
const mapDispatchToProps = {
  setClients,
  createClient,
  updateClient,
  setIsOpenModal,
  setEditable,
  setProviders,
  removeClient,
  setIsOpenConfirmModal,
  createProvider,
};
export default connect(mapStateToProps, mapDispatchToProps)(memo(ClientList));
