import React, { useEffect } from "react";
import api from '../utils/Api';
import Card from "./Card";

// компонент Main
function Main(props) {

  const [userName, setUserName] = React.useState('');
  const [userDescription, setuserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  useEffect(() => {
    api.getUserInfo() // запрос на получение информации о пользователе
      .then((data) => {
        //console.log(data);
        setUserName(data.name);
        setuserDescription(data.about);
        setUserAvatar(data.avatar);
      })
      .catch((err) => {
        console.log(err);
      });

      api.getCards() // запрос на получение карточек
        .then((dataCards) => {
          //console.log(dataCards);
          setCards(dataCards.map((item) => ({
            cardId: item._id,
            name: item.name,
            link: item.link,
            likes: item.likes,
          })));
        })
        .catch((err) => {
          console.log(err);
        });
  }, []);

  return (
    <main className="main">
      <section className="profile">
        <button
          type="button"
          className="profile__avatar-edit-button"
          aria-label="Редактировать аватар"
          id="avatar-edit-btn"
          onClick={props.onEditAvatar}>
          <img src={userAvatar} alt="Аватар пользователя" className="profile__image" />
        </button>
        <div className="profile__text-wrapper">
          <h1 className="profile__name">{userName}{/* <!--Жак-Ив Кусто--> */}</h1>
          <button
            type="button"
            className="profile__button-edit button"
            aria-label="Редактировать профиль"
            id="edit-btn"
            onClick={props.onEditProfile}></button>
          <p className="profile__about">{userDescription}{/* <!--Исследователь океана--> */}</p>
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
        {cards.map((card) => (
          <Card key={card.cardId} name={card.name} link={card.link} likes={card.likes} />
        ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;