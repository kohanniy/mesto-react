import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { handleStopPropagation } from '../utils/utils';

function EditAvatarPopup({ isOpen, onUpdateAvatar, onClose, isLoading }) {
  const [ avatar, setAvatar ] = React.useState('');
  const currentUser = React.useContext(CurrentUserContext);
  const inputAvatarRef = React.useRef();

  React.useEffect(() => {
    setAvatar(currentUser.avatar);
  }, [currentUser]);

  function handleAvatarInputChange(e) {
    setAvatar(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: inputAvatarRef.current.value
    });
  }

  return (
    <div onClick={onClose} className={`popup ${isOpen ? 'popup_opened' : 'popup_closed'}`}>
      <form onClick={handleStopPropagation} onSubmit={handleSubmit} name="edit-avatar" className="popup__form" noValidate>
        <h3 className="popup__heading">Обновить аватар</h3>
        <input
          id="avatar-link-input"
          type="url"
          name="avatar"
          className="popup__input avatar-link"
          ref={inputAvatarRef}
          placeholder="Ссылка на аватар"
          onChange={handleAvatarInputChange}
          value={avatar || ''}
          required
        />
        <span id="avatar-link-input-error" className="popup__input-error" />
        <button type="submit" className="popup__button">{isLoading ? 'Сохранение...' : 'Сохранить'}</button>
        <button onClick={onClose} type="button" aria-label="Закрыть" className="popup__close-btn" />
      </form>
    </div>
  );
}

export default EditAvatarPopup;
