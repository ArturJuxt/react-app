import React, { useState, useMemo } from "react";
import s from "./AddList.module.css";
import { useDispatch, useSelector } from "react-redux";
import InputField from "../../../../Components/InputField/InputField";
import Text from "../../../../Components/TextField/TextField";
import Button from "../../../MainPages/../../Components/Button/Button";
import { addTitle } from "../../../../Store/Actions/NewsTitle";
import { getAuthor } from "../../../../Store/Selectors/Author";

const AddList = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const author = useSelector(getAuthor);

  const disabled = useMemo(() => {
    return !title || !text;
  }, [title, text]);

  const addNews = () => {
    dispatch(
      addTitle({
        title: title,
        text: text,
        author,
        id: Date.now(),
      })
    );
    setTitle("");
    setText("");
  };

  return (
    <div className={s.addlist}>
      <InputField
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Text
        label="Text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button onClick={addNews} disabled={disabled} />
    </div>
  );
};

export default AddList;
