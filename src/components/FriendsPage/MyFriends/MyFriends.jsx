import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import FriendsListContainer from './FriendsList/FriendsListContainer'
import Button from '../../UI/Button/Button'

import commonStyles from '../../../styles/commonStyles.module.scss'

const MyFriends = () => {
	const { totalFriends, isInit } = useSelector((state) => state.friend)

	return (
		<>
			<div>
				<div className={commonStyles.title}>
					<h4 className={commonStyles.title__header}>
						Все друзья
						{isInit && (
							<span className={commonStyles.title__amount}>{totalFriends}</span>
						)}
					</h4>
					<NavLink to='/friends/search'>
						<Button fz='0.9rem' h='25px'>
							Найти друзей
						</Button>
					</NavLink>
				</div>
			</div>
			<FriendsListContainer />
		</>
	)
}

export default MyFriends
