import React, { useState } from 'react'
import '../NewsAPI/Card.css'

function Card(props) {

    const imgURL = 'https://cocina-casera.com/wp-content/uploads/2018/03/mochi.jpg'

    const [ likes, setLikes ] = useState(0);
    
    const handleLikes = () => setLikes(likes + 1)

    return (
        <div className='newsCard' style={{ backgroundColor: props.color }}>
            <img className='imgCard' src={imgURL}/>
            <h4 className='titleCard'> {props.title} </h4>
            <p className='descCard'> {props.desc} </p>
            <a className='a-Card' href='/Mochis'> See more </a>
            <button className='likeBtn' type="submit" onClick={handleLikes}>Like👍</button>
            <span>Likes:{likes}</span>
        </div>
    )
}

export default Card
