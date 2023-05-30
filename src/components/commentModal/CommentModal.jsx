import React from 'react'
import { Modal, ModalOverlay, ModalContent, ModalBody } from '@chakra-ui/react'
import photo from '../../images/pp2.png'
import pp from '../../images/Pal.jpg'
import { BsBookmark, BsBookmarkFill, BsEmojiSmile, BsThreeDots } from 'react-icons/bs'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'
import { RiSendPlaneLine } from 'react-icons/ri'
import CommentCard from './CommentCard'
import './CommentModal.css'

const CommentModal = ({ handlePostLike, onClose, isOpen, handleBookmark, isPostLike, isBookmark, }) => {
    return (
        <div>
            <Modal size={"4xl"} onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalBody>
                        {/* Card Modal Body */}
                        <div className='h-[75vh] flex'>

                            {/* Left : Post Image */}
                            <div className='w-[45%] flex flex-col justify-center'>
                                <img className='max-h-full w-full' src={photo} alt="" />
                            </div>

                            {/* Right : Post Comment */}
                            <div className='w-[55%] pl-10 relative'>
                                {/* Profile Details + More Options */}
                                <div className='flex justify-between items-center'>

                                    {/* Photo & Username */}
                                    <div className='flex items-center py-5'>
                                        <div>
                                            <img className='w-9 h-9 rounded-full' src={pp} alt="" />
                                        </div>
                                        <div className='ml-2'>
                                            <p>Palak Porwal</p>
                                        </div>
                                    </div>

                                    {/*More Options */}
                                    <BsThreeDots />
                                </div>

                                <hr />

                                {/* Comment Card */}
                                <div className='comment'>
                                    {[1, 1, 1, 1, 1, 1, 1].map(() => <CommentCard />)}
                                </div>

                                {/* Bottom Like & comment part */}
                                <div className='absolute bottom-0 w-[90%]'>
                                    {/* Like, Comments & Share and Save */}
                                    <div className='flex justify-between items-center w-full py-1'>
                                        {/* Like, Comments & Share */}
                                        <div className='flex justify-center space-x-3'>
                                            {isPostLike ? <AiFillHeart className='text-2xl hover:opacity-50 cursor-pointer text-red-600' onClick={handlePostLike} /> : <AiOutlineHeart className='text-2xl hover:opacity-50 cursor-pointer' onClick={handlePostLike} />}

                                            <FaRegComment className='text-xl hover:opacity-50 cursor-pointer' />

                                            <RiSendPlaneLine className='text-xl hover:opacity-50 cursor-pointer' />
                                        </div>
                                        {/* Saved */}
                                        <div>
                                            {isBookmark ? <BsBookmarkFill className='text-xl hover:opacity-50 cursor-pointer' onClick={handleBookmark} /> : <BsBookmark className='text-xl hover:opacity-50 cursor-pointer' onClick={handleBookmark} />}
                                        </div>
                                    </div>

                                    {/* No of likes displayed */}
                                    <div className='w-full text-left py-1'>
                                        <p>10 likes</p>
                                        <p className='opacity-50 text-sm'>1 day ago...</p>
                                    </div>

                                    {/* Add a comment : Input */}
                                    {/* <div className='w-full'> */}
                                    <div className='flex w-full items-center'>
                                        <BsEmojiSmile className='text-2xl cursor-pointer' />
                                        <input className='commentInput' type="text" placeholder='Add a comment...' />
                                    </div>
                                    {/* </div> */}
                                </div>

                            </div>

                        </div>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </div >
    )
}

export default CommentModal