import React from "react";
import s from "./Main.module.css";
import { NavLink } from "react-router-dom";

const Main = () => {
  return (
    <div className={s.main}>
      <ul>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/Step">Step</NavLink>
        </li>
        <li>
          <NavLink to="/News">News</NavLink>
        </li>
        <li>
          <NavLink to="/ClassStep">ClassStep</NavLink>
        </li>
        <li>
          <NavLink to="/HookStep">HookStep</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Main;
