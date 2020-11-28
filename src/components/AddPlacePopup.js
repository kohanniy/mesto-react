import React from 'react';
import PopupWithForm from './PopupWithForm';

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
    <PopupWithForm
      isOpen={isOpen}
      onSubmit={handleSubmit}
      name="add-card"
      onClose={onClose}
      title="Новое место"
      buttonText={isLoading ? 'Сохранение...' : 'Создать'}
    >
      <input
        onChange={handlePlaceNameInputChange}
        id="place-name"
        type="text"
        name="place-name"
        className="popup__input"
        placeholder="Название"
        minLength="1"
        maxLength="30"
        value={name || ''}
        required
      />
      <span id="place-name-error" className="popup__input-error" />
      <input
        onChange={handlePlaceLinkInputChange}
        id="picture-link"
        type="url"
        name="link"
        className="popup__input"
        placeholder="Ссылка на картинку"
        value={link || ''}
        required
      />
      <span id="picture-link-error" className="popup__input-error" />
    </PopupWithForm>
  );
}

export default AddPlacePopup;
