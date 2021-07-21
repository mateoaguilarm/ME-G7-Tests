import React from 'react'
import '../Card/Card.css'

function Card(props) {

    // Destructuring
    const {name, adress, number, email, color} = props;

    return (
        <div className='funcCard' style={{ backgroundColor: props.color }}>
            <p className='pCard'>Name: {props.name} </p>
            <p className='pCard'>Adress: {props.adress} </p>
            <p className='pCard'>Number: {props.number} </p>
            <p className='pCard'>eMail: {props.email} </p>
        </div>
    )
}

export default Card;
