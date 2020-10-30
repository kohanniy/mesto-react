function Main() {
  function handleEditAvatarClick() {
    document.querySelector('.popup_type_update-avatar').classList.add('popup_opened');
  }

  function handleEditProfileClick() {
    document.querySelector('.popup_type_edit-profile').classList.add('popup_opened');
  }

  function handleAddCardClick() {
    document.querySelector('.popup_type_add-card').classList.add('popup_opened');
  }

  return (
    <main className="main-content">
      <section className="profile">
        <div className="profile__img-container">
          <img className="profile__img" src="#" alt="аватар пользователя" />
          <button onClick={handleEditAvatarClick} className="profile__avatar-btn" type="button" aria-label="Редактировать аватар"></button>
        </div>
        <div className="profile__data">
          <h1 className="profile__name">Жак-Ив Кусто</h1>
          <p className="profile__description">Исследователь океана</p>
          <button onClick={handleEditProfileClick} type="button" aria-label="Изменить информацию о себе" className="profile__edit-btn"></button>
        </div>
        <button onClick={handleAddCardClick} type="button" aria-label="Добавить фото" className="profile__add-btn"></button>
      </section>
      <section className="cards">
        <ul className="cards__list">

        </ul>
      </section>
    </main>
  );
}

export default Main;
