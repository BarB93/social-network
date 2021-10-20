import React from 'react'
import {useSelector} from 'react-redux'
import MessageList from "./MessageList";

const MessageListContainer = () => {
    const messages = useSelector(state => state.message.messages)
    return <MessageList messages={messages}/>
}

export default MessageListContainer