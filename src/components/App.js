import React from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState(false);

  function handleEditAvatarClick() {
    setisEditAvatarPopupOpen(true);
  };

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  };

  function handleAddPlaceClick() {
    setisAddPlacePopupOpen(true);
  };

  function closeAllPopups() {
    setisEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setisAddPlacePopupOpen(false);
    setSelectedCard(false);
  };

  function handleCardClick(card) {
    setSelectedCard(card);
  }


  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />

      <PopupWithForm title="Редактировать профиль" name="profile" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <input id="popup-input-full-name" className="popup__input popup__input_full-name"
          name="name" type="text" placeholder="Имя пользователя"
          minLength="2" maxLength="40" required
        />
        <span id="popup-input-full-name-error" className="popup__input-error"></span>
        <input id="popup-input-profession" className="popup__input popup__input_profession"
          name="profession" type="text" placeholder="Профессия"
          minLength="2" maxLength="200" required
        />
        <span id="popup-input-profession-error" className="popup__input-error"></span>
      </PopupWithForm>

      <PopupWithForm title="Новое место" name="add-card" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <input id="popup-input-place-name" className="popup__input popup__input_place-name"
          name="popup__input_place-name" type="text" placeholder="Название"
          minLength="1" maxLength="30" required
        />
        <span id="popup-input-place-name-error" className="popup__input-error"></span>
        <input id="popup-input-place-image-link" className="popup__input popup__input_place-image-link"
          name="popup__input_place-image-link" type="url"
          placeholder="Ссылка на картинку" required
        />
        <span id="popup-input-place-image-link-error" className="popup__input-error"></span>
      </PopupWithForm>

      <PopupWithForm title="Обновить аватар" name="update-avatar" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <input id="popup-input-avatar-image-link" className="popup__input popup__input_update-avatar-link"
          name="popup__input_update-avatar-link" type="url"
            placeholder="Ссылка на аватар" required
        />
        <span id="popup-input-avatar-image-link-error" className="popup__input-error"></span>
      </PopupWithForm>

      <ImagePopup card={selectedCard} onClose={closeAllPopups}/>


      <div className="popup popup_closed popup_confirm">
        <div className="popup-container popup__container">
          <form className="popup__form popup__form-confirm" name="confirm" action="#" method="POST">
            <h4 className="popup__header popup__header_confirm">Вы уверены?</h4>
            <button className="popup__button-yes" type="submit">Да</button>
          </form>
          <button type="button" className="popup__button-close"></button>
        </div>
      </div>

    </div>
  );
}

export default App;
