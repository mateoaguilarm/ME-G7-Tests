import React, { useState } from 'react'
import './PostCard.css'

function PostCard() {

    const Lorem = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil eligendi tenetur modi voluptatibus amet dolores ea, atque suscipit perferendis nam in rem adipisci ducimus ratione veniam sed, dolore iusto aliquid?'

    const [count, setCount] = useState(0)
    const Increase = () => {
        setCount( count + 1 )
    } 
    const Decrease = () => {
        setCount( count - 1 )
    } 

    return (
        <div className='bodyCard'>
            <h3 className='tCard'>Title</h3>
            <p className='descCard'> {Lorem} </p>
            <div>
                <button onClick={Decrease} className='btnsCard'>👎</button>
                <span> {count} </span>
                <button onClick={Increase} className='btnsCard'>👍</button>
            </div>
        </div>
    )
}



export default PostCard
