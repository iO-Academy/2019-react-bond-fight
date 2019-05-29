import React from 'react'
import './CardContainer.css'
import Card from "./Card/Card";

class CardContainer extends React.Component {
    render () {
        return (
            <section className="cardContainer">
                <Card selectedFilms={{"_id":"5cee81d223702b8178b6741b","name":"Live and Let Die","release_date":"1973-07-05","image":"https://image.tmdb.org/t/p/w500/p34OScaro2KdISrT4EMfeh1aS0E.jpg"}}/>
                <div>VS</div>
                <Card selectedFilms={{"_id":"5cee81d223702b8178b6741e","name":"Goldfinger","release_date":"1964-09-17","image":"https://image.tmdb.org/t/p/w500/vBNbFU3OS6okJIQBOos1aZXpy2Z.jpg"}}/>
            </section>
        )
    }
}

export default CardContainer