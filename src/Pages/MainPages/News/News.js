import React from "react";
import s from "./News.module.css";
import List from "./List/List";
import AddList from "../News/AddList/AddList";

const News = () => {
  return (
    <div className={s.news}>
      <h2>News</h2>
      <AddList />
      <List />
    </div>
  );
};

export default News;
