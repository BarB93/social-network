import React from 'react'
import {useSelector} from 'react-redux'
import {Route, Routes, Navigate} from 'react-router-dom'
import {privateRoutes, publicRoutes} from '../../router/contentRoutes'


const ContentRouter = () => {
    const {isAuth} = useSelector(state => state.auth)

    return (
        isAuth ?
        <Routes>
            {publicRoutes.map(route =>
                <Route
                    element={<route.component/>}
                    path={route.path}
                    key={route.path}
                />
            )}
            <Route path='/*' element={<Navigate to='/profile' />}/>
        </Routes>
            :
        <Routes>
            {privateRoutes.map(route =>
                <Route
                    element={<route.component/>}
                    path={route.path}
                    key={route.path}
                />
            )}
            <Route path='/*' element={<Navigate to='/'/>} />
        </Routes>
    )
}

export default ContentRouter