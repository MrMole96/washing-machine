import React from "react";
import DatePicker from "react-datepicker";
import { Label } from "reactstrap";
import moment from "moment";
const TimePickerWrapper = ({
  prop: { labelName },
  input: { onChange, value },
  meta: { error },
}) => {
  console.log(error);
  return (
    <React.Fragment>
      <Label className="mr-2">{labelName}:</Label>
      <DatePicker
        selected={value ? moment(value).toDate() : null}
        onChange={onChange}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={15}
        dateFormat="h:mm aa"
        timeCaption="Time"
      />
      <span className="reservations__error">{error}</span>
    </React.Fragment>
  );
};
export default TimePickerWrapper;
