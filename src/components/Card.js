
// компонент Card

function Card(card) {

  // обработчик клика по картинке карточки
  function handleClick() {
    card.onCardClick(card);
    //console.log(card);
  }

  return (
    <li className="elements__list-item">
      <article className="elements__card card">
        <button type="button" className="card__delete button" aria-label="Удалить карточку"></button>
        <img src={card.link} alt={card.name} className="card__image" onClick={handleClick} />
        <div className="card__description">
          <h2 className="card__title">{card.name}</h2>
          <div className="card__like-container">
            <button type="button" className="card__like" aria-label="Поставить лайк"></button>
            <p className="card__like-counter">{card.likes.length}</p>
          </div>
        </div>
      </article>
    </li>
  );
}

export default Card;