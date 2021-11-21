import React from 'react'
import MessageItem from '../MessageIitem/MessageItem'

import cn from '../message.module.scss'

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

	return (
		<>
			<ul className={cn.message__list}>{messageItems}</ul>
		</>
	)
}

export default MessageList
