import React from 'react'
import '../comps/CharactersCard.css'

class Character extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: props.name,
            specie: props.species,
            origin: props.origin,
            image: props.image,
        }
    }

    render() {
        return (
            <div className='characterCard'>
                <img src={this.state.image} alt={this.state.name} />
                <h3>Name: {this.state.name} </h3>
                <h5>Specie: {this.state.specie} </h5>
                <h5>Origin: {this.state.origin} </h5>
            </div>
        )
    }

}

export default Character
