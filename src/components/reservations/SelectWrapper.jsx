import React from "react";

export const SelectWrapper = ({
  input: { onChange, value },
  prop: { selectItems, labelName },
  meta: { error },
}) => {
  return (
    <React.Fragment>
      <div class="form-group">
        <label for="exampleSelect" class="">
          {labelName}:
        </label>
        <select
          name="select"
          id="exampleSelect"
          class="form-control"
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
