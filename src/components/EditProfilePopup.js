import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { handlestopPropagation } from '../utils/utils';

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {

  const [ name, setName] = React.useState('');
  const [ description, setDescription ] = React.useState('');

  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

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
    <div onClick={onClose} className={`popup ${isOpen ? 'popup_opened' : 'popup_closed'}`}>
      <form
        onClick={handlestopPropagation}
        onSubmit={handleSubmit}
        name="edit-profile"
        className="popup__form"
        noValidate
      >
        <h3 className="popup__heading">Редактировать профиль</h3>
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
        <button type="submit" className="popup__button popup__button_default">Сохранить</button>
        <button type="button" className="popup__button popup__button_isLoading">Сохранение...</button>
        <button onClick={onClose} type="button" aria-label="Закрыть" className="popup__close-btn" />
      </form>
    </div>
  );
}

export default EditProfilePopup;
