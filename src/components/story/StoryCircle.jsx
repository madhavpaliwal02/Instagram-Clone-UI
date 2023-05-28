import React from 'react'
import photo from '../../images/Pal3.jpg'

const StoryCircle = () => {
    return (
        <div className='cursor-pointer flex flex-col items-center'>
            <img className='h-16 w-16 rounded-full' src={photo} alt="/" />
            <p>Username</p>
        </div>
    )
}

export default StoryCircle