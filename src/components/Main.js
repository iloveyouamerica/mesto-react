// компонент Main

function Main(props) {

  // обработчики

  function handleEditAvatarClick() {
    const popupEditAvatar = document.querySelector('#popup-avatar-edit');
    popupEditAvatar.classList.add('popup_opened');
  }

  function handleEditProfileClick() {
    const popupEditProfile = document.querySelector('#popup-edit');
    popupEditProfile.classList.add('popup_opened');
  }

  function handleAddPlaceClick() {
    const popupAddCard = document.querySelector("#popup-add");
    popupAddCard.classList.add('popup_opened');
  }


  return(
    <main className="main">
      <section className="profile">
        <button
          type="button"
          className="profile__avatar-edit-button"
          aria-label="Редактировать аватар"
          id="avatar-edit-btn"
          onClick={handleEditAvatarClick}>
          <img src="<!--<%=require('./images/profile-info/profile-photo.jpg')%>->" alt="Аватар пользователя" className="profile__image" />
        </button>
        <div className="profile__text-wrapper">
          <h1 className="profile__name">Жак-Ив Куст{/* <!--Жак-Ив Кусто--> */}</h1>
          <button
            type="button"
            className="profile__button-edit button"
            aria-label="Редактировать профиль"
            id="edit-btn"
            onClick={handleEditProfileClick}></button>
          <p className="profile__about">Исследователь океана{/* <!--Исследователь океана--> */}</p>
        </div>
        <button 
          type="button"
          className="profile__button-add button"
          aria-label="Добавить место"
          id="add-btn"
          onClick={handleAddPlaceClick}></button>
      </section>
      <section className="elements">
        <ul className="elements__list"></ul>
      </section>
    </main>
  );
}

export default Main;