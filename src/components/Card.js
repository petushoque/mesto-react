function Card (props) {
    return(
        <article className="card">
          <img className="card__picture" src={props.link} alt={props.name} />
          <div className="card__info">
            <h2 className="card__signature">{props.name}</h2>
            <div className="card__like-section">
              <button className="card__like" type="button"></button>
              <p className="card__like-counter">0</p>
            </div>
          </div>
          <button className="card__delete" type="button">
          </button>
        </article>
    )
}

export default Card;