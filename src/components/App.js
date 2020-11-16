import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import {rejectPromise} from '../utils/utils';
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';

function App() {
  const [ isEditProfilePopupOpen, setIsEditProfilePopupOpen ] = React.useState(false);
  const [ isAddCardPopupOpen, setIsAddCardPopupOpen ] = React.useState(false);
  const [ isEditAvatarPopupOpen, setIsEditAvatarPopupOpen ] = React.useState(false);
  const [ selectedCard, setSelectedCard ] = React.useState(false);
  const [ currentUser, setCurrentUser ] = React.useState('');

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

  function handleUpdateUser({name, about}) {
    api.setUserInfo({name, about})
      .then((newUserData) => {
        setCurrentUser(newUserData);
        closeAllPopups();
      })
      .catch((err) => {
        rejectPromise(err);
      })
  }

  React.useEffect(() => {
    api.getUserInfo()
      .then((userData) => {
        setCurrentUser(userData)
      })
      .catch((err) => {
        rejectPromise(err);
      })
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddCard={handleAddCardClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <EditProfilePopup
      isOpen={isEditProfilePopupOpen}
      onClose={closeAllPopups}
      onUpdateUser={handleUpdateUser}
      />
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
    </CurrentUserContext.Provider>
  );
}

export default App;
