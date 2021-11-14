import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { followUser, unfollowUser } from '../../../../redux/actions/userAction'
import UserItem from './UserItem'

const UserItemContainer = ({ user }) => {
	const dispatch = useDispatch()
	const { subscribingInProgress } = useSelector((state) => state.user)
	const isLoading = subscribingInProgress.includes(user.id)

	const handleFollow = () => {
		dispatch(followUser(user.id))
	}

	const handleUnfollow = (e) => {
		e.stopPropagation()
		dispatch(unfollowUser(user.id))
	}

	return (
		<UserItem
			follow={handleFollow}
			unfollow={handleUnfollow}
			user={user}
			isLoading={isLoading}
		/>
	)
}

export default UserItemContainer
