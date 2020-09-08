import React, { useState } from "react";
import { Table, Button } from "reactstrap";
import { UserRow } from "./UserRow";

export const UsersTable = ({ users, deleteHandler, updateHandler }) => {
  const [isEditable, setisEditable] = useState(false);

  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Room number</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <UserRow
            key={"user" + index}
            user={user}
            index={index}
            deleteHandler={deleteHandler}
            updateHandler={updateHandler}
          />
        ))}
      </tbody>
    </Table>
  );
};
