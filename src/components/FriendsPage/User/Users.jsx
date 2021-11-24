import React from 'react'
import { useSelector } from 'react-redux'
import UserListContainer from './UserList/UserListContainer'

import commonStyles from '../../../styles/commonStyles.module.scss'
import Button from '../../UI/Button/Button'
import { NavLink } from 'react-router-dom'

const Users = () => {
	const { totalUsers, isInit } = useSelector((state) => state.user)

	return (
		<div>
			<div className={commonStyles.title}>
				<h4 className={commonStyles.title__header}>
					Найти друзей
					{isInit && <span className={commonStyles.title__amount}>{totalUsers}</span>}
				</h4>
				<NavLink to='/friends'>
					<Button fz='0.9rem' h='25px'>
						Мои друзья
					</Button>
				</NavLink>
			</div>
			<UserListContainer />
		</div>
	)
}

export default Users
