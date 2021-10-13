import React from 'react'

import cn from "./message.module.scss";

const MessageItem = ({data}) => {
    const {id, message, from} =  data
    const name = from ? 'Борис' : 'Натали'
    const companion = from ? '' : cn.companion

    return (
        <div className={cn.message__item + ' ' + companion}>
            <div className={cn.message__name}>{name}</div>
            {message}
        </div>
    )
}

export default MessageItem