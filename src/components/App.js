import React from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import api from '../utils/Api';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';

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

  const [cards, setCards] = React.useState([]);

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

  const handleCardLike = (card) => {
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

  const handleCardDelete = (card) => {
    api.deleteCard(card._id)
      .then(_ => {
        const newCards = cards.filter(c => c._id !== card._id)
        setCards(newCards);
      })
      .catch(err => {
        console.log(err);
      })
  }


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
        closeAllPopups();
      })
      .catch(err => {
        console.log(err);
      });
  }

  function handleUpdateAvatar({avatarLink}) {
    api.updateAvatar({avatar: avatarLink})
      .then(userInfo => {
        setCurrentUser(userInfo);
        closeAllPopups();
      })
      .catch(err => {
        console.log(err);
      });
  }

  function handleAddPlaceSubmit (newCard) {
    api.addCard(newCard)
      .then(newCard => {
        console.log(newCard);
        setCards([...cards, newCard]);
        closeAllPopups();
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
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          cards={cards}
        />
        <Footer />

        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/> 

        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit} />

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
