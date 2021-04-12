import React from 'react';
import { useState } from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import PopupWithForm from './PopupWithForm'
import ImagePopup from './ImagePopup'

function App() {

  function handleEditAvatarClick () {
    setIsEditAvatarPopupOpen(true)
  }
  function handleEditProfileClick () {
    setIsEditProfilePopupOpen(true)
  }
  function handleAddPlaceClick () {
    setIsAddPlacePopupOpen(true)
  }

  function closeAllPopups () {
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false)

    setSelectedCard(null)
  }

  function handleCardClick (card) {
    setSelectedCard(card)
  }

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  const [selectedCard, setSelectedCard] = useState(null)

  return (

    <div className="page">    
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick}/>
      <Footer />

      <PopupWithForm name='add-post' title='Новое место' isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <input className="popup__input popup__input_textarea_signature" id="input-signature" name="signature" type="text" placeholder="Название" required minLength="2" maxLength="30" />
        <span className="popup__input-error input-signature-error"></span>
        <input className="popup__input popup__input_textarea_picture" id="input-picture" name="picture" type="url" placeholder="Ссылка на картинку" required />
        <span className="popup__input-error input-picture-error"></span>
      </PopupWithForm>

      <PopupWithForm name='edit-avatar' title='Обновить аватар' isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <input className="popup__input popup__input_textarea_avatar" id="input-avatar" name="avatar" type="url" placeholder="Ссылка на картинку" required />
        <span className="popup__input-error input-avatar-error"></span>
      </PopupWithForm>

      <PopupWithForm name='edit-profile' title='Редактировать профиль' isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
      <input className="popup__input popup__input_textarea_name" id="input-name" name="username" type="text" placeholder="Введите имя" required minLength="2" maxLength="40" />
        <span className="popup__input-error input-name-error"></span>
        <input className="popup__input popup__input_textarea_status" id="input-status" name="status" type="text" placeholder="Введите статус" required minLength="2" maxLength="200" />
        <span className="popup__input-error input-status-error"></span>
      </PopupWithForm> 
             
      <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
    </div>
  );
}

export default App;