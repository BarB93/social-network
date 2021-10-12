import React from 'react'

import cn from './Info.module.scss'

const Info = ({handleToggleMoreInfo}) => {
    return (
        <div className={cn.short_info}>
            <div className={cn.info__row}>
                <div className={cn.info__label}>Город:</div>
                <div className={cn.info__value}>Москва</div>
            </div>
            <div className={cn.info__more_btn}>
                <button onClick={handleToggleMoreInfo} className={cn.info__more_btn}>Показать подробную информацию</button>
            </div>
        </div>
    )
}

export default Info