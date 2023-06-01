import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../home/Home'
import Sidebar from '../../components/sidebar/Sidebar'
import Profile from '../profile/Profile'
import Story from '../story/Story'

const Router = () => {
    return (
        <div>
            <div className='flex'>
                <div className='w-[20%] border border-l-slate-500'>
                    <Sidebar />
                </div>
                <div className='w-full'>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/username' element={<Profile />} />
                        <Route path='/story' element={<Story />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default Router