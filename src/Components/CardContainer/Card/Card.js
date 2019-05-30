import React from 'react';
import './Card.css'

class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movie: this.props.selectedFilm
        }
    }

    render() {

        return(
            <article className="card">
                <img src={this.state.movie.image}/>
                <h2>{this.state.movie.name}</h2>
                <h4 className="year">{this.state.movie.release_date}</h4>
            </article>
        )
    }
}

export default Card