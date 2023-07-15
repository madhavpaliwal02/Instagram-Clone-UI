import React, { useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import photo from '../../images/pp3.jpeg'

const CommentCard = () => {

    // Use state
    const [isLiked, setIsLiked] = useState(false);

    const handleLike = () => {
        setIsLiked(!isLiked);
    }

    return (
        <div>
            {/* For each Comment */}
            <div className='flex items-center justify-between'>

                {/* Personel + Comment Details */}
                <div className='flex items-center'>

                    {/* Photo of the commenter */}
                    <div>
                        <img className='w-8 h-8 rounded-full' src={photo} alt="" />
                    </div>

                    {/* Username & Statistics */}
                    <div className='ml-3'>
                        {/* Username + Comment */}
                        <p>
                            <span className='text-semibold'>username</span>
                            <span className='ml-2'>nice comment</span>
                        </p>
                        {/* likes & time before the post */}
                        <div className='flex items-center space-x-5 text-xs opacity-60 pt-2'>
                            <span>1 min ago</span>
                            <span>23 likes</span>
                        </div>
                    </div>
                </div>

                {/* Like Button */}
                <div>
                    {isLiked ? <AiFillHeart onClick={handleLike} className='hover:opacity-50 cursor-pointer text-red-600' /> : <AiOutlineHeart onClick={handleLike} className='hover:opacity-50 cursor-pointer' />}
                </div>
            </div>
        </div>
    )
}

export default CommentCard