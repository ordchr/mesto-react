import React from 'react';
import api from '../utils/Api';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {
  const [cards, setCards] = React.useState([]);

  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    Promise.all([
      api.getInitialCards(),
    ])
    .then(([initialCards]) => {
      setCards(initialCards)
    })
    .catch((err) => {
      // попадаем сюда если один из промисов завершится ошибкой
      console.log(err);
    })

  }, []);

  const onCardLike = (card) => {
    const isLiked = card.likes.some( i => i._id === currentUser._id);
    api.changeLikeStatus(card._id, !isLiked)
      .then(newCard => {
        const newCards = cards.map(c => c._id === card._id ? newCard : c)
        setCards(newCards);
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <>
      <section className="profile page__section">
        <button className="profile__photo" onClick={onEditAvatar}
          style={{ backgroundImage: `url(${currentUser.avatar})` }}
        />
        <div className="profile__info">
          <div className="profile__title">
            <h1 className="profile__full-name">{currentUser.name}</h1>
            <button type="button" className="profile__edit-button" onClick={onEditProfile} />
          </div>
          <p className="profile__profession">{currentUser.about}</p>
        </div>
        <button type="button" className="profile__add-button" onClick={onAddPlace} />
      </section>

      <section className="places page__section">
        {
          cards.map(
            (card) => <Card card={card} onCardClick={onCardClick} onCardLike={onCardLike} key={card._id}/>
          ) 
        }
      </section>
    </>
  );



}

export default Main;
