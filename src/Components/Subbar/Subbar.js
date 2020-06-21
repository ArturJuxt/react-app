import React from "react";
import s from "./Subbar.module.css";

const Subbar = () => {
  return (
    <div className={s.subbar}>
      <p>
        <span>React</span><br/>JavaScript библиотека с открытым исходным кодом для
        разработки пользовательских интерфейсов.
      </p>
      <p>
        <span>Redux</span><br/> библиотека для JavaScript с открытым исходным кодом,
        предназначенная для управления состоянием приложения.
      </p>
    </div>
  );
};

export default Subbar;
