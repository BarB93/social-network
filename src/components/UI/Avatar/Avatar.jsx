import React, { useMemo } from 'react'
import noAvatar from '../../../assets/images/no_avatar.png'

const imgStyle = {
	display: 'block',
	width: '100%',
}

const Avatar = ({ size, margin, photo }) => {
	const imageURL = photo ? photo : noAvatar

	const avatarStyle = useMemo(
		() => ({
			width: size ? size : '32px',
			height: size ? size : '32px',
			margin: margin ? margin : '0',
			borderRadius: '50%',
			overflow: 'hidden',
		}),
		[size, margin],
	)

	return (
		<div style={avatarStyle}>
			<img style={imgStyle} src={imageURL} alt='avatar' />
		</div>
	)
}

export default Avatar
