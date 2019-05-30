import React from 'react'
import './CardContainer.css'
import Card from "./Card/Card";
import GifLoader from 'react-gif-loader';
import DrEvil from '../../assets/images/DrEvil.gif'
const uniqueRandomArray = require('unique-random-array')

class CardContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            error: ''
        }

        this.getFilms()
    }

    getFilms = () => {
        fetch('http://127.0.0.1:3001/Bond_Films')
            .then(response => response.json())
            .then(json => {
                if (json.success === true) {
                    const random = uniqueRandomArray(json.data)
                    let twoRandomFilms = [random(), random()]
                    this.setState({films: json.data, selectedFilms: twoRandomFilms})
                } else {
                    this.setState({error:'Something broke'})
                }
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
                    <p>{this.state.error}</p>
                    <GifLoader
                        loading={true}
                        imageSrc={DrEvil}
                        imageStyle={overlayBlockStyle}
                        overlayBackground="rgba(0,0,0,0)"
                    />
                </div>
            )
        }
    }
}

export default CardContainer