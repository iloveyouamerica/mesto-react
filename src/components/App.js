import React, { useEffect, useState } from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import api from '../utils/Api.js';
import { CurrentUserContext } from '../contextst/currentUserContext.js';

function App() {

  // константы состояния для попапов

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  // создаём стейт currentUSer для хранения данных о пользователе (ПР11)
  const [currentUser, setCurrentUser] = useState({});

  // стейт для карточек
  const [cards, setCards] = React.useState([]);

  //создаём эффект при монтировании и вызываем api.getUserInfo для обновления стейт-переменной currentUser
  useEffect(() => {
    api.getUserInfo() // запрос на получение информации о пользователе
      .then((userInfo) => {
        //console.log(userInfo, "API");
        setCurrentUser(userInfo);
        //console.log(currentUser);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

// создаём эффект первичного монтирования карточек
  useEffect(() => {
    api.getCards() // запрос на получение карточек
      .then((dataCards) => {
        //console.log(dataCards);
        setCards(dataCards.map((item) => ({
          _id: item._id,
          name: item.name,
          link: item.link,
          likes: item.likes,
          owner: item.owner,
        })));
      })
      .catch((err) => {
        console.log(err);
      });
}, []);

  // обработчики кнопок для открытия попапов

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  // обработчик для закрытия попапов
  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  // обработчик лайка карточки
  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    //console.log(card.id); // id = ...a811
    
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, isLiked)
      .then((newCard) => { // newCard - затронутая карточка
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c)); //state - это первичный массив карточек
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // обработчик удаления карточки
  function handleCardDelete(card) {
    // отправим запрос в api на удаление карточки и получим ответ сервера - обновлённый список карточек
    api.deleteCard(card._id)
      .then(() => {
        setCards(cards.filter((c) => c._id != card._id)); // обновляем стейт cards, удаляя из нового массива нужную карточку
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <div className="wrapper">
          <Header />
          <Main 
            cards={cards}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={setSelectedCard}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
            onClose={closeAllPopups} />
          <Footer />
          <PopupWithForm
            title="Редактировать профиль"
            name="profile-edit"
            buttonText="Сохранить"
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}>
            <label>
              <input type="text" name="username" className="form__input" id="input-name" placeholder="Имя" minLength="2" maxLength="40" required />
              <span className="form__error-message input-name-error"></span>
            </label>
            <label>
              <input type="text" name="userinfo" className="form__input" id="input-about" placeholder="О себе" minLength="2" maxLength="200" required />
              <span className="form__error-message input-about-error"></span>
            </label>
          </PopupWithForm>
          <PopupWithForm
            title="Новое место"
            name="card-add"
            buttonText="Создать"
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}>
            <label>
              <input type="text" name="name" className="form__input" id="input-place-name" placeholder="Название" minLength="2" maxLength="30" required />
              <span className="form__error-message input-place-name-error"></span>
            </label>
            <label>
              <input type="url" name="link" className="form__input" id="input-place-link" placeholder="Ссылка на картинку" required />
              <span className="form__error-message input-place-link-error"></span>
            </label>
          </PopupWithForm>
          <PopupWithForm
            title="Обновить аватар"
            name="avatar-edit"
            buttonText="Сохранить"
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}>
            <label>
              <input type="url" name="link" className="form__input" id="input-avatar-link" placeholder="Ссылка на аватар" required />
              <span className="form__error-message input-avatar-link-error"></span>
            </label>
          </PopupWithForm>
          <PopupWithForm title="Вы уверены?" name="confirm" buttonText="Да"></PopupWithForm>
          <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;