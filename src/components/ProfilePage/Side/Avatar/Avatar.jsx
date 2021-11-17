import React from 'react'

import noAvatar from '../../../../assets/images/no_avatar.png'

import cn from './Avatar.module.scss'

const Avatar = ({ photos }) => {
	const imageURL = photos.large ? photos.large : noAvatar

	return (
		<div className={cn.avatar}>
			<div className={cn.avatar__image}>
				<img src={imageURL} alt='avatar' />
			</div>
		</div>
	)
}

export default Avatar
