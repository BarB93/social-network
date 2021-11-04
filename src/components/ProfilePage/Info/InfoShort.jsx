import React from 'react'

import cn from './Info.module.scss'
import InfoRow from './InfoRow'

const Info = ({handleToggleMoreInfo, isShowInfo, aboutMe}) => {
    const textToggleMoreInfoButton = isShowInfo ? 'Скрыть подробную информацию' : 'Показать подробную информацию'

    return (
        <div className={cn.short_info}>
            <InfoRow title='Обо мне:' body={aboutMe}/>
            <div className={cn.info__more_btn}>
                <button onClick={handleToggleMoreInfo} className={cn.info__more_btn}>{textToggleMoreInfoButton}</button>
            </div>
        </div>
    )
}

export default Info