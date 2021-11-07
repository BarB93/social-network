import React from 'react'
import Box from '../../UI/Box/Box'
import {Route, Routes} from 'react-router-dom'
import MyFriends from '../MyFriends/MyFriends'
import Users from '../User/Users'

const Content = () => {
    return (
        <Box padding='0'>
            <Routes>
                <Route path='/search' element={<Users />}/>
                <Route path='/' element={<MyFriends/>}/>
            </Routes>
        </Box>
    )
}

export default Content