import React from "react";
import s from "./TextField.module.css";

const TextField = ({ label, value, onChange }) => {
  return (
    <div className={s.text}>
      <label>{label}:</label>
      <br />
      <textarea type="textarea" value={value} onChange={onChange} />
    </div>
  );
};

export default TextField;
