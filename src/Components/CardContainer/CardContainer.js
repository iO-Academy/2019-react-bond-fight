import React from 'react'
import './CardContainer.css'
import Card from "./Card/Card";
import GifLoader from 'react-gif-loader';

class CardContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }

        this.getFilms()
    }

    getFilms = () => {
        fetch('http://127.0.0.1:3001/Bond_Films')
            .then(data => data.json())
            .then(data => {
                this.setState({films: data})
            })
    }

    render () {
        const overlayBlockStyle = {
            height: "70vh"
        }

        if(this.state.films !== undefined) {
            return (
                <section className="cardContainer">
                    <Card selectedFilm={this.state.films[0]}/>
                    <div>VS</div>
                    <Card selectedFilm={this.state.films[1]}/>
                </section>
            )
        } else {
            return (
                <div className="error">
                    <GifLoader
                        loading={true}
                        imageSrc="https://media.giphy.com/media/nbKKMfmeDknzq/giphy.gif"
                        imageStyle={overlayBlockStyle}
                        overlayBackground="rgba(0,0,0,0.5)"
                    />
                </div>
            )
        }
    }
}

export default CardContainer