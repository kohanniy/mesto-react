function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name}`}>
        <form name="place" method="POST" className="popup__form place-form" novalidate>
          <h3 className="popup__heading">{props.title}</h3>
          <input id="place-name-input" type="text" name="name" className="popup__input place-name" placeholder="Название" minlength="1" maxlength="30" required />
          <span id="place-name-input-error" className="popup__input-error"></span>
          <input id="picture-link-input" type="url" name="link" className="popup__input picture-link" placeholder="Ссылка на картинку" required />
          <span id="picture-link-input-error" className="popup__input-error"></span>
  <button type="submit" className="popup__button popup__button_default popup__button_disabled" disabled>{props.defaultButton}</button>
  <button type="button" className="popup__button popup__button_isLoading">{props.loadingButton}</button>
          <button type="button" aria-label="Закрыть" className="popup__close-btn popup__close-btn_for_add-card"></button>
        </form>
      </div>
  );
}

export default PopupWithForm;
