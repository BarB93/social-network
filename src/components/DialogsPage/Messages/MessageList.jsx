import React from 'react'

import cn from './message.module.scss'
import MessageItem from "./MessageItem";

const MessageList = ({messages}) => {

    messages = messages.map((m) => <MessageItem key={m.id} data={m}/>)

    return (
        <div className={cn.message__list}>
            {messages}
        </div>
    )
}

export default MessageList