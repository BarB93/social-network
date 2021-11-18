import React from 'react'
import { useSelector } from 'react-redux'
import UserListContainer from './UserList/UserListContainer'

import commonStyles from '../../../styles/commonStyles.module.scss'

const Users = () => {
	const { totalUsers, isInit } = useSelector((state) => state.user)

	return (
		<div>
			<div className={commonStyles.title}>
				<h4 className={commonStyles.title__header}>
					Найти друзей
					{isInit && (
						<span className={commonStyles.title__amount}>{totalUsers}</span>
					)}
				</h4>
			</div>
			<UserListContainer />
		</div>
	)
}

export default Users
