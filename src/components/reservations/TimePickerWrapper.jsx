import React from 'react'
import DatePicker from 'react-datepicker'
import { Label } from 'reactstrap'
import moment from 'moment'
const TimePickerWrapper = ({
  prop: { labelName },
  input: { onChange, value, onFocus, onBlur },
  meta: { visited, touched, error },
}) => {
  return (
    <React.Fragment>
      <Label className="mr-2">{labelName}:</Label>
      <DatePicker
        onBlur={onBlur}
        onFocus={onFocus}
        selected={value ? moment(value).toDate() : null}
        onChange={(event) => {
          onChange(event ? moment.utc(event).format() : null)
        }}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={5}
        dateFormat="h:mm aa"
        timeCaption="Time"
      />

      {(visited || touched) && error && <p className="reservations__error">{error}</p>}
    </React.Fragment>
  )
}
export default TimePickerWrapper
