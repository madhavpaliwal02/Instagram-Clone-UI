import React, { useState } from 'react'
import logo from "../../images/logoinsta.png";
import { IoReorderThreeOutline } from "react-icons/io5";
import { menu } from './SidebarConfig';
import { useNavigate } from 'react-router-dom';
import { useDisclosure } from '@chakra-ui/react';
import CreatePostModal from '../post/CreatePostModal';
import SearchComponents from '../search/SearchComponents';

const Sidebar = () => {

    // Use state
    const [activeTab, setActiveTab] = useState();
    const [isSearchVisible, setIsSerachVisible] = useState(false);

    // Use Navigate
    const navigate = useNavigate();

    // Use Disclosure
    const { isOpen, onOpen, onClose } = useDisclosure()

    // Handling tab actions
    const handleTabClick = (title) => {
        setActiveTab(title);

        if (title === "Profile")
            navigate("/username")
        else if (title === "Home")
            navigate("/")
        else if (title === "Create")
            onOpen()
        if (title === "Search")
            setIsSerachVisible(true);
        else
            setIsSerachVisible(false);

    }

    return (
        <div className='sticky top-0 h-[100vh] flex'>
            <div className={`flex flex-col justify-between h-full px-10 ${isSearchVisible ? "px-2" : "px-10"}`} >
                {/* Logo + Navigation */}
                <div className={`${isSearchVisible ? "mt-10" : ""}`} >
                    {/* Logo */}
                    {!isSearchVisible && <div className='pt-8'>
                        <img src={logo} alt='/' className='w-40' />
                    </div>}

                    {/* Sidebar Navigation */}
                    <div className={`${isSearchVisible ? "mt-20" : "mt-7"}`} >
                        {
                            menu.map((item) =>
                                <div
                                    onClick={() => handleTabClick(item.title)}
                                    className='flex items-center mb-5 cursor-pointer text-lg'
                                >
                                    {activeTab === item.title ? item.activeIcon : item.icon}
                                    {!isSearchVisible && <p className={`${activeTab === item.title ? "font-bold" : "font-semibold"}`}>
                                        {item.title}
                                    </p>}
                                </div>
                            )
                        }
                    </div>
                </div>

                {/* More Options */}
                <div className='flex items-center cursor-pointer pb-8'>
                    <IoReorderThreeOutline className='text-2xl' />
                    {activeTab !== "Search" && <p className='ml-5'>More</p>}
                </div>

            </div>
            <CreatePostModal isOpen={isOpen} onClose={onClose} />
            {isSearchVisible && <SearchComponents />}
        </div>
    )
}

export default Sidebar