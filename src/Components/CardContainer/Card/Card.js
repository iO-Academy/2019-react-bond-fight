import React from 'react';
import './Card.css'

class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            film: this.props.selectedFilm,
            otherFilm: this.props.otherFilm
        }
    }

    componentWillReceiveProps(props) {
        this.setState({ film: props.selectedFilm, otherFilm: this.props.otherFilm });
    }

    handleClick = () => {
        let data = {
            "winnerId": this.state.film._id,
            "loserId": this.state.otherFilm._id
        }
        console.log(this)
        this.pickFavourite(data)
        this.props.filmChoice()
    }

    pickFavourite = (data) => {
        fetch('http://127.0.0.1:3001/Bond_Films', {
            method: "put",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
    }

    render() {

        return(
            <article onClick={this.handleClick} className="card">
                <img src={this.state.film.image}/>
                <h2>{this.state.film.name}</h2>
                <h4 className="year">{this.state.film.release_date}</h4>
            </article>
        )
    }
}

export default Card