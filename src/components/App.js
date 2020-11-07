import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [ isEditProfilePopupOpen, setIsEditProfilePopupOpen ] = React.useState(false);
  const [ isAddCardPopupOpen, setIsAddCardPopupOpen ] = React.useState(false);
  const [ isEditAvatarPopupOpen, setIsEditAvatarPopupOpen ] = React.useState(false);
  const [ selectedCard, setSelectedCard ] = React.useState(false);

  function handleCardClick(cardData) {
    setSelectedCard(cardData);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddCardClick() {
    setIsAddCardPopupOpen(!isAddCardPopupOpen);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddCardPopupOpen(false);
    setSelectedCard(false);
  }

  return (
    <>
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddCard={handleAddCardClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        name="edit-profile"
        title="Редактировать профиль"
        defaultButton="Сохранить"
        loadingButton="Сохранение..."
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input id="username-input" type="text" name="name" className="popup__input username" placeholder="Валентин Петров" minLength="2" maxLength="40" required />
        <span id="username-input-error" className="popup__input-error"></span>
        <input id="activity-input" type="text" name="about" className="popup__input activity" placeholder="Род занятий. Например, программист" minLength="2" maxLength="200" required />
        <span id="activity-input-error" className="popup__input-error"></span>
      </PopupWithForm>
      <PopupWithForm
        name="add-card"
        title="Новое место"
        defaultButton="Создать"
        loadingButton="Сохранение..."
        isOpen={isAddCardPopupOpen}
        onClose={closeAllPopups}
      >
        <input id="place-name-input" type="text" name="name" className="popup__input place-name" placeholder="Название" minLength="1" maxLength="30" required />
        <span id="place-name-input-error" className="popup__input-error"></span>
        <input id="picture-link-input" type="url" name="link" className="popup__input picture-link" placeholder="Ссылка на картинку" required />
        <span id="picture-link-input-error" className="popup__input-error"></span>
      </PopupWithForm>
      <PopupWithForm
        name="update-avatar"
        title="Обновить аватар"
        defaultButton="Сохранить"
        loadingButton="Сохранение..."
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input id="avatar-link-input" type="url" name="avatar" className="popup__input avatar-link" placeholder="Ссылка на аватар" required />
        <span id="avatar-link-input-error" className="popup__input-error"></span>
      </PopupWithForm>
      <PopupWithForm
        name="confirm-deletion"
        title="Вы уверены?"
        defaultButton="Да"
        loadingButton="Удаление..."
      />
      <ImagePopup
        name="view-pic"
        card={selectedCard}
        onClose={closeAllPopups}
      />
    </>
  );
}

export default App;
