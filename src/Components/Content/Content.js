import React from "react";
import s from "./Content.module.css";

const Content = () => {
  return (
    <div className={s.content}>
      <img
        alt="img"
        src="https://elbuz.com/image/data/eg_products/news/364d05043f141cf356dcf07a63e665d5d1c7bb6c.png"
      />
      <div className={s.h}>
          <h3>HTML</h3>
          <h3>CSS</h3>
          <h3>JavaScript</h3>
          <h3>React</h3>
          <h3>Redux</h3>
      </div>
    </div>
  );
};

export default Content;
