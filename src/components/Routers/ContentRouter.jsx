import React from 'react'

import { Route, Routes, Navigate } from 'react-router-dom'
import { publicRoutes } from '../../router/contentRoutes'

const ContentRouter = () => {
	return (
		<Routes>
			{publicRoutes.map((route) => (
				<Route element={<route.component />} path={route.path} key={route.path} />
			))}
			<Route path='/*' element={<Navigate to='/profile' />} />
		</Routes>
	)
}

export default ContentRouter
