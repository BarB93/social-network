import React from 'react'
import MessageItem from './MessageItem'

import cn from './message.module.scss'

const MessageList = ({ messages }) => {
	const messageItems = messages.map((m) => <MessageItem key={m.id} data={m} />)

	return <ul className={cn.message__list}>{messageItems}</ul>
}

export default MessageList
