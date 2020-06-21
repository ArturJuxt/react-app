import React from "react";
import s from './Title.module.css';
import { NavLink } from "react-router-dom";

const Title = () => {
  return (
    <div className={s.title}>
      <h2>
        <NavLink to="/">WeB MaSTeR</NavLink>
      </h2>
    </div>
  );
};

export default Title;
