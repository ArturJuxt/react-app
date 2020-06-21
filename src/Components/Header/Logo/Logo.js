import React from "react";
import s from './Logo.module.css';

const Logo = () => {
  return (
    <div className={s.logo}>
      <img
        alt="img"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT5j7zfaGiFdhIZCd_KVjhEFbziIEvOAfuHJ_elwAg4BlqnuAwm&usqp=CAU"
      />
    </div>
  );
};

export default Logo;
