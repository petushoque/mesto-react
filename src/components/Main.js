import { useState, useEffect } from 'react'
import api from '../utils/Api'

function Main (props) {

    const [userName, setUserName] = useState('');
    const [userDescription, setUserDescription] = useState('');
    const [userAvatar, setUserAvatar] = useState('');

    const [cards, setCards] = useState([])

    useEffect(() => {
        api.getUserInfo()
        .then((result) => {
            setUserName(result.name);
            setUserDescription(result.about);
            setUserAvatar(result.avatar);
        })
        .catch((err) => {
            console.log(err);
        });
    })

    useEffect(() => {
        api.getCards()
        .then((result) => {
        console.log(result)
    })
    .catch((err) => {
      console.log(err);
    });
    })

    return (
        <main className="main">
    
            <section className="profile">
                <div className="profile__avatar" onClick={props.onEditAvatar} style={{ backgroundImage: `url(${userAvatar})` }} ></div>  
                <div className="profile__user">      
                    <h1 className="profile__name">{userName}</h1>
                    <button className="profile__edit-button" onClick={props.onEditProfile} type="button"></button>
                </div>
                <p className="profile__status">{userDescription}</p>
                <button className="profile__add-button" onClick={props.onAddPlace} type="button"></button>
            </section>

            <section className="elements">
            </section>

        </main>
    )
}


export default Main