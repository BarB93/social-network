import React from 'react'
import { FaArrowCircleUp } from 'react-icons/fa'
import styles from '../Avatar.module.scss'

const UpdateAvatar = ({ handleOnChangeFile }) => {
	return (
		<div className={styles.updateAvatar}>
			<label className={styles.updateAvatar__label} htmlFor='updateAvatar'>
				<FaArrowCircleUp className={styles.updateAvatar__icon} />
				Обновить фотографию
			</label>
			<input
				className={styles.updateAvatar__input}
				onChange={handleOnChangeFile}
				accept='image/png, image/gif, image/jpeg'
				id='updateAvatar'
				type='file'
			/>
		</div>
	)
}

export default UpdateAvatar
