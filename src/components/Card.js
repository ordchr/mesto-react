import React from 'react';
import delIcon from '../images/del-icon.svg';

function Card({card, onCardClick}) {

  function handleCardClick() {
    onCardClick(card);
  }
  const {name, link, likes} = card;
  return (
    <div className="place">
      <img src={link} className="place__image" alt="" onClick={handleCardClick} />
      <button type="button" className="place__image-del" style={{ backgroundImage: `url(${delIcon})` }}></button>
      <div className="place__title">
        <h3 className="place__title-text">{name}</h3>
        <div className="place__title-like-block">
          <button type="button" className="place__title-like"></button>
          <h5 className="place__title-like-count">{likes.length}</h5>
        </div>
      </div>
    </div>

  );

}

export default Card;
