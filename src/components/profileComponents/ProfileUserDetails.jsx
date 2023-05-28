import React from 'react'
import { TbCircleDashed } from 'react-icons/tb'
import profile from '../../images/pp1.png'

const ProfileUserDetails = () => {
    return (
        <div className='py-10 w-full'>
            <div className='flex items-center'>
                {/* Profile Image */}
                <div className='w-[30%]'>
                    <img className='w-32 h-32 rounded-full' src={profile} alt="/" />
                </div>

                {/* Profile Details */}
                <div className='space-y-5'>
                    <div className='flex space-x-10 items-center'>
                        {/* Username */}
                        <p>madhav paliwal</p>
                        {/* Edit Profile Button */}
                        <button>Edit Profile</button>
                        {/* Settings Button */}
                        <TbCircleDashed />
                    </div>

                    {/* Statistics */}
                    <div className='flex space-x-10'>
                        <div>
                            <span className='font-semibold mr-2'>10</span>
                            <span>Posts</span>
                        </div>
                        <div>
                            <span className='font-semibold mr-2'>10</span>
                            <span>Followers</span>
                        </div>
                        <div>
                            <span className='font-semibold mr-2'>10</span>
                            <span>Following</span>
                        </div>
                    </div>

                    {/* Personal Details */}
                    <div className='text-left'>
                        <p className='font-semibold'>Full Name</p>
                        <p className='font-thin text-sm'>Bio
                            Jai Shree Raaam
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileUserDetails