import React from 'react'

export const SelectWrapper = ({
  input: { onChange, value, onFocus, onBlur },
  prop: { selectItems, labelName },
  meta: { touched, error },
}) => {
  return (
    <React.Fragment>
      <div className="form-group">
        <label htmlFor="userSelect">{labelName}:</label>
        <select
          onBlur={onBlur}
          onFocus={onFocus}
          name="userSelect"
          id="userSelect"
          className="form-control"
          value={value}
          onChange={(event) => {
            onChange(event.target.value !== '-- Select user --' ? event : null)
          }}
        >
          <option value={null}> -- Select user -- </option>
          {selectItems.map((x) => (
            <option key={x.id} value={x.firstName}>
              {x.firstName}
            </option>
          ))}
        </select>
      </div>
      {touched && error && <p className="reservations__error">{error}</p>}
    </React.Fragment>
  )
}
