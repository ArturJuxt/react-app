import React from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { getOneNews } from "../../../../Store/Selectors/NewsTitle";
import s from "./NewsDetails.module.css";

const NewsDetails = (props) => {
  let { id } = useParams();
  const oneNews = useSelector((store) => { return getOneNews(store, +id) });

  if (!oneNews) {
    return <div className={s.list}>News with {id} id not found</div>;
  }

  return (
    <p id={oneNews.id} key={oneNews.id}>
      <span className={s.title}>{oneNews.title} </span>
      {oneNews.text}
      <br />
      <span className={s.author}>author </span>
      <span className={s.author_name}>" {oneNews.author} "</span>
    </p>
  );
};

export default NewsDetails;
