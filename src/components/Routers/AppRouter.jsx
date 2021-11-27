import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import AppContainer from '../AppContainer/AppContainer'
import { AuthPage } from '../../pages'

const AppRouter = () => {
	const { isAuth } = useSelector((state) => state.auth)
	return isAuth ? (
		<AppContainer />
	) : (
		<Routes>
			<Route path='/auth' element={<AuthPage />} />
			<Route path='/*' element={<Navigate to='/auth' />} />
		</Routes>
	)
}

export default AppRouter
