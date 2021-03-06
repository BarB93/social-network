import React from 'react'

import UpdateAvatarContainer from './UpdateAvatar/UpdateAvatarContainer'
import styles from './Avatar.module.scss'
import AvatarLoader from './AvatarLoader/AvatarLoader'

const Avatar = ({ imageURL, isUpdatePhotoLoading, isAuthUserProfile }) => {
	return (
		<div className={styles.avatar}>
			<div className={styles.avatar__image}>
				<img src={imageURL} alt='avatar' />
			</div>
			{isAuthUserProfile && !isUpdatePhotoLoading && <UpdateAvatarContainer />}
			{isAuthUserProfile && isUpdatePhotoLoading && <AvatarLoader />}
		</div>
	)
}

export default Avatar
