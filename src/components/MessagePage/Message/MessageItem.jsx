import React from 'react'

import cn from "./message.module.scss";

const MessageItem = ({data}) => {
    const {id, message, from, img} =  data
    const name = from ? 'Борис' : 'Натали'

    return (
        <li className={cn.message__item}>
            <div className={cn.message__avatar}>
                <img src={img} alt="avatar"/>
            </div>
            <div className={cn.message__content}>
                <div className={cn.message__name}>{name}</div>
                <div className={cn.message__text}>
                    {message}
                </div>

            </div>

        </li>
    )
}

export default MessageItem