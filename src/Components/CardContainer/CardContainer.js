import React from 'react'
import './CardContainer.css'
import Card from "./Card/Card";
import GifLoader from 'react-gif-loader';
const uniqueRandomArray = require('unique-random-array')

class CardContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}

        this.getFilms()
    }

    getFilms = () => {
        fetch('http://127.0.0.1:3001/Bond_Films')
            .then(data => data.json())
            .then(data => {
                const random = uniqueRandomArray(data)
                let twoRandomFilms = [random(), random()]
                this.setState({films: data, selectedFilms: twoRandomFilms})
            })
    }

    render () {
        const overlayBlockStyle = {
            height: "70vh"
        }

        if(this.state.selectedFilms !== undefined) {
            return (
                <section className="cardContainer">
                    <Card selectedFilm={this.state.selectedFilms[0]}/>
                    <div>VS</div>
                    <Card selectedFilm={this.state.selectedFilms[1]}/>
                </section>
            )
        } else {
            return (
                <div>
                    <GifLoader
                        loading={true}
                        imageSrc="https://media.giphy.com/media/nbKKMfmeDknzq/giphy.gif"
                        imageStyle={overlayBlockStyle}
                        overlayBackground="rgba(0,0,0,0)"
                    />
                </div>
            )
        }
    }
}

export default CardContainer