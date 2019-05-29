import React from 'react';
import './Card.css'

class Card extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
        selectedFilms: this.props.selectedFilms
        }
    }

    render() {

        return(
            <div className="card">
                <img src={this.state.selectedFilms.image}/>
                <h2>{this.state.selectedFilms.name}</h2>
                <h4>{this.state.selectedFilms.release_date}</h4>
            </div>
        )
    }
}

export default Card