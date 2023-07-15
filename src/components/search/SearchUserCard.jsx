import React from 'react'
import photo from '../../images/pp2.png'

const SearchUserCard = () => {
    return (
        <div className='ml-4'>
            <div className='flex py-2 w-full '>
                {/* <div> */}
                <img className='h-10 w-10 rounded-full' src={photo} alt="" />
                {/* </div> */}
                <div className='flex flex-col text-left ml-3'>
                    <p className=''>Madhav Paliwal</p>
                    <p className='no-wrap opacity-60'>madhavpaliwal02</p>
                </div>
            </div>
        </div>
    )
}

export default SearchUserCard