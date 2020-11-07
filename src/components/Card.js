function Card({cardData, onCardClick}) {
  function handleClick() {
    onCardClick(cardData);
  }

  return (
    <li className="cards__item">
      <img onClick={handleClick} className="cards__image" src={cardData.link} alt={cardData.name} />
      <button type="button" aria-label="Удалить" className="cards__delete-btn"></button>
      <div className="cards__rating">
        <h2 className="cards__title">{cardData.name}</h2>
        <div className="cards__heart-container">
          <button type="button" aria-label="Поставить лайк" className="cards__heart"></button>
          <p className="cards__hearts-number">{cardData.likes.length}</p>
        </div>
      </div>
    </li>
  )
}

export default Card;
