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
                {/*<img src={this.state.selectedFilms.image}/>*/}
                {/*<p>Name:{this.state.selectedFilms.name}</p>*/}
                {/*<p>Original Release:{this.state.selectedFilms.release_date}</p>*/}
                <img src="https://i.pinimg.com/236x/3f/0c/29/3f0c295559dea2a0ddca6c37798626c8--image-gif-nicolas-cage.jpg"/>
                <p>Name:1 </p>
                <p>Original Release:2</p>
            </div>
        )
    }
}

export default Card