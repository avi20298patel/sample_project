import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../Global/Signup/Login'
import Users from '../Pages/Users';
import Statistic from '../Pages/Statistic';
// import LoadingList from '../Pages/LoadingList';
import Message from '../Pages/Message';
import Dashboard from '../Pages/Dashboard';
import Bookmark from '../Pages/Bookmark';
import Files from '../Pages/Files';
import SignupCard from '../Global/Signup/SignupCard'

function ApplicationRoutes() {
    return (
        <Routes>
            <Route exact path='/' element={<Dashboard />} />
            {/* <Route path='/loading' element={<LoadingList />} /> */}
            <Route path='/message' element={< Message />} />
            <Route path='/users' element={< Users />} />
            <Route path='/file' element={< Files />} />
            <Route path='/bookmark' element={< Bookmark />} />
            <Route path='/login' element={<Login />} />
            <Route path={'/signup'} element={<SignupCard />} />
            <Route path='/stats' element={<Statistic />} />
        </Routes>
    )
}

export default ApplicationRoutes