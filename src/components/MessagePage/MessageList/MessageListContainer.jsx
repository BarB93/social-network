import React from 'react'
import { useSelector } from 'react-redux'

import { useLocalStorage } from '../../../hooks/useLocalStorage'
import MessageList from './MessageList'
import CreateMessage from '../CreateMessage/CreateMessage'

const MessageListContainer = ({ dialog }) => {
	const { userId } = dialog
	const authProfile = useSelector((state) => state.profile.authProfile)
	const { userId: authUserId } = authProfile

	const [messages, setMessages] = useLocalStorage(`dialog${userId}${authUserId}`, [])
	const [dialogList, setDialogList] = useLocalStorage(`dialogList${authUserId}`, [])

	const updateDialogList = () => {
		if (!dialogList.includes(userId)) {
			const newDialogList = [...dialogList]
			newDialogList.push(userId)
			setDialogList(newDialogList)
		}
	}
	const handleAddMessage = (text) => {
		const newMessages = [...messages]
		newMessages.push({
			id: messages.length + 1,
			text,
			userId: authProfile.userId,
			date: Date.now(),
		})
		setMessages(newMessages)
		updateDialogList()
	}

	return (
		<>
			<MessageList messages={messages} profile={dialog} authProfile={authProfile} />
			<CreateMessage addMessage={handleAddMessage} />
		</>
	)
}

export default MessageListContainer
