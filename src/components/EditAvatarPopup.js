import React from 'react';
import PopupWithForm from './PopupWithForm';
import { useFormAndValidation } from '../hooks/useFormAndValidation';

function EditAvatarPopup({ isOpen, onUpdateAvatar, onClose, isLoading }) {
  const { values, handleChange, errors, isValid, resetForm } = useFormAndValidation();


  React.useEffect(() => {
    resetForm({});
  }, [isOpen, resetForm]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: values.avatar || ''
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
      isDisabled={!isValid}
    >
      <input
        id="avatar-link"
        type="url"
        name="avatar"
        className="popup__input"
        placeholder="Ссылка на аватар"
        onChange={handleChange}
        value={values.avatar || ''}
        required
      />
      <span
        id="avatar-linkerror"
        className="popup__input-error">
          {errors.avatar || ''}
        </span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
