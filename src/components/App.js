import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import {rejectPromise} from '../utils/utils';
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ConfirmDeletionPopup from './ConfirmDeletionPopup';

function App() {
  const [ isEditProfilePopupOpen, setIsEditProfilePopupOpen ] = React.useState(false);
  const [ isAddCardPopupOpen, setIsAddCardPopupOpen ] = React.useState(false);
  const [ isEditAvatarPopupOpen, setIsEditAvatarPopupOpen ] = React.useState(false);
  const [ isConfirmDeletionPopup, setIsConfirmDeletionPopup ] = React.useState(false);
  const [ selectedCard, setSelectedCard ] = React.useState(false);
  const [ currentUser, setCurrentUser ] = React.useState('');
  const [ cards, setCards ] = React.useState([]);

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
    setIsConfirmDeletionPopup(false);
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

  function handleUpdateAvatar({ avatar }) {
    api.setAvatar({avatar})
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch((err) => {
        rejectPromise(err);
      })
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(like => like._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        const newCards = cards.map((c) => c._id === card._id ? newCard : c);
        setCards(newCards);
      })
  }

  function confirmDeletionPopupOpen(cardData) {
    setIsConfirmDeletionPopup(cardData);
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then(() => {
        const newCards = cards.filter((c) => c._id !== card._id);
        setCards(newCards);
        setIsConfirmDeletionPopup(false);
      })
      .catch((err) => {
        rejectPromise(err);
      })
  }

  function handleAddPlaceSubmit({name, link}) {
    api.addCard({name, link})
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => {
        rejectPromise(err);
      })
  }

  React.useEffect(() => {
    function handlePopupsEscClose(e) {
      if (e.key === 'Escape') {
        closeAllPopups();
      }
    }
    if (isEditProfilePopupOpen || isAddCardPopupOpen || isEditAvatarPopupOpen || selectedCard || isConfirmDeletionPopup) {
      document.addEventListener('keydown', handlePopupsEscClose);
    }
    return () => document.removeEventListener('keydown', handlePopupsEscClose);
  }, [isEditProfilePopupOpen, isAddCardPopupOpen, isEditAvatarPopupOpen, selectedCard, isConfirmDeletionPopup]);

  React.useEffect(() => {
    api.getDataForRendered()
      .then((data) => {
        const [ cardsData, userData ] = data;
        setCards(cardsData);
        setCurrentUser(userData);
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
        cards={cards}
        onCardLike={handleCardLike}
        onConfirmDeletionPopupOpen={confirmDeletionPopupOpen}
      />
      <Footer />
      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        onUpdateUser={handleUpdateUser}
      />
      <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        onUpdateAvatar={handleUpdateAvatar}
      />
      <AddPlacePopup
        isOpen={isAddCardPopupOpen}
        onClose={closeAllPopups}
        onAddPlace={handleAddPlaceSubmit}
      />
      <ConfirmDeletionPopup
        isOpen={isConfirmDeletionPopup}
        onClose={closeAllPopups}
        cardDelete={handleCardDelete}
        card={selectedCard}
      />
      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />
    </CurrentUserContext.Provider>
  );
}

export default App;
