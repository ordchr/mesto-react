import React from 'react';

function ImagePopup({
  card,
  onClose,
  isOpen
}) {
  return (
      <div className={`popup-preview ${isOpen ? 'popup_opened' : 'popup_closed' }`}>
        <div className="popup-container popup-preview__container">
          <img src={card.link} className="popup-preview__image" alt="" />
          <button type="button" className="popup__button-close" onClick={onClose}></button>
          <p className="popup-preview__description">{card.name}</p>
        </div>
      </div>
  );

}

export default ImagePopup;