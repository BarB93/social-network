import React from 'react'
import MessageItem from '../MessageIitem/MessageItem'

import styles from '../message.module.scss'

const MessageList = ({ messages, profile, authProfile }) => {
	const messageItems = messages.map((m) => (
		<MessageItem
			key={m.id}
			{...m}
			messages={messages}
			profile={profile}
			authProfile={authProfile}
		/>
	))

	if (messageItems.length === 0)
		return (
			<div className={styles.noMessage}>
				<div>Нет переписки с {profile.fullName}.</div>
				<div>Отправте сообщение!</div>
			</div>
		)
	return (
		<>
			<ul className={styles.message__list}>{messageItems}</ul>
		</>
	)
}

export default MessageList
