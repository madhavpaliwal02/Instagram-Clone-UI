import React from 'react'
import photo from '../../images/pp2.png'
import { useNavigate } from 'react-router-dom'

const StoryCircle = () => {

    // Use Navigate
    const nav = useNavigate()

    const handleStory = () => {
        nav("/story")
    }


    return (
        <div onClick={handleStory} className='cursor-pointer flex flex-col items-center'>
            <img className='h-16 w-16 rounded-full' src={photo} alt="/" />
            <p>Username</p>
        </div>
    )
}

export default StoryCircle