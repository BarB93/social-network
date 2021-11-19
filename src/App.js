import React, { useEffect } from 'react'
import { authMe } from './redux/actions/authAction'
import { useDispatch, useSelector } from 'react-redux'
import Header from './components/Header/Header'
import AppRouter from './components/Routers/AppRouter'

import './styles/App.scss'
import { fetchProfile } from './redux/actions/profileAction'

function App() {
	const dispatch = useDispatch()
	const { isInitialApp, isAuth, userId } = useSelector((state) => state.auth)

	useEffect(() => {
		dispatch(authMe())
	}, [isAuth])

	useEffect(() => {
		if (userId) {
			dispatch(fetchProfile({ id: userId, isAuthUserProfile: true }))
		}
	}, [userId])

	if (!isInitialApp) return null
	return (
		<div className='app'>
			<Header />
			<AppRouter />
		</div>
	)
}

export default App
