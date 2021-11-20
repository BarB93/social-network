import React from 'react'

import Avatar from './Avatar'
import noAvatar from '../../../../assets/images/no_avatar.png'
import { useSelector } from 'react-redux'

const AvatarContainer = ({ isAuthUserProfile }) => {
	const {
		profile: { photos },
		isUpdatePhotoLoading,
	} = useSelector((state) => state.profile)
	const imageURL = photos.large ? photos.large : noAvatar

	return (
		<Avatar
			imageURL={imageURL}
			isUpdatePhotoLoading={isUpdatePhotoLoading}
			isAuthUserProfile={isAuthUserProfile}
		/>
	)
}

export default AvatarContainer
