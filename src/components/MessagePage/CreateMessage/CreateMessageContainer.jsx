import React from 'react'

import CreateMessage from './CreateMessage'

const CreateMessageContainer = ({ setMessages, messages, authProfile }) => {
	const handleAddMessage = (text) => {
		const newMessages = [...messages]
		newMessages.push({
			id: messages.length + 1,
			text,
			userId: authProfile.userId,
			date: Date.now(),
		})
		setMessages(newMessages)
	}

	return <CreateMessage addMessage={handleAddMessage} />
}

export default CreateMessageContainer
