import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from '../home/Home'
import Sidebar from '../../components/sidebar/Sidebar'
import Profile from '../profile/Profile'
import Story from '../story/Story'
import LoginPage from '../auth/LoginPage'

const Router = () => {

    // Use location 
    const location = useLocation();


    return (
        <div>
            {location.pathname !== '/login' ?
                (<div className='flex'>
                    <div className='w-[28%] border border-l-slate-500'>
                        <Sidebar />
                    </div>
                    <div className='w-full'>
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/username' element={<Profile />} />
                            <Route path='/story' element={<Story />} />
                        </Routes>
                    </div>
                </div>)
                :
                (<div>
                    <Routes>
                        <Route path='/login' element={<LoginPage />} />
                    </Routes>
                </div>)
            }
        </div>
    )
}

export default Router