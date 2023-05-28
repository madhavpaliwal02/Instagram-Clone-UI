import React, { useState } from 'react'
import { AiOutlineTable, AiOutlineUser } from 'react-icons/ai'
import { RiVideoAddLine } from 'react-icons/ri'
import { BiBookmark } from 'react-icons/bi'
import RequestUserPostCard from './RequestUserPostCard'


const RequestUserPostPart = () => {

    // Use state
    const [activeTab, setActiveTab] = useState();

    // Tabs
    const tabs = [
        {
            tab: "Posts",
            icon: <AiOutlineTable />,
            activeTab: ""
        },
        {
            tab: "Reels",
            icon: <RiVideoAddLine />
        },
        {
            tab: "Saved",
            icon: <BiBookmark />
        },
        {
            tab: "Toggle",
            icon: <AiOutlineUser />
        }
    ]

    return (
        <div>
            <div className='flex space-x-14 border-t relative'>
                {/* For each Tab */}
                {tabs.map((item) =>
                    // Handling on click
                    <div onClick={() => setActiveTab(item.tab)}
                        // Condition matches
                        className={`${activeTab === item.tab ? "border-t border-black" : "opacity-60"} 
                    flex items-center cursor-pointer py-2 text-sm`}>
                        <p>{item.icon}</p>
                        <p className='ml-1'>{item.tab}</p>
                    </div>
                )}
            </div>
            {/* Mapping all posts */}
            <div>
                <div className='flex flex-wrap'>
                    {[1,1,1,1,1,1].map((item) => <RequestUserPostCard />)}
                </div>
            </div>
        </div>
    )
}

export default RequestUserPostPart