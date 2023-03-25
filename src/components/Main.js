import React, { useState, useEffect } from "react";
import { CurrentUserContext } from "../contextst/currentUserContext";
import api from '../utils/Api';
import Card from "./Card";

// компонент Main
function Main(props) {

  /*const [userName, setUserName] = useState('');
  const [userDescription, setuserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');*/
  //const [cards, setCards] = useState([]);

  /* useEffect(() => {
      api.getCards() // запрос на получение карточек
        .then((dataCards) => {
          //console.log(dataCards);
          setCards(dataCards.map((item) => ({
            cardId: item._id,
            name: item.name,
            link: item.link,
            likes: item.likes,
            owner: item.owner,
          })));
        })
        .catch((err) => {
          console.log(err);
        });
  }, []); */

  // подписываемся на контекст CurrentUserContext
  const currentUser = React.useContext(CurrentUserContext);
  //console.log(currentUser);

  return (
    <main className="main">
      <section className="profile">
        <button
          type="button"
          className="profile__avatar-edit-button"
          aria-label="Редактировать аватар"
          id="avatar-edit-btn"
          onClick={props.onEditAvatar}>
          <img src={currentUser.avatar} alt="Аватар пользователя" className="profile__image" />
        </button>
        <div className="profile__text-wrapper">
          <h1 className="profile__name">{currentUser.name}{/* <!--Жак-Ив Кусто--> */}</h1>
          <button
            type="button"
            className="profile__button-edit button"
            aria-label="Редактировать профиль"
            id="edit-btn"
            onClick={props.onEditProfile}></button>
          <p className="profile__about">{currentUser.about}{/* <!--Исследователь океана--> */}</p>
        </div>
        <button 
          type="button"
          className="profile__button-add button"
          aria-label="Добавить место"
          id="add-btn"
          onClick={props.onAddPlace}></button>
      </section>
      <section className="elements">
        <ul className="elements__list">
          {props.cards.map((card) => ( // props.cards - это проброшенный пропс всех первичных карточек от api
            <Card 
              key={card._id}
              _id={card._id}
              owner={card.owner}
              name={card.name}
              link={card.link}
              likes={card.likes}
              onCardClick={props.onCardClick}
              onCardLike={props.onCardLike}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;