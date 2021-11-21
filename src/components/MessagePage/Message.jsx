import React from 'react'
import Box from '../UI/Box/Box'
import MessageTopSection from './MessageTopSection/MessageTopSection'
import MessageListContainer from './MessageList/MessageListContainer'

import cn from './message.module.scss'

const Message = ({ dialog }) => {
	const { fullName, photos, userId } = dialog
	return (
		<div className={cn.message}>
			<MessageTopSection title={fullName} photo={photos?.small} userId={userId} />
			<Box height='100%' padding='47px 0 62px'>
				<MessageListContainer dialog={dialog} />
			</Box>
		</div>
	)
}

export default Message
