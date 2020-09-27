import React from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/Api';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';

import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState({});

  const [currentUser, setCurrentUser] = React.useState({});

  React.useEffect(() => {
    api.getUserInfo()
      .then(userInfo => {
        setCurrentUser(userInfo);
        console.log('get user info');
      })

  }, [])

  function handleEditAvatarClick() {
    setisEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setisAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setisEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setisAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleUpdateUser(userInfo) {
    console.log(userInfo);
    api.updateUserInfo(userInfo)
      .then(userInfo => {
        setCurrentUser(userInfo);
      })
      .catch(err => {
        console.log(err);
      });
  }

  function handleUpdateAvatar({avatarLink}) {
    api.updateAvatar({avatar: avatarLink})
      .then(userInfo => {
        setCurrentUser(userInfo);
      })
      .catch(err => {
        console.log(err);
      });
  }


  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />

        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/> 

        <PopupWithForm title="Новое место" name="add-card" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
          <input id="popup-input-place-name" className="popup__input popup__input_place-name"
            name="popup__input_place-name" type="text" placeholder="Название"
            minLength="1" maxLength="30" required
          />
          <span id="popup-input-place-name-error" className="popup__input-error" />
          <input id="popup-input-place-image-link" className="popup__input popup__input_place-image-link"
            name="popup__input_place-image-link" type="url"
            placeholder="Ссылка на картинку" required
          />
          <span id="popup-input-place-image-link-error" className="popup__input-error" />
        </PopupWithForm>

        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />


        <div className="popup popup_closed popup_confirm">
          <div className="popup-container popup__container">
            <form className="popup__form popup__form-confirm" name="confirm" action="#" method="POST">
              <h4 className="popup__header popup__header_confirm">Вы уверены?</h4>
              <button className="popup__button-yes" type="submit">Да</button>
            </form>
            <button type="button" className="popup__button-close" />
          </div>
        </div>

      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
