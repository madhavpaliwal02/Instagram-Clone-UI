import React from 'react'
import photo from '../../images/Pal2.jpg'

const SuggestionCard = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className='flex items-center'>
                <div>
                    <img className='w-12 h-12 rounded-full' src={photo} alt="/" />
                </div>
                <div className='ml-3'>
                    <p className='text-sm font-semibold'>madhavpaliwal02</p>
                    <p className='text-sm font-semibold opacity-60'>Madhav Paliwal</p>
                </div>
            </div>
            <div >
                <p className='text-sm text-blue-700 font-semibold'>Follow</p>
            </div>

        </div>
    )
}

export default SuggestionCard