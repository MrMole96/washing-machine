import React, { useState } from "react";
import { Button, Input } from "reactstrap";

export const UserRow = ({ user, index, deleteHandler, updateHandler }) => {
  const [isEditable, setisEditable] = useState(false);
  const [row, setRow] = useState({});

  const updateRow = (target) => {
    var name = target.name;
    var value = target.value;

    setRow({ ...row, id: user.id, [name]: value });
  };

  const updateClickHandler = () => {
    setisEditable((value) => !value);

    updateHandler(row);
  };

  const deleteClickHandler = () => {
    deleteHandler(user.id);
  };

  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        {!isEditable ? (
          user.firstName
        ) : (
          <Input
            name="firstName"
            defaultValue={user.firstName}
            onChange={(e) => updateRow(e.target)}
          />
        )}
      </td>
      <td>
        {!isEditable ? (
          user.lastName
        ) : (
          <Input
            name="lastName"
            defaultValue={user.lastName}
            onChange={(e) => updateRow(e.target)}
          />
        )}
      </td>
      <td>
        {!isEditable ? (
          user.roomNumber
        ) : (
          <Input
            name="roomNumber"
            defaultValue={user.roomNumber}
            onChange={(e) => updateRow(e.target)}
          />
        )}
      </td>
      <td>
        {!isEditable ? (
          <Button
            className="mr-1"
            color="warning"
            onClick={() => setisEditable((value) => !value)}
          >
            Edit
          </Button>
        ) : (
          <Button
            className="mr-1"
            color="success"
            onClick={() => updateClickHandler()}
          >
            Save
          </Button>
        )}

        <Button color="danger" onClick={() => deleteClickHandler()}>
          Delete
        </Button>
      </td>
    </tr>
  );
};
