import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import Profile from './Profile'
import { fetchProfile } from '../../../redux/actions/profileAction'

const ProfileContainer = () => {
	const dispatch = useDispatch()
	const profileData = useSelector((state) => state.profile)
	const authUserId = useSelector((state) => state.auth.userId)
	const { userId: currentUserId } = useParams()
	const userId = currentUserId ? currentUserId : authUserId
	const isAuthUserProfile = authUserId === userId

	useEffect(() => {
		if (userId) {
			dispatch(fetchProfile(userId))
		}
	}, [userId])

	return <Profile {...profileData} isAuthUserProfile={isAuthUserProfile} />
}

export default ProfileContainer
