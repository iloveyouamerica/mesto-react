
// компонент Card

function Card(props) {
  return (
    <li className="elements__list-item">
      <article className="elements__card card">
        <button type="button" className="card__delete button" aria-label="Удалить карточку"></button>
        <img src={props.link} alt={props.name} className="card__image" />
        <div className="card__description">
          <h2 className="card__title">{props.name}</h2>
          <div className="card__like-container">
            <button type="button" className="card__like" aria-label="Поставить лайк"></button>
            <p className="card__like-counter">{props.likes.length}</p>
          </div>
        </div>
      </article>
    </li>
  );
}

export default Card;