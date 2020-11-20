import React from 'react';
import { handleStopPropagation } from '../utils/utils';

function AddPlacePopup({ isOpen, onClose, onAddPlace, isLoading }) {
  const [ name, setName ] = React.useState('');
  const [ link, setLink ] = React.useState('');

  function handlePlaceNameInputChange(e) {
    setName(e.target.value);
  }

  function handlePlaceLinkInputChange(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({ name, link });
  }

  return (
    <div
      onClick={onClose}
      className={`popup ${isOpen ? 'popup_opened' : 'popup_closed'}`}
    >
      <form
        onClick={handleStopPropagation}
        onSubmit={handleSubmit}
        name="add-card"
        className="popup__form"
        noValidate
      >
        <h3 className="popup__heading">Новое место</h3>
        <input
          onChange={handlePlaceNameInputChange}
          id="place-name-input"
          type="text"
          name="place-name"
          className="popup__input"
          placeholder="Название"
          minLength="1"
          maxLength="30"
          required
        />
        <span id="place-name-input-error" className="popup__input-error" />
        <input
          onChange={handlePlaceLinkInputChange}
          id="picture-link-input"
          type="url"
          name="link"
          className="popup__input"
          placeholder="Ссылка на картинку"
          required
        />
        <span id="picture-link-input-error" className="popup__input-error" />
        <button type="submit" className="popup__button">
          {isLoading ? 'Сохранение...' : 'Создать'}
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

export default AddPlacePopup;
