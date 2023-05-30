import React, { useState } from 'react'
import { BsBookmark, BsBookmarkFill, BsEmojiSmile, BsThreeDots } from 'react-icons/bs'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'
import { RiSendPlaneLine } from 'react-icons/ri'
import photo from '../../images/post.jpg'
import postImg from '../../images/pp2.png'
import './PostCard.css'
import CommentModal from '../commentModal/CommentModal'
import { useDisclosure } from '@chakra-ui/react'

const PostCard = () => {

    // Using useState
    const [showDropdown, setShowDropdown] = useState(false);
    const [isPostLike, setIsPostLike] = useState(false);
    const [isBookmark, setIsBookmark] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure()

    // Handling delete dropdown
    const handleDelete = () => {
        setShowDropdown(!showDropdown);
    }

    // Handling Post Like
    const handlePostLike = () => {
        setIsPostLike(!isPostLike);
    }

    // Handle Bookmark
    const handleBookmark = () => {
        setIsBookmark(!isBookmark);
    }

    // Handle Comment Modal
    const handleOpenCommentModal = () => {
        onOpen()
    }

    return (
        <div>

            {/* Post Card */}
            <div className='border rounded-md w-full'>

                {/* PostCard Header */}
                <div className='flex justify-between items-center w-full py-4 px-5'>
                    <div className='flex items-center'>
                        {/* Profile picture */}
                        <img className='h-12 w-12 rounded-full' src={photo} alt="" />

                        {/* Name & Location */}
                        <div className='pl-2'>
                            {/* Full Name */}
                            <p className='font-semibold text-sm'>Palak Porwal</p>
                            {/* Location */}
                            <p className='font-thin text-sm'>Indore</p>
                        </div>
                    </div>

                    <div>
                        <BsThreeDots onClick={handleDelete} />
                        <div className='dropdown-content'>
                            {showDropdown && <p className='bg-black text-white py-1 px-4 rounded-md cursor-pointer'>Delete</p>}
                        </div>
                    </div>
                </div>

                {/* PostCard Post */}
                <div className='w-full'>
                    <img className='w-full' src={postImg} alt="/" />
                </div>

                {/* Like, Comments & Share and Save */}
                <div className='flex justify-between items-center w-full px-5 py-4'>
                    {/* Like, Comments & Share */}
                    <div className='flex justify-center space-x-3'>
                        {isPostLike ? <AiFillHeart className='text-2xl hover:opacity-50 cursor-pointer text-red-600' onClick={handlePostLike} /> : <AiOutlineHeart className='text-2xl hover:opacity-50 cursor-pointer' onClick={handlePostLike} />}

                        <FaRegComment onClick={handleOpenCommentModal} className='text-xl hover:opacity-50 cursor-pointer' />

                        <RiSendPlaneLine className='text-xl hover:opacity-50 cursor-pointer' />
                    </div>
                    {/* Saved */}
                    <div>
                        {isBookmark ? <BsBookmarkFill className='text-xl hover:opacity-50 cursor-pointer' onClick={handleBookmark} /> : <BsBookmark className='text-xl hover:opacity-50 cursor-pointer' onClick={handleBookmark} />}
                    </div>
                </div>

                {/* No of likes displayed */}
                <div className='w-full text-left py-2 px-5'>
                    <p>10 likes</p>
                    <p className='opacity-50 cursor-pointer py-2'>See more Comments</p>
                </div>

                {/* Add a comment */}
                <div className='border border-t w-full'>
                    <div className='flex w-full items-center px-3'>
                        <BsEmojiSmile className='text-2xl' />
                        <input className='commentInput' type="text" placeholder='Add a comment...' />
                    </div>
                </div>
            </div>

            {/* Comment Modal */}
            <CommentModal handlePostLike={handlePostLike} onClose={onClose} isOpen={isOpen} handleBookmark={handleBookmark} isPostLike={isPostLike} isBookmark={isBookmark} />
        </div>
    )
}

export default PostCard