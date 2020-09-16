import React from 'react';
import api from '../utils/Api';
import Card from './Card';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([
      api.getUserInfo(),
      api.getInitialCards(),
    ])
    .then(([{name, about, avatar}, initialCards]) => {
      setUserName(name)
      setUserDescription(about)
      setUserAvatar(avatar)
      setCards(initialCards)
    })
    .catch((err) => {
      // попадаем сюда если один из промисов завершится ошибкой
      console.log(err);
    })

  }, []);

  return (
    <>
      <section className="profile page__section">
        <button className="profile__photo" onClick={onEditAvatar}
          style={{ backgroundImage: `url(${userAvatar})` }}
        />
        <div className="profile__info">
          <div className="profile__title">
            <h1 className="profile__full-name">{userName}</h1>
            <button type="button" className="profile__edit-button" onClick={onEditProfile} />
          </div>
          <p className="profile__profession">{userDescription}</p>
        </div>
        <button type="button" className="profile__add-button" onClick={onAddPlace} />
      </section>

      <section className="places page__section">
        {
          cards.map(
            (card) => <Card card={card} onCardClick={onCardClick} key={card._id}/>
          ) 
        }
      </section>
    </>
  );



}

export default Main;
