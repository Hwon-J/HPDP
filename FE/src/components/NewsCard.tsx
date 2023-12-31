import React from "react";
import style from "../styles/css/NewsCard.module.css";
import { OutCompanyNewsInterface } from "../interface/apiDataInterface";

const NewsCard = ({ card }: { card: OutCompanyNewsInterface }) => {
  const cardTotalStyle = {
    backgroundImage: `url(${card.articleProfile})`,
  };

  const CardClick = () => {
    window.location.href = card.articleURL;
  };

  return (
    <div className={style.cardtotal} onClick={CardClick}>
      <div className={style.img} style={cardTotalStyle}></div>
      <div className={style.fundingcontent}>{card.articleTitle}</div>
    </div>
  );
};

export default NewsCard;
