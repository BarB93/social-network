import React from 'react'

import styles from '../message.module.scss'
import Avatar from '../../UI/Avatar/Avatar'

const MessageItem = ({ id, text, userId, date, messages, authProfile, profile }) => {
	let isShowAdditionalInfo = false
	const imageURL = userId === profile.userId ? profile.photos.small : authProfile.photos.small
	const name = userId === profile.userId ? profile.fullName : authProfile.fullName

	for (let i = 0; i < messages.length; i++) {
		if (messages[i].id === id) {
			if (messages[i - 1]?.userId !== userId || date - messages[i - 1]?.date > 1000 * 60)
				isShowAdditionalInfo = true
			break
		}
	}

	const classItem = isShowAdditionalInfo ? styles.message__block : ''

	return (
		<li className={`${styles.message__item} ${classItem}`}>
			<div className={styles.message__avatar}>
				{isShowAdditionalInfo && <Avatar photo={imageURL} size='36px' alt='avatar' />}
			</div>
			<div className={styles.message__content}>
				{isShowAdditionalInfo && (
					<div className={styles.message__contentHeader}>
						<div className={styles.message__name}>{name}</div>
						<div className={styles.message__time}>
							{new Date(date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
						</div>
					</div>
				)}
				<div className={styles.message__text}>{text}</div>
			</div>
		</li>
	)
}

export default MessageItem
