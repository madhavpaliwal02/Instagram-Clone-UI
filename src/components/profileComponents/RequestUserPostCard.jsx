import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { FaComment } from 'react-icons/fa'
import pic from '../../images/post.jpg'
import './RequestUserPostCard.css'

const RequestUserPostCard = () => {
    return (
        <div className='p-2'>
            <div className='post w-60 h-60'>
                <img className='cursor-pointer' src={pic} alt="" />
                <div className='overlay'>
                    <div className='overlay-text flex justify-between'>
                        <div>
                            <AiFillHeart /> <span>10</span>
                        </div>
                        <div>
                            <FaComment /> <span>10</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RequestUserPostCard