import React from 'react';

function ImagePopup({
  card,
  onClose
}) {
  return (
      <div className={`popup-preview ${card ? 'popup_opened' : 'popup_closed' }`}>
        <div className="popup-container popup-preview__container">
          <img src={card.link} className="popup-preview__image" alt="" />
          <button type="button" className="popup__button-close" onClick={onClose} />
          <p className="popup-preview__description">{card.name}</p>
        </div>
      </div>
  );

}

export default ImagePopup;
