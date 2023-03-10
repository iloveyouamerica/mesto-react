import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

function App() {

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <Main />
        <Footer />
        <PopupWithForm title="Редактировать профиль" name="profile-edit">
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
        <PopupWithForm title="Новое место" name="card-add">
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
        <PopupWithForm title="Обновить аватар" name="avatar-edit">
          <label>
            <input type="url" name="link" className="form__input" id="input-avatar-link" placeholder="Ссылка на аватар" required />
            <span className="form__error-message input-avatar-link-error"></span>
          </label>
          <button type="submit" className="form__submit">Сохранить</button>
        </PopupWithForm>
        <PopupWithForm title="Вы уверены?" name="confirm">
          <button type="submit" className="form__submit">Да</button>
        </PopupWithForm>
        <ImagePopup />
      </div>
      {/* <!-- popup редактирование profile -->
      {<div className="popup" id="popup-edit">
        <div className="popup__container">
          <button type="button" className="popup__close-btn button"></button>
          <form method="POST" name="profile-edit" className="popup__form form" id="form-profile-edit" noValidate>
            <h3 className="form__title">Редактировать профиль</h3>
            <label>
              <input type="text" name="username" className="form__input" id="input-name" placeholder="Имя" minLength="2" maxLength="40" required />
              <span className="form__error-message input-name-error"></span>
            </label>
            <label>
              <input type="text" name="userinfo" className="form__input" id="input-about" placeholder="О себе" minLength="2" maxLength="200" required />
              <span className="form__error-message input-about-error"></span>
            </label>
            <button type="submit" className="form__submit">Сохранить</button>
          </form>
        </div>
      </div>
      <!-- popup добавление карточек -->
      <div className="popup" id="popup-add">
        <div className="popup__container">
          <button type="button" className="popup__close-btn button"></button>
          <form method="POST" name="card-add" className="popup__form form" id="form-card-add" noValidate>
            <h3 className="form__title">Новое место</h3>
            <label>
              <input type="text" name="name" className="form__input" id="input-place-name" placeholder="Название" minLength="2" maxLength="30" required />
              <span className="form__error-message input-place-name-error"></span>
            </label>
            <label>
              <input type="url" name="link" className="form__input" id="input-place-link" placeholder="Ссылка на картинку" required />
              <span className="form__error-message input-place-link-error"></span>
            </label>
            <button type="submit" className="form__submit">Создать</button>
          </form>
        </div>
      </div>
      <!-- popup обновления аватара -->
      <div className="popup" id="popup-avatar-edit">
        <div className="popup__container">
          <button type="button" className="popup__close-btn button"></button>
          <form method="POST" name="avatar-edit" className="popup__form form" id="form-avatar-edit" noValidate>
            <h3 className="form__title">Обновить аватар</h3>
            <label>
              <input type="url" name="link" className="form__input" id="input-avatar-link" placeholder="Ссылка на аватар" required />
              <span className="form__error-message input-avatar-link-error"></span>
            </label>
            <button type="submit" className="form__submit">Сохранить</button>
          </form>
        </div>
      </div>
      <!-- popup подтверждения (удаление карточки) -->
      <div className="popup" id="popup-confirm">
        <div className="popup__container">
          <button type="button" className="popup__close-btn button"></button>
          <form method="POST" name="card-delete" className="popup__form form" noValidate>
            <h3 className="form__title form__title_confirm">Вы уверены?</h3>
            <button type="submit" className="form__submit">Да</button>
          </form>
        </div>
      </div>} */}
      {/* <!-- popup просмотра фотографий --> */}
      {/* <div className="popup popup_opacity_dark" id="popup-image-view">
        <div className="popup__container">
          <button type="button" className="popup__close-btn button" id="close-popup-image-view"></button>
          <figure className="view-image">
            <img src="#" alt="" className="view-image__image" />
            <figcaption className="view-image__title"></figcaption>
          </figure>
        </div>
      </div> */}
      {/* <!-- template cards --> */}
      <template id="template-card">
        <li className="elements__list-item">
          <article className="elements__card card">
            <button type="button" className="card__delete button" aria-label="Удалить карточку"></button>
            <img src="#" alt="" className="card__image" />
            <div className="card__description">
              <h2 className="card__title"></h2>
              <div className="card__like-container">
                <button type="button" className="card__like" aria-label="Поставить лайк"></button>
                <p className="card__like-counter"></p>
              </div>
            </div>
          </article>
        </li>
      </template>
    </div>
  );
}

export default App;