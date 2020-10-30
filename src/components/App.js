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

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddCardClick() {
    setIsAddCardPopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddCardPopupOpen(false);
  }

  return (
    <>
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddCard={handleAddCardClick}
      />
      <Footer />
      <PopupWithForm
        name="edit-profile"
        title="Редактировать профиль"
        defaultButton="Сохранить"
        loadingButton="Сохранение..."
        isOpen={isEditProfilePopupOpen ? 'popup_opened' : ''}
        onClose={closeAllPopups}
        children={
          <>
            <input id="username-input" type="text" name="name" className="popup__input username" placeholder="Валентин Петров" minlength="2" maxlength="40" required />
            <span id="username-input-error" className="popup__input-error"></span>
            <input id="activity-input" type="text" name="about" className="popup__input activity" placeholder="Род занятий. Например, программист" minlength="2" maxlength="200" required />
            <span id="activity-input-error" className="popup__input-error"></span>
          </>
        }
      />
      <PopupWithForm
        name="add-card"
        title="Новое место"
        defaultButton="Создать"
        loadingButton="Сохранение..."
        isOpen={isAddCardPopupOpen ? 'popup_opened' : ''}
        onClose={closeAllPopups}
        children={
          <>
            <input id="place-name-input" type="text" name="name" className="popup__input place-name" placeholder="Название" minlength="1" maxlength="30" required />
            <span id="place-name-input-error" className="popup__input-error"></span>
            <input id="picture-link-input" type="url" name="link" className="popup__input picture-link" placeholder="Ссылка на картинку" required />
            <span id="picture-link-input-error" className="popup__input-error"></span>
          </>
        }
      />
      <PopupWithForm
        name="update-avatar"
        title="Обновить аватар"
        defaultButton="Сохранить"
        loadingButton="Сохранение..."
        isOpen={isEditAvatarPopupOpen ? 'popup_opened' : ''}
        onClose={closeAllPopups}
        children={
          <>
            <input id="avatar-link-input" type="url" name="avatar" className="popup__input avatar-link" placeholder="Ссылка на аватар" required />
            <span id="avatar-link-input-error" className="popup__input-error"></span>
          </>
        }
      />
      <PopupWithForm
        name="confirm-deletion"
        title="Вы уверены?"
        defaultButton="Да"
        loadingButton="Удаление..."
      />
      <ImagePopup />
      <template id="cardItemTemplate">
        <li className="cards__item">
          <img className="cards__image" src="#" alt="#" />
          <button type="button" aria-label="Удалить" className="cards__delete-btn"></button>
          <div className="cards__rating">
            <h2 className="cards__title">#</h2>
            <div className="cards__heart-container">
              <button type="button" aria-label="Поставить лайк" className="cards__heart"></button>
              <p className="cards__hearts-number">0</p>
            </div>
          </div>
        </li>
      </template>
    </>
  );
}

export default App;
