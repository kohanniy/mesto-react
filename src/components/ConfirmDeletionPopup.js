import React from 'react';
import { handlestopPropagation } from '../utils/utils';

function ConfirmDeletionPopup({ isOpen, onClose, cardDelete }) {
  function handleSubmit(e) {
    e.preventDefault();
    cardDelete(isOpen);
  }

  return (
    <div onClick={onClose} className={`popup ${isOpen ? 'popup_opened' : 'popup_closed'}`}>
      <form onClick={handlestopPropagation} onSubmit={(handleSubmit)} name="confirm-deletion" className="popup__form place-form" noValidate>
        <h3 className="popup__heading">Вы уверены?</h3>
        <button type="submit" className="popup__button popup__button_default">Да</button>
        <button type="button" className="popup__button popup__button_isLoading">Удаление</button>
        <button onClick={onClose} type="button" aria-label="Закрыть" className="popup__close-btn popup__close-btn_for_add-card" />
      </form>
    </div>
  );
}

export default ConfirmDeletionPopup;
