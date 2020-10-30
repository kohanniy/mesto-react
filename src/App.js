import logo from './images/logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={logo} alt="Логотип" className="header__logo" />
      </header>
      <main className="main-content">
        <section className="profile">
          <div className="profile__img-container">
            <img className="profile__img" src="#" alt="аватар пользователя" />
            <button className="profile__avatar-btn" type="button" aria-label="Редактировать аватар"></button>
          </div>
          <div className="profile__data">
            <h1 className="profile__name">Жак-Ив Кусто</h1>
            <p className="profile__description">Исследователь океана</p>
            <button type="button" aria-label="Изменить информацию о себе" className="profile__edit-btn"></button>
          </div>
          <button type="button" aria-label="Добавить фото" className="profile__add-btn"></button>
        </section>
        <section className="cards">
          <ul className="cards__list">

          </ul>
        </section>
      </main>
      <footer className="footer">
        <p className="footer__copyright">&copy; 2020 Mesto Russia</p>
      </footer>
      <div className="popup popup_type_edit-profile">
        <form name="user" method="post" className="popup__form user-form" novalidate>
          <h3 className="popup__heading">Редактировать профиль</h3>
          <input id="username-input" type="text" name="name" className="popup__input username" placeholder="Валентин Петров" minlength="2" maxlength="40" required />
          <span id="username-input-error" className="popup__input-error"></span>
          <input id="activity-input" type="text" name="about" className="popup__input activity" placeholder="Род занятий. Например, программист" minlength="2" maxlength="200" required />
          <span id="activity-input-error" className="popup__input-error"></span>
          <button type="submit" className="popup__button popup__button_default">Сохранить</button>
          <button type="button" className="popup__button popup__button_isLoading">Сохранение...</button>
          <button type="button" aria-label="Закрыть" className="popup__close-btn popup__close-btn_for_edit-profile"></button>
        </form>
      </div>
      <div className="popup popup_type_add-card">
        <form name="place" method="POST" className="popup__form place-form" novalidate>
          <h3 className="popup__heading">Новое место</h3>
          <input id="place-name-input" type="text" name="name" className="popup__input place-name" placeholder="Название" minlength="1" maxlength="30" required />
          <span id="place-name-input-error" className="popup__input-error"></span>
          <input id="picture-link-input" type="url" name="link" className="popup__input picture-link" placeholder="Ссылка на картинку" required />
          <span id="picture-link-input-error" className="popup__input-error"></span>
          <button type="submit" className="popup__button popup__button_default popup__button_disabled" disabled>Создать</button>
          <button type="button" className="popup__button popup__button_isLoading">Сохранение...</button>
          <button type="button" aria-label="Закрыть" className="popup__close-btn popup__close-btn_for_add-card"></button>
        </form>
      </div>
      <div className="popup popup_type_view-pic">
        <div className="popup__container">
          <figure className="popup__pic-wrap">
            <img alt="#" src="#" className="popup__pic" />
            <figcaption className="popup__pic-caption"></figcaption>
          </figure>
          <button type="button" aria-label="Закрыть" className="popup__close-btn popup__close-btn_for_view-pic"></button>
        </div>
      </div>
      <div className="popup popup_type_confirm-deletion">
        <div className="popup__container popup__container_card-deletion">
          <h3 className="popup__heading popup__heading_card-deletion">Вы уверены?</h3>
          <button type="submit" className="popup__button popup__button_default">Да</button>
          <button type="button" className="popup__button popup__button_isLoading">Удаление...</button>
          <button type="button" aria-label="Закрыть" className="popup__close-btn"></button>
        </div>
      </div>
      <div className="popup popup_type_update-avatar">
        <form name="avatar" method="post" className="popup__form place-form" novalidate>
          <h3 className="popup__heading">Обновить аватар</h3>
          <input id="avatar-link-input" type="url" name="avatar" className="popup__input avatar-link" placeholder="Ссылка на аватар" required />
          <span id="avatar-link-input-error" className="popup__input-error"></span>
          <button type="submit" className="popup__button popup__button_default popup__button_disabled">Сохранить</button>
          <button type="button" className="popup__button popup__button_isLoading">Сохранение...</button>
          <button type="button" aria-label="Закрыть" className="popup__close-btn popup__close-btn_for_add-card"></button>
        </form>
      </div>
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
    </div>
  );
}

export default App;
