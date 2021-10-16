import React from 'react'

import cn from './MessageTopSection.module.scss'

const MessageTopSection = () => {
    return (
        <div className={cn.section}>
            <button className={cn.section__button}>Назад</button>
            <div className={cn.section__chatInfo}>
                <span>Название чата</span>
            </div>
        </div>
    )
}

export default MessageTopSection