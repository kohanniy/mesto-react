import React from 'react';
import PopupWithForm from './PopupWithForm';
import { useFormAndValidation } from '../hooks/useFormAndValidation';


function EditProfilePopup({ isOpen, onClose, onUpdateUser, isLoading }) {
  const { values, handleChange, errors, isValid, resetForm } = useFormAndValidation();

  React.useEffect(() => {
    resetForm();
  }, [isOpen, resetForm]);


  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser(values);
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onSubmit={handleSubmit}
      name="edit-profile"
      onClose={onClose}
      title="Редактировать профиль"
      buttonText={isLoading ? 'Сохранение...' : 'Сохранить'}
      isDisabled={!isValid}
    >
      <input
        onChange={handleChange}
        value={values.name || ''}
        id="username-input"
        type="text"
        name="name"
        className="popup__input"
        placeholder="Валентин Петров"
        minLength="2" maxLength="40" required
      />
      <span
        id="username-input-error"
        className="popup__input-error">
          {errors.name || ''}
        </span>
      <input
        onChange={handleChange}
        value={values.about || ''}
        id="activity-input"
        type="text"
        name="about"
        className="popup__input"
        placeholder="Род занятий. Например, программист"
        minLength="2" maxLength="200" required
      />
      <span
        id="activity-input-error"
        className="popup__input-error">
          {errors.about || ''}
        </span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
