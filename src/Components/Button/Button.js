import React from "react";
import s from './Button.module.css';

const Button = ({ onClick, disabled }) => {
  return (
    <div className={s.input}>
      <input type="submit" onClick={onClick} disabled={disabled}/>
    </div>
  );
};

export default Button;
