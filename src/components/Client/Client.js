import React from "react";
import { Button } from "react-bootstrap";

const Client = ({ client, setEditable }) => {
  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>
        {!!client.providers.length &&
          client.providers.map((el) => el.name).join(", ")}
      </td>
      <td>
        <Button
          variant="light"
          className="text-info"
          onClick={() => setEditable(client)}
        >
          Edit
        </Button>
      </td>
    </tr>
  );
};

export default Client;
