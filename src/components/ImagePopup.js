function ImagePopup({name, card, onClose}) {
  return (
      <div className={`popup popup_type_${name} ${card ? 'popup_opened' : 'popup_closed'}`}>
        <div className="popup__container">
          <figure className="popup__pic-wrap">
            <img alt={card.name} src={card.link} className="popup__pic" />
            <figcaption className="popup__pic-caption">{card.name}</figcaption>
          </figure>
          <button onClick={onClose} type="button" aria-label="Закрыть" className="popup__close-btn popup__close-btn_for_view-pic" />
        </div>
      </div>
  );
}

export default ImagePopup;
