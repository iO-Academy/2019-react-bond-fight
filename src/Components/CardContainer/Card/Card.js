import React from 'react';
import './Card.css'

class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            film: this.props.selectedFilm
        }
    }

    render() {

        return(
            <article className="card">
                <img src={this.state.film.image}/>
                <h2>{this.state.film.name}</h2>
                <h4 className="year">{this.state.film.release_date}</h4>
            </article>
        )
    }
}

export default Card