import React from 'react'
import photo from '../../images/Pal3.jpg'
import SuggestionCard from './SuggestionCard'

const HomeRight = () => {
    return (
        <div>
            <div>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                        <div>
                            <img className='w-12 h-12 rounded-full' src={photo} alt="" />
                        </div>
                        <div className='ml-3 text-left'>
                            <p>palakporwal2504</p>
                            <p className='opacity-60'>Palak Porwal</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-blue-700 font-semibold'>switch</p>
                    </div>
                </div>
                <hr className='mt-2' />
                <div className='space-y-4 mt-10'>
                    {[1, 1, 1, 1].map((items) => <SuggestionCard />)}
                </div>
            </div>
        </div>
    )
}

export default HomeRight