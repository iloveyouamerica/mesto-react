import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

function App() {

  // константы состояния для попапов

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

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

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <Main 
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={setSelectedCard}
          onClose={closeAllPopups} />
        <Footer />
        <PopupWithForm title="Редактировать профиль" name="profile-edit" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
          <label>
            <input type="text" name="username" className="form__input" id="input-name" placeholder="Имя" minLength="2" maxLength="40" required />
            <span className="form__error-message input-name-error"></span>
          </label>
          <label>
            <input type="text" name="userinfo" className="form__input" id="input-about" placeholder="О себе" minLength="2" maxLength="200" required />
            <span className="form__error-message input-about-error"></span>
          </label>
          <button type="submit" className="form__submit">Сохранить</button>
        </PopupWithForm>
        <PopupWithForm title="Новое место" name="card-add" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
          <label>
            <input type="text" name="name" className="form__input" id="input-place-name" placeholder="Название" minLength="2" maxLength="30" required />
            <span className="form__error-message input-place-name-error"></span>
          </label>
          <label>
            <input type="url" name="link" className="form__input" id="input-place-link" placeholder="Ссылка на картинку" required />
            <span className="form__error-message input-place-link-error"></span>
          </label>
          <button type="submit" className="form__submit">Создать</button>
        </PopupWithForm>
        <PopupWithForm title="Обновить аватар" name="avatar-edit" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
          <label>
            <input type="url" name="link" className="form__input" id="input-avatar-link" placeholder="Ссылка на аватар" required />
            <span className="form__error-message input-avatar-link-error"></span>
          </label>
          <button type="submit" className="form__submit">Сохранить</button>
        </PopupWithForm>
        <PopupWithForm title="Вы уверены?" name="confirm">
          <button type="submit" className="form__submit">Да</button>
        </PopupWithForm>
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </div>
  );
}

export default App;