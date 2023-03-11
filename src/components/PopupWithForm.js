/* Задание: "Вынесите общий компонент попапов
Создайте компонент PopupWithForm и используйте его, чтобы вынести общий код следующих попапов:
«Редактировать профиль»
«Новое место»
«Обновить аватар»
«Вы уверены?»" */

// общий компонет попапов с формой

function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <button type="button" className="popup__close-btn button" onClick={props.onClose}></button>
        <form method="POST" name={props.name} className="popup__form form" id={`form-${props.name}`} noValidate>
          <h3 className="form__title">{props.title}</h3>
          {props.children}
          {/* <label>
            <input type="text" name="username" className="form__input" id="input-name" placeholder="Имя" minLength="2" maxLength="40" required />
            <span className="form__error-message input-name-error"></span>
          </label>
          <label>
            <input type="text" name="userinfo" className="form__input" id="input-about" placeholder="О себе" minLength="2" maxLength="200" required />
            <span className="form__error-message input-about-error"></span>
          </label>
          <button type="submit" className="form__submit">Сохранить</button> */}
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;