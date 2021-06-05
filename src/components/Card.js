import { React, useContext} from 'react'
import CurrentUserContext from './CurrentUserContext'

function Card (props) {

  const user = useContext(CurrentUserContext)

  const isOwn = (props.owner === user._id);
  const cardDeleteButtonClassName = (`card__delete ${isOwn ? 'card__delete-button_visible' : 'card__delete-button_hidden'}`);

  const isLiked = props.likes.some(i => i._id === user._id);

  //будущая переменная, для отображения лайкнутой и не лайкнутой карточки
  //const cardLikeButtonClassName = `...`; 

  function handleClick() {
    props.onCardClick(props);
  }

  function handleLikeClick() {
    props.onCardLike(props)
  }
    return(
      
        <article className="card">
          <img className="card__picture" src={props.link} alt={props.name} onClick={handleClick}/>
          <div className="card__info">
            <h2 className="card__signature">{props.name}</h2>
            <div className="card__like-section">
              <button className="card__like" type="button" onClick={handleLikeClick}></button>
              <p className="card__like-counter">{props.likes.length}</p>
            </div>
          </div>
          <button className="card__delete" type="button">
          </button>
        </article>
    )
}

export default Card;