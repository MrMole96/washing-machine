import React from "react";

export const SelectWrapper = ({
  input: { onChange, value },
  prop: { selectItems, labelName },
  meta: { error },
}) => {
  return (
    <React.Fragment>
      <div className="form-group">
        <label htmlFor="userSelect">
          {labelName}:
        </label>
        <select
          name="userSelect"
          id="userSelect"
          className="form-control"
          value={value}
          onChange={onChange}        
        >
          <option value={null}>---</option>
          {selectItems.map((x) => (
            <option key={x.id} value={x.firstName}>
              {x.firstName}
            </option>
          ))}
        </select>
      </div>
      <span className="reservations__error">{error}</span>
    </React.Fragment>
  );
};
