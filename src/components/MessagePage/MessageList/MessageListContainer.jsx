import React from 'react'
import { useSelector } from 'react-redux'

import { useLocalStorage } from '../../../hooks/useLocalStorage'
import CreateMessageContainer from '../CreateMessage/CreateMessageContainer'
import MessageList from './MessageList'

const MessageListContainer = ({ dialog }) => {
	const { userId } = dialog
	const authProfile = useSelector((state) => state.profile.authProfile)
	const { userId: authUserId } = authProfile
	const [messages, setMessages] = useLocalStorage(`dialog${userId}${authUserId}`, [])

	return (
		<>
			<MessageList messages={messages} profile={dialog} authProfile={authProfile} />
			<CreateMessageContainer
				setMessages={setMessages}
				messages={messages}
				authProfile={authProfile}
			/>
		</>
	)
}

export default MessageListContainer
