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
                {cards.map(card => (<Card key={card.id} {...card} onCardClick={props.onCardClick}/>))}
            </section>

        </main>
    )
}

export default Main