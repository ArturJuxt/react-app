import React from "react";
import s from './List.module.css';
import { useSelector } from "react-redux";
import { getNews } from "../../../../Store/Selectors/NewsTitle";

const List = ({ type }) => {
  const news = useSelector(getNews);
  return (
    <div className={s.list}>
      {news.map((n) => {
        return (
          <p id={n.id} key={n.id}>
            <span className={s.title}>{n.title} </span>
            {n.text}<br/>
            <span className={s.author}>author </span>
            <span className={s.author_name}>" {n.author} "</span>
          </p>
        );
      })}
    </div>
  );
};

export default List;
