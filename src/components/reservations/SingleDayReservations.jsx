import React from "react";
import { Row, Col, Button, Container } from "reactstrap";
import { Field } from "redux-form";
import _capitalize from "lodash/capitalize";
import TimePickerWrapper from "./TimePickerWrapper";
import { SelectWrapper } from "./SelectWrapper";
import moment from "moment";

const normalizeDate = (value) => {
  var normalized = value;
  if (moment(value, "HH:mm", true).isValid()) {
    normalized = moment(value).format("HH:mm");
  }
  return normalized;
};

const SingleDayReservations = ({ fields, selectItems, meta: { error } }) => {
  return [
    <Container key="container">
      <Row key="header">
        <Col>
          <h5>{_capitalize(fields.name)}</h5>
          <span className="reservations__error">{error}</span>
        </Col>
      </Row>
      <Row key="entry">
        {fields.map((name, index) => (
          <div key={`${name}-${index}`}>
            <Row              
              className="reservations__single-entry"
            >
              <Col xs={{ size: 12 }} md={{ size: 6 }}>
                <Field
                  name={`${name}.start`}
                  component={TimePickerWrapper}
                  prop={{
                    labelName: "Start",
                  }}
                />
              </Col>
              <Col xs={{ size: 12 }} md={{ size: 6 }}>
                <Field
                  name={`${name}.end`}
                  component={TimePickerWrapper}
                  prop={{
                    labelName: "End",
                  }}
                  // normalize={normalizeDate}
                />
              </Col>
              <Col xs={{ size: 12 }} md={{ size: 6 }}>
                <Field
                  name={`${name}.user`}
                  component={SelectWrapper}
                  prop={{
                    labelName: "User",
                    selectItems: selectItems,
                  }}
                />
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Button
                onClick={() => {
                  fields.remove(index);
                }}
                color="danger"
                className="reservations__remove-btn"
              >
                Remove
              </Button>
            </Row>
          </div>
        ))}
      </Row>
      <Row key="footer">
        <Col xs={{ size: 3, offset: 9 }}>
          <Button
            onClick={() => {
              fields.push({ start: null, end: null, user: null });
            }}
            color="warning"
            className="reservations__clear-btn"
          >
            + Add Entry
          </Button>
        </Col>
      </Row>
      <hr />
    </Container>,
  ];
};

export default SingleDayReservations;
