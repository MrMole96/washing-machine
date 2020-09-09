import React, { useEffect } from "react";
import { connect } from "react-redux";
import { reduxForm, FieldArray, Form } from "redux-form";
import { Button, Container, Row, Col } from "reactstrap";
import _map from "lodash/map";
import ReactJson from "react-json-view";

import { WEEK_DAYS } from "../../common/constants";
import { clearReservations, saveReservations } from "../../actions/machine";
import { getUsers } from "../../actions/user";
import SingleDayReservations from "./SingleDayReservations";
import "./Reservations.scss";
import moment from "moment";

const validate = (days) => {

  const errors = {
    // monday: [{ start: 'must be present' }],
    // tuesday: { _error: 'error' },
  };

  Object.keys(days).forEach((day) => {
  
    var fieldArrayError = [];
    days[day].forEach((field) => {
      var fieldErrors = {};
      var start = moment.utc(field.start);
      var end = moment.utc(field.end);

      //1
      if (field.start === null) {
        fieldErrors.start = "Can not be empty";
      }
      if (field.end === null) {
        fieldErrors.end = "Can not be empty";
      }
      if (field.user === null) {
        fieldErrors.user = "Can not be empty";
      }
      if (start.isSame(end)){
        fieldErrors.start = "Can not be empty";
        fieldErrors.end = "Can not be empty";
      }


      //2
      if (start.isAfter(end)) {
        fieldErrors.end = "End time should be after start time";
      }

      //3     
      if (moment(field.start).add("150", "minutes").isBetween(field.start, field.end)) {
        fieldErrors.end = "Reservation too long";
      }

      for (let index = 0; index < days[day].length; index++) {
        if(moment(field.start).isBetween(days[day][index].start, days[day][index].end) || moment(field.end).isBetween(days[day][index].start, days[day][index].end)){
          errors[day] = { _error: 'Conflict between two reservations' }
        }
        if(moment(field.start).isBetween(days[day][index].end, moment(days[day][index].end).add("15", "minutes"))){
          errors[day] = { _error: 'Two reservations too close to each other' }
        }
      }
      fieldArrayError.push(fieldErrors);    
    });
    errors[day] = {...errors[day], ...fieldArrayError};
    
  });

  return errors;
};

const Reservations = ({
  clearReservations,
  handleSubmit,
  machine,
  users,
  saveReservations,
  reset
}) => {
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Container className="reservations">
      <Form onSubmit={handleSubmit(saveReservations)}>
        <Row>
          <Col xs={8}>
            <h2>Reservations</h2>
            {_map(WEEK_DAYS, (day) => (
              <FieldArray
                key={`single-${day}`}
                component={SingleDayReservations}
                name={day}
                props={{
                  selectItems: users,
                }}
              />
            ))}
            <Button color="primary" type="submit">
              Save data
            </Button>
          </Col>
          <Col xs={4}>
            <ReactJson src={machine} name="machineStoreState" />
            <Button
              onClick={clearReservations}
              color="warning"
              className="reservations__clear-btn"
            >
              Reset Data
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};
const mapStateToProps = (state) => ({
  machine: state.machine,
  users: state.users,
  initialValues: state.machine,
});

const mapDispatchToProps = {
  clearReservations,
  saveReservations,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({
    form: "reservations",
    validate,
    enableReinitialize: true,
  })(Reservations)
);
