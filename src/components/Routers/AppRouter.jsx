import React from 'react'
import {useSelector} from 'react-redux'
import {Redirect, Route, Routes} from 'react-router-dom'
import AuthPage from '../AuthPage/AuthPage'
import AppContainer from '../AppContainer/AppContainer'

const AppRouter = () => {
    const {isAuth} = useSelector(state => state.auth)

    return (
        isAuth ?
            <AppContainer />
            :
            <Routes>
                <Route path='/' element={<AuthPage/>}/>
                <Route path='/friends' element={<AppContainer/>}/>
                {/*<Redirect to='/'/>*/}
            </Routes>

    )
}

export default AppRouter