import React from "react";
import s from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={s.navbar}>
      <p><span>HTML</span> стандартизированный язык разметки документов во Всемирной паутине.</p>
      <p><span>CSS</span> <br/>формальный язык описания внешнего вида документа, написанного с использованием языка разметки. </p>
      <p><span>JS</span> мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили.</p>
    </div>
  );
};

export default Navbar;
