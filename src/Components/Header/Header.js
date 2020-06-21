import React from "react";
import s from "./Header.module.css";
import Logo from "./Logo/Logo";
import Title from "./Title/Title";
import Main from "./Main/Main";
import InputForm from "./InputForm/InputForm";

const Header = () => {
  return (
    <div className={s.header}>
      <Logo />
      <Title />
      <Main />
      <InputForm />
    </div>
  );
};

export default Header;
