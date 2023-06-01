import React from 'react'
import HomeRight from '../../components/homeRight/HomeRight'
import PostCard from '../../components/post/PostCard'
import StoryCircle from '../../components/story/StoryCircle'

const Home = () => {
    return (
        <div>
            <div className='mt-10 flex w-[100%] justify-center'>

                {/* Main Center : Story & Posts */}
                <div className='w-[44%] px-10'>
                    {/*  Story */}
                    <div className='storyDiv flex space-x-2 border p-4 rounded-md justify-start w-full'>
                        {[1, 1, 1].map((item) => <StoryCircle />)}
                    </div>

                    {/* Posts */}
                    <div>
                        {[1, 1, 1].map((item) => <PostCard />)}
                    </div>

                </div>

                {/* Right Part */}
                <div className='w-[30%]'>
                    <HomeRight />
                </div>
            </div>
        </div>
    )
}

export default Home