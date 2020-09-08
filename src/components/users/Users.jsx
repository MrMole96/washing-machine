import React, { useEffect, useState } from "react";
import { Table, Container } from "reactstrap";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import "./Users.scss";
import ReactJson from "react-json-view";
import { addUser, getUsers, updateUser, deleteUser } from "../../actions/user";
import { connect } from "react-redux";
import { reduxForm, Field, reset } from "redux-form";
import { purgeStoredState } from "redux-persist";
import { UsersTable } from "./UsersTable";

const validate = (values) => {
  const errors = {
    // monday: [{ start: 'must be present' }],
    //tuesday: { _error: 'error' },
  };
  return errors;
};

const afterSubmit = (result, dispatch) => {
  dispatch(reset("users"));
};

const customInput = (props, { type }) => (
  <Input {...props.input} type={props.type} />
);

const Users = ({
  handleSubmit,
  users,
  addUser,
  getUsers,
  updateUser,
  deleteUser,
  reset,
}) => {
  const [items, getItems] = useState(null);
  useEffect(() => {
    getItems(() => getUsers());
  }, []);

  return (
    <Container>
      <Card className="card">
        <CardBody>
          <CardTitle>Add new user</CardTitle>
          <Form onSubmit={handleSubmit(addUser)}>
            <FormGroup>
              <Label for="firstName">First name: </Label>
              <Field
                type="text"
                name="firstName"
                component={customInput}
                placeholder="First name"
              />
            </FormGroup>
            <FormGroup>
              <Label for="lastName">Last name:</Label>
              <Field
                type="text"
                name="lastName"
                component={customInput}
                placeholder="Last name"
              />
            </FormGroup>
            <FormGroup>
              <Label for="roomNumber">Room number:</Label>
              <Field
                // parse={(value) => Number(value)}
                type="number"
                name="roomNumber"
                component={customInput}
                initialValues="0"
                placeholder="Room number"
              />
            </FormGroup>
            <Button color="primary" type="submit">
              Save
            </Button>
          </Form>
        </CardBody>
      </Card>
      <ReactJson src={users} name="userStoreState" />
      {users.length !== 0 ? (
        <UsersTable
          users={users}
          updateHandler={updateUser}
          deleteHandler={deleteUser}
        />
      ) : (
        <h2 className="text-center m-5">No users</h2>
      )}
    </Container>
  );
};
const mapStateToProps = (state) => ({
  users: state.users,
});

const mapDispatchToProps = {
  addUser,
  getUsers,
  updateUser,
  deleteUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({
    form: "users",
    validate,
    onSubmitSuccess: afterSubmit,
    enableReinitialize: true,
  })(Users)
);
