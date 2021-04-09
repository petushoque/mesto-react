function Main () {
    return (
        <main className="main">
    
            <section className="profile">
                <div className="profile__avatar" onClick={handleEditAvatarClick}></div>  
                <div className="profile__user">      
                    <h1 className="profile__name"></h1>
                    <button className="profile__edit-button" onClick={handleEditProfileClick} type="button"></button>
                </div>
                <p className="profile__status"></p>
                <button className="profile__add-button" onClick={handleAddPlaceClick} type="button"></button>
            </section>

            <section className="elements">
            </section>

        </main>
    )
}

function handleEditAvatarClick () {
    const editAvatarForm = document.querySelector('.popup_type_edit-avatar');
    editAvatarForm.classList.add('popup_active')
}
function handleEditProfileClick () {
    const editProfileForm = document.querySelector('.popup_type_edit-profile');
    editProfileForm.classList.add('popup_active')
}
function handleAddPlaceClick () {
    const addPostForm = document.querySelector('.popup_type_add-post');
    addPostForm.classList.add('popup_active')
}

export default Main