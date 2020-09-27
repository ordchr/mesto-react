import React from 'react';

function PopupWithForm({
  title,
  name,
  isOpen,
  onClose,
  onSubmit,
  children
}) {
  return (
    <div className={`popup ${isOpen ? 'popup_opened' : 'popup_closed' }  popup_${name}`}>
        <div className="popup-container popup__container">
          <form className={`popup__form popup__form-edit_${name}`} name={name} action="#" method="GET" onSubmit={onSubmit}>
            <h4 className="popup__header">{title}</h4>
            {children}
            <button className="popup__button-save" type="submit">Сохранить</button>
          </form>
          <button type="button" className="popup__button-close" onClick={onClose} />
        </div>
      </div>
  );

}

export default PopupWithForm;
