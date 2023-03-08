import React from "react";

const Dropdown = ({
  options,
  selected = "" || {label: "No options"},
  onSelectedChange,
  label 
}) => {

  if (!options) return null;
  return (
    <div className="ui form">
      <div className="field">
        <label className="label">{label}</label>
        <div className="ui selection dropdown visible active">
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className="menu visible transition">
            {options.map((option) => {
              return (
                <div
                  key={option.value}
                  className="item"
                  onClick={() => onSelectedChange(option)}
                >
                  {option.label}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;