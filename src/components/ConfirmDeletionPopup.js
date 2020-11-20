import React from 'react';
import { handleStopPropagation } from '../utils/utils';

function ConfirmDeletionPopup({ isOpen, onClose, cardDelete, isLoading }) {
  function handleSubmit(e) {
    e.preventDefault();
    cardDelete(isOpen);
  }

  return (
    <div
      onClick={onClose}
      className={`popup ${isOpen ? 'popup_opened' : 'popup_closed'}`}
    >
      <form
        onClick={handleStopPropagation}
        onSubmit={(handleSubmit)}
        name="confirm-deletion"
        className="popup__form"
        noValidate
      >
        <h3 className="popup__heading">Вы уверены?</h3>
        <button type="submit" className="popup__button">
          {isLoading ? 'Удаление...' : 'Да'}
        </button>
        <button
          onClick={onClose}
          type="button"
          aria-label="Закрыть"
          className="popup__close-btn"
        />
      </form>
    </div>
  );
}

export default ConfirmDeletionPopup;
