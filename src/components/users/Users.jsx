import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import { Card, CardBody, CardTitle } from "reactstrap";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "./Users.scss";
import ReactJson from "react-json-view";
import { addUser, getUsers } from "../../actions/user";
import { connect } from "react-redux";
import { reduxForm, Field, reset } from "redux-form";
import UsersTable from "./UsersTable";

const afterSubmit = (result, dispatch) => {
  dispatch(reset("users"));
};

const customInput = (props, { type }) => (
  <React.Fragment>
    <Input {...props.input} type={props.type} />
    <span>{props.meta.error}</span>
  </React.Fragment>
);

const Users = ({ handleSubmit, users, addUser, getUsers }) => {
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
        <UsersTable users={users} />
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
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({
    form: "users",
    onSubmitSuccess: afterSubmit,
    enableReinitialize: true,
  })(Users)
);
