import React from 'react'
import MessageItem from "./MessageItem"

import cn from './message.module.scss'

const MessageList = ({messages}) => {

    messages = messages.map((m) => <MessageItem key={m.id} data={m}/>)

    return (
        <ul className={cn.message__list}>
            {messages}
        </ul>
    )
}

export default MessageList