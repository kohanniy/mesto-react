import React from 'react';
import api from '../utils/api';
import Card from './Card';
import {rejectPromise} from '../utils/utils';

function Main({ onEditAvatar, onEditProfile, onAddCard, onCardClick }) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo()
      .then((userData) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
      })
      .catch((err) => {
        rejectPromise(err);
      })
  }, []);

  React.useEffect(() => {
    api.getInitialCards()
      .then((cardsData) => {
        setCards(cardsData);
      })
      .catch((err) => {
        rejectPromise(err);
      })
  }, []);

  return (
    <main className="main-content">
      <section className="profile">
        <div className="profile__img-container">
          <img className="profile__img" src={userAvatar} alt="аватар пользователя" />
          <button onClick={onEditAvatar} className="profile__avatar-btn" type="button" aria-label="Редактировать аватар"></button>
        </div>
        <div className="profile__data">
          <h1 className="profile__name">{userName}</h1>
          <p className="profile__description">{userDescription}</p>
          <button onClick={onEditProfile} type="button" aria-label="Изменить информацию о себе" className="profile__edit-btn"></button>
        </div>
        <button onClick={onAddCard} type="button" aria-label="Добавить фото" className="profile__add-btn"></button>
      </section>
      <section className="cards">
        <ul className="cards__list">
          {cards.map(card =>
            <Card onCardClick={onCardClick} key={card._id.toString()} cardData={card} />
          )}
        </ul>
      </section>
    </main>
  );
}

export default Main;
