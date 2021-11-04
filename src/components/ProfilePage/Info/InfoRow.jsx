import React from 'react'

import cn from './Info.module.scss'

const InfoRow = ({title, body , link = false}) => {
    let value = body
    if(link) {
        const href = /^(http|https):\/\/[^ "]+$/.test(body) ? body : 'https://' + body
         value = <a href={href} target='_blank'>{href}</a>
    }


    return (
        <div>
            <div className={cn.info__row}>
                <div className={cn.info__label}>{title}</div>
                <div className={cn.info__value}>{body? value : <span className={cn.info__notSpecified}>не указано</span>}</div>
            </div>
        </div>
    )
}

export default InfoRow