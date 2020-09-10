import React from "react";
import { Table } from "reactstrap";
import { UserRow } from "./UserRow";
import { connect } from "react-redux";
import {updateUser, deleteUser } from "../../actions/user";

const UsersTable = ({ users, updateUser , deleteUser}) => {
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
            deleteHandler={deleteUser}
            updateHandler={updateUser}
          />
        ))}
      </tbody>
    </Table>
  );
};
const mapDispatchToProps = {
  updateUser,
  deleteUser,
};


export default connect(null, mapDispatchToProps)(UsersTable);