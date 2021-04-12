function ImagePopup (props) {
    const closePopup = props.onClose;
    const card = props.card;
    return(
        <section className={card ? `popup popup_type_image popup_active` : `popup popup_type_image`}>
                <div className="popup__image-container">
                <img className="popup__big-image" src={card ? card.target.currentSrc : ""} alt={card ? card.target.alt : ""} />
                <button className="popup__close-button popup__close-button_type_image" onClick={closePopup} type="button"></button>
                <p className="popup__big-image-signature">{card ? card.target.alt : ""}</p>
            </div>
        </section>
    )
}

export default ImagePopup