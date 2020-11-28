import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup({ isOpen, onClose, onUpdateUser, isLoading }) {
  const [ name, setName] = React.useState('');
  const [ description, setDescription ] = React.useState('');

  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  function handleNameInputChange(e) {
    setName(e.target.value);
  }

  function handleAboutInputChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name,
      about: description
    })
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onSubmit={handleSubmit}
      name="edit-profile"
      onClose={onClose}
      title="Редактировать профиль"
      buttonText={isLoading ? 'Сохранение...' : 'Сохранить'}
    >
      <input
        onChange={handleNameInputChange}
        value={name || ''}
        id="username-input"
        type="text"
        name="name"
        className="popup__input username"
        placeholder="Валентин Петров"
        minLength="2" maxLength="40" required
      />
      <span id="username-input-error" className="popup__input-error" />
      <input
        onChange={handleAboutInputChange}
        value={description || ''}
        id="activity-input"
        type="text"
        name="about"
        className="popup__input activity"
        placeholder="Род занятий. Например, программист"
        minLength="2" maxLength="200" required
      />
      <span id="activity-input-error" className="popup__input-error" />
    </PopupWithForm>
  );
}

export default EditProfilePopup;
