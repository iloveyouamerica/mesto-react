// компонент ImagePopup (для просмотра большой картинки)

function ImagePopup() {
  return (
    <div className="popup popup_opacity_dark" id="popup-image-view">
      <div className="popup__container">
        <button type="button" className="popup__close-btn button" id="close-popup-image-view"></button>
        <figure className="view-image">
          <img src="#" alt="" className="view-image__image" />
          <figcaption className="view-image__title"></figcaption>
        </figure>
      </div>
    </div>
  );
}

export default ImagePopup;