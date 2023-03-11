import React, { useEffect } from "react";
import api from '../utils/Api';

// компонент Main
function Main(props) {

  const [userName, setUserName] = React.useState('');
  const [userDescription, setuserDescription] = React.useState('');
  const [userAvatar, setuserAvatar] = React.useState('');

  useEffect(() => {
    api.getUserInfo()
      .then((data) => {
        //console.log(data);
        setUserName(data.name);
        setuserDescription(data.about);
        setuserAvatar(data.avatar);
      })
      .catch((err) => {
        console.log(err);
      });
  });

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
        <ul className="elements__list"></ul>
      </section>
    </main>
  );
}

export default Main;