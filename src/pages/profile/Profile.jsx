import React from 'react'
import ProfileUserDetails from '../../components/profileComponents/ProfileUserDetails'
import RequestUserPostCard from '../../components/profileComponents/RequestUserPostCard'
import RequestUserPostPart from '../../components/profileComponents/RequestUserPostPart'

const Profile = () => {



    return (
        <div className='px-20'>
            <div>
                <ProfileUserDetails />
            </div>

            <div>
                <RequestUserPostPart />
            </div>

            <div>
                <RequestUserPostCard />
            </div>

        </div>
    )
}

export default Profile