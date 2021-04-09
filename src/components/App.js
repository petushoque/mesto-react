import Header from './Header';
import Main from './Main'
import Footer from './Footer'

function App() {
  return (
<>
    <div className="page">
    
  <Header />
  <Main />
  <Footer />

  

  <section className="popup popup_type_edit-profile">
    <div className="popup__container">
      <h2 className="popup__title">Редактировать профиль</h2>
      <form name="profileedit" noValidate>
        <input className="popup__input popup__input_textarea_name" id="input-name" name="username" type="text" placeholder="Введите имя" required minLength="2" maxLength="40" />
        <span className="popup__input-error input-name-error"></span>
        <input className="popup__input popup__input_textarea_status" id="input-status" name="status" type="text" placeholder="Введите статус" required minLength="2" maxLength="200" />
        <span className="popup__input-error input-status-error"></span>
        <button className="popup__save-button popup__save-button_active" type="submit">Сохранить</button>
      </form>
      <button className="popup__close-button popup__close-button_type_edit-profile" type="button"></button>
    </div>
  </section>

  <section className="popup popup_type_add-post">
    <div className="popup__container">
      <h2 className="popup__title">Новое место</h2>
      <form name="addpost" noValidate>
        <input className="popup__input popup__input_textarea_signature" id="input-signature" name="signature" type="text" placeholder="Название" required minLength="2" maxLength="30" />
        <span className="popup__input-error input-signature-error"></span>
        <input className="popup__input popup__input_textarea_picture" id="input-picture" name="picture" type="url" placeholder="Ссылка на картинку" required />
        <span className="popup__input-error input-picture-error"></span>
        <button className="popup__save-button" type="submit" disabled>Создать</button>
      </form>
      <button className="popup__close-button popup__close-button_type_add-post" type="button"></button>
    </div>
  </section>

  <section className="popup popup_type_image">
    <div className="popup__image-container">
      <img className="popup__big-image" src=" " alt=" " />
      <button className="popup__close-button popup__close-button_type_image" type="button"></button>
      <p className="popup__big-image-signature"></p>
    </div>
  </section>

  <section className="popup popup_type_delete-post">
    <div className="popup__container">
      <h2 className="popup__title popup__title_small">Вы уверены?</h2>
      <form name="deletepost">
        <button className="popup__save-button popup__save-button_active" type="submit">Да</button>
      </form>
      <button className="popup__close-button popup__close-button_type_delete-post" type="button"></button>
    </div>
  </section>

  <section className="popup popup_type_edit-avatar">
    <div className="popup__container">
      <h2 className="popup__title">Обновить аватар</h2>
      <form name="editavatar" noValidate>
        <input className="popup__input popup__input_textarea_avatar" id="input-avatar" name="avatar" type="url" placeholder="Ссылка на картинку" required />
        <span className="popup__input-error input-avatar-error"></span>
        <button className="popup__save-button" type="submit">Сохранить</button>
      </form>
      <button className="popup__close-button popup__close-button_type_add-post" type="button"></button>
    </div>
  </section>

</div>

<template className="card-template">
<article className="card">
  <img className="card__picture" src=" " alt=" " />
  <div className="card__info">
    <h2 className="card__signature"></h2>
    <div className="card__like-section">
      <button className="card__like" type="button"></button>
      <p className="card__like-counter">0</p>
    </div>
  </div>
  <button className="card__delete" type="button">
  </button>
</article>
</template>  
</>

  );
}

export default App;
