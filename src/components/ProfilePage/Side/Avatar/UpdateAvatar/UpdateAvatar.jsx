import React from 'react'
import { FaArrowCircleUp } from 'react-icons/fa'
import cn from '../Avatar.module.scss'

const UpdateAvatar = ({ handleOnChangeFile }) => {
	return (
		<div className={cn.updateAvatar}>
			<label className={cn.updateAvatar__label} htmlFor='updateAvatar'>
				<FaArrowCircleUp className={cn.updateAvatar__icon} />
				Обновить фотографию
			</label>
			<input
				className={cn.updateAvatar__input}
				onChange={handleOnChangeFile}
				accept='image/png, image/gif, image/jpeg'
				id='updateAvatar'
				type='file'
			/>
		</div>
	)
}

export default UpdateAvatar
