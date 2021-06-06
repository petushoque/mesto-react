import React, { useEffect } from 'react';
import { useState } from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import PopupWithForm from './PopupWithForm'
import ImagePopup from './ImagePopup'
import EditProfilePopup from './EditProfilePopup'
import EditAvatarPopup from './EditAvatarPopup'

import api from '../utils/api'
import CurrentUserContext from './CurrentUserContext'

function App() {

  const [currentUser, setCurrentUser] = useState('')

  useEffect(() => {
    api.getUserInfo()
    .then((result) => {
        setCurrentUser(result)
    })
    .catch((err) => {
        console.log(err);
    })
  }, [])
  
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isDeletePostPopupOpen, setIsDeletePostPopup] = useState(false)
  const [selectedCard, setSelectedCard] = useState(null)

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
    setIsDeletePostPopup(false)

    setSelectedCard(null)
  }

  function handleCardClick (card) {
    setSelectedCard(card)
  }

  function handleUpdateUser (name, about) {
    api.patchProfileInfo(name, about)
    .then((res) => setCurrentUser(res))
    closeAllPopups()
  }

  function handleUpdateUser (avatarLink) {
    api.patchProfileAvatar(avatarLink)
    .then((res) => setCurrentUser(res))
    closeAllPopups()
  }

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>    
        <Header />
        <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick}/>
        <Footer />

        <PopupWithForm name='add-post' title='Новое место' isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
          <input className="popup__input popup__input_textarea_signature" id="input-signature" name="signature" type="text" placeholder="Название" required minLength="2" maxLength="30" />
          <span className="popup__input-error input-signature-error"></span>
          <input className="popup__input popup__input_textarea_picture" id="input-picture" name="picture" type="url" placeholder="Ссылка на картинку" required />
          <span className="popup__input-error input-picture-error"></span>
        </PopupWithForm>

        <EditProfilePopup 
          isOpen={isEditProfilePopupOpen} 
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}/>

        <EditAvatarPopup 
          isOpen={isEditAvatarPopupOpen} 
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateUser}/>

        <PopupWithForm name='delete-post' title='Вы уверены?' isOpen={isDeletePostPopupOpen} onClose={closeAllPopups}>
        </PopupWithForm> 
             
        <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
/*
<section class="popup popup_type_delete-post">
<div class="popup__container">
  <h2 class="popup__title popup__title_small">Вы уверены?</h2>
  <form name="deletepost">
    <button class="popup__save-button popup__save-button_active" type="submit">Да</button>
  </form>
  <button class="popup__close-button popup__close-button_type_delete-post" type="button"></button>
</div>
</section>
*/