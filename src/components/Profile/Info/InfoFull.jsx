import React from 'react'

import cn from './Info.module.scss'

const Info = ({isShowInfo}) => {
    const style = {
        display: isShowInfo ? 'block' : 'none'
    }

    return (
        <div style={style} className={cn.full_info}>
            <div className={cn.full_info__item}>
                <div className={cn.header}>
                    <div className={cn.header__title}>Основная информация</div>
                    <div className={cn.header__line}>
                        <a className={cn.header__line_link} href="">Редактировать</a>
                    </div>
                </div>
                <div className={cn.info__row}>
                    <div className={cn.info__label}>Родной город:</div>
                    <div className={cn.info__value}>Москва</div>
                </div>
                <div className={cn.info__row}>
                    <div className={cn.info__label}>Языки:</div>
                    <div className={cn.info__value}>Русский</div>
                </div>
            </div>
        </div>
    )
}

export default Info