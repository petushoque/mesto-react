import { React, useState, useEffect, useContext } from 'react'
import api from '../utils/api'
import Card from './Card'
import CurrentUserContext from './CurrentUserContext';

function Main (props) {

    const user = useContext(CurrentUserContext)

    const [cards, setCards] = useState([])

    useEffect(() => {
        
        api.getCards()
        .then((result) => {
            const data = result.map((item) => 
                ({
                    id: item._id,
                    name: item.name,
                    link: item.link,
                    owner: item.owner._id,
                    likes: item.likes,
                })
            )
            setCards(data)
        })
        .catch((err) => {
            console.log(err);
        });    
    }, [])

    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === user._id);
        if (isLiked) {
            api.deleteLikePost(card.id)
            .then((newCard) => {
                    const data = {
                            id: newCard._id,
                            name: newCard.name,
                            link: newCard.link,
                            owner: newCard.owner._id,
                            likes: newCard.likes,
                        }
                    setCards((cards) => cards.map((c) => c.id === card.id ? data : c))
            })
        }
        else {
            api.putLikePost(card.id)
            .then((newCard) => {
                const data = {
                    id: newCard._id,
                    name: newCard.name,
                    link: newCard.link,
                    owner: newCard.owner._id,
                    likes: newCard.likes,
                }
            setCards((cards) => cards.map((c) => c.id === card.id ? data : c))
        })    
        }
        //api.changeLikeCardStatus(card.id)
        //.then((res) => console.log(res))
        //api.changeLikeCardStatus(card.id, isLiked)
        //.then((newCard) => {
        //    setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
        //});
    } 

    return (
        <main className="main">
            <section className="profile">
                <div className="profile__avatar" onClick={props.onEditAvatar} style={{ backgroundImage: `url(${user.avatar})` }} ></div>  
                <div className="profile__user">      
                    <h1 className="profile__name">{user.name}</h1>
                    <button className="profile__edit-button" onClick={props.onEditProfile} type="button"></button>
                </div>
                <p className="profile__status">{user.about}</p>
                <button className="profile__add-button" onClick={props.onAddPlace} type="button"></button>
            </section>

            <section className="elements">
                {cards.map(card => (<Card key={card.id} {...card} onCardClick={props.onCardClick} onCardLike={handleCardLike}/>))}
            </section>

        </main>
    )
}

export default Main