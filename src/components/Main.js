import React from 'react';
import api from '../utils/api';
import Card from './Card';
import {rejectPromise} from '../utils/utils';
import { CurrentUserContext } from '../contexts/CurrentUserContext'

function Main({ onEditAvatar, onEditProfile, onAddCard, onCardClick }) {
 const [cards, setCards] = React.useState([]);
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    api.getInitialCards()
      .then((cardsData) => {
        setCards(cardsData);
      })
      .catch((err) => {
        rejectPromise(err);
      })
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some(like => like._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        const newCards = cards.map((c) => c._id === card._id ? newCard : c);
        setCards(newCards);
      })
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then(() => {
        const newCards = cards.filter((c) => c._id !== card._id);
        setCards(newCards);
      })
  }

  return (
    <main className="main-content">
      <section className="profile">
        <div className="profile__img-container">
          <img
            className="profile__img"
            src={currentUser.avatar}
            alt="аватар пользователя"
          />
          <button
            onClick={onEditAvatar}
            className="profile__avatar-btn"
            type="button"
            aria-label="Редактировать аватар"
          />
        </div>
        <div className="profile__data">
          <h1 className="profile__name">{currentUser.name}</h1>
          <p className="profile__description">{currentUser.about}</p>
          <button
            onClick={onEditProfile}
            type="button"
            aria-label="Изменить информацию о себе"
            className="profile__edit-btn"
          />
        </div>
        <button
          onClick={onAddCard}
          type="button"
          aria-label="Добавить фото"
          className="profile__add-btn"
        />
      </section>
      <section className="cards">
        <ul className="cards__list">
          {cards.map(card =>
            <Card
              onCardDelete={handleCardDelete}
              onCardLike={handleCardLike}
              onCardClick={onCardClick}
              key={card._id.toString()}
              cardData={card}
            />
          )}
        </ul>
      </section>
    </main>
  );
}

export default Main;
