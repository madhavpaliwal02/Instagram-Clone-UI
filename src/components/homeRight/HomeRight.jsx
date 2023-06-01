import React from 'react'
import photo from '../../images/Pal3.jpg'
import SuggestionCard from './SuggestionCard'

const HomeRight = () => {
    return (
        <div>
            <div>
                {/* Right Header */}
                <div className='flex justify-between items-center'>
                    {/* My Profile Details */}
                    <div className='flex items-center'>
                        {/* Profile Image */}
                        <div>
                            <img className='w-12 h-12 rounded-full' src={photo} alt="" />
                        </div>
                        {/* Profile Details */}
                        <div className='ml-3 text-left'>
                            <p>palakporwal2504</p>
                            <p className='opacity-60'>Palak Porwal</p>
                        </div>
                    </div>
                    {/* Switch to another account */}
                    <div>
                        <p className='text-blue-700 font-semibold'>switch</p>
                    </div>
                </div>

                {/* Separation */}
                <hr className='mt-2' />
                
                {/* Suggestion Card */}
                <div className='space-y-4 mt-10'>
                    {[1, 1, 1, 1].map((items) => <SuggestionCard />)}
                </div>
            </div>
        </div>
    )
}

export default HomeRight