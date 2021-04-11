function ImagePopup (props) {
    return(
        <section className="popup popup_type_image">
                <div className="popup__image-container">
                <img className="popup__big-image" src=" " alt=" " />
                <button className="popup__close-button popup__close-button_type_image" type="button"></button>
                <p className="popup__big-image-signature"></p>
            </div>
        </section>
    )
}