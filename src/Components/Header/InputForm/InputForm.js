import React, { useState } from "react";
import s from "./InputForm.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getAuthor } from "../../../Store/Selectors/Author";
import { addAuthor } from '../../../Store/Actions/Author';

const InputForm = () => {
  const dispath = useDispatch();
  const Auth = useSelector(getAuthor);

  const [name, setName] = useState("");

  const handleClick = () => {
    dispath(addAuthor(name));
    setName("");
  };

  const onAuthorChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div className={s.in}>
      <p>
        Hi <span>{Auth}</span>
      </p>
      <input
        type="text"
        placeholder="Name"
        onChange={onAuthorChange}
        value={name}
      />
      <button onClick={handleClick}>ok</button>
    </div>
  );
};

export default InputForm;
