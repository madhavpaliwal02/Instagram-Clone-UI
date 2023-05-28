import { AiFillHeart, AiFillMessage, AiOutlineCompass, AiOutlineHeart, AiOutlineHome, AiOutlineMessage, AiOutlinePlusCircle, AiOutlineSearch } from 'react-icons/ai';
import { RiVideoFill, RiVideoLine } from 'react-icons/ri';
import { CgProfile } from 'react-icons/cg';

export const menu = [
    { title: "Home", icon: <AiOutlineHome className='text-2xl mr-5' />, activeIcon: <AiOutlineHome /> },
    { title: "Search", icon: <AiOutlineSearch className='text-2xl mr-5' />, activeIcon: <AiOutlineSearch /> },
    { title: "Explore", icon: <AiOutlineCompass className='text-2xl mr-5' />, activeIcon: <AiOutlineCompass /> },
    { title: "Reels", icon: <RiVideoLine className='text-2xl mr-5' />, activeIcon: <RiVideoFill /> },
    { title: "Message", icon: <AiOutlineMessage className='text-2xl mr-5' />, activeIcon: <AiFillMessage /> },
    { title: "Notification", icon: <AiOutlineHeart className='text-2xl mr-5' />, activeIcon: <AiFillHeart /> },
    { title: "Create", icon: <AiOutlinePlusCircle className='text-2xl mr-5' />, activeIcon: <AiOutlinePlusCircle /> },
    { title: "Profile", icon: <CgProfile className='text-2xl mr-5' />, activeIcon: <CgProfile /> },

]