import React from "react";
import s from "./InputField.module.css";

const InputField = ({ label, value, onChange }) => {

  return (
    <div className={s.title}>
      <label>
        {label}:
        <br />
        <input type="text" value={value} onChange={onChange} />
      </label>
    </div>
  );
};

export default InputField;
