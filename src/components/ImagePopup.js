function ImagePopup() {
  return (
    <div className="popup popup_type_view-pic">
      <div className="popup__container">
        <figure className="popup__pic-wrap">
          <img alt="#" src="#" className="popup__pic" />
          <figcaption className="popup__pic-caption"></figcaption>
        </figure>
        <button type="button" aria-label="Закрыть" className="popup__close-btn popup__close-btn_for_view-pic"></button>
      </div>
    </div>
  );
}

export default ImagePopup;
