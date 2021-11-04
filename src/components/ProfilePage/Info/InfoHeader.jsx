import React from 'react'

import cn from './Info.module.scss'

const InfoHeader = ({title}) => {
    return (
        <div className={cn.header}>
            <div className={cn.header__title}>{title}</div>
            <div className={cn.header__line}>
                <a className={cn.header__line_link} href="">Редактировать</a>
            </div>
        </div>
    )
}

export default InfoHeader