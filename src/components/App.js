import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm'

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
      <PopupWithForm
        name="edit-profile"
        title="Редактировать профиль"
        defaultButton="Сохранить"
        loadingButton="Сохранение..."
      />
      <PopupWithForm
        name="add-card"
        title="Новое место"
        defaultButton="Создать"
        loadingButton="Сохранение..."
      />
      <PopupWithForm
        name="update-avatar"
        title="Обновить аватар"
        defaultButton="Сохранить"
        loadingButton="Сохранение..."
      />
      <PopupWithForm
        name="confirm-deletion"
        title="Вы уверены?"
        defaultButton="Да"
        loadingButton="Удаление..."
      />


      <div className="popup popup_type_view-pic">
        <div className="popup__container">
          <figure className="popup__pic-wrap">
            <img alt="#" src="#" className="popup__pic" />
            <figcaption className="popup__pic-caption"></figcaption>
          </figure>
          <button type="button" aria-label="Закрыть" className="popup__close-btn popup__close-btn_for_view-pic"></button>
        </div>
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
