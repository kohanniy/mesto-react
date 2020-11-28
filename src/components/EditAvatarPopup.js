import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({ isOpen, onUpdateAvatar, onClose, isLoading }) {
  const [ avatar, setAvatar ] = React.useState('');
  const currentUser = React.useContext(CurrentUserContext);
  const inputAvatarRef = React.useRef();

  React.useEffect(() => {
    setAvatar(currentUser.avatar);
  }, [currentUser, isOpen]);

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
    <PopupWithForm
      isOpen={isOpen}
      onSubmit={handleSubmit}
      name="edit-avatar"
      onClose={onClose}
      title="Обновить аватар"
      buttonText={isLoading ? 'Сохранение...' : 'Сохранить'}
    >
      <input
        id="avatar-link"
        type="url"
        name="avatar"
        className="popup__input avatar-link"
        ref={inputAvatarRef}
        placeholder="Ссылка на аватар"
        onChange={handleAvatarInputChange}
        value={avatar || ''}
        required
      />
      <span id="avatar-linkerror" className="popup__input-error" />
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
