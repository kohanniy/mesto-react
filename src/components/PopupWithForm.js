function PopupWithForm(props) {
  return (
      <div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : 'popup_closed'}`}>
        <form onSubmit={props.onSubmit} name={props.name} className="popup__form place-form" noValidate>
          <h3 className="popup__heading">{props.title}</h3>
          {props.children}
          <button type="submit" className="popup__button popup__button_default popup__button_disabled" disabled>{props.defaultButton}</button>
          <button type="button" className="popup__button popup__button_isLoading">{props.loadingButton}</button>
          <button onClick={props.onClose} type="button" aria-label="Закрыть" className="popup__close-btn popup__close-btn_for_add-card" />
        </form>
      </div>
  );
}

export default PopupWithForm;
