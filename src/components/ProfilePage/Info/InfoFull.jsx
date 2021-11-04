import React from 'react'

import cn from './Info.module.scss'
import InfoRow from './InfoRow'
import InfoHeader from './InfoHeader'

const Info = ({isShowInfo, lookingForAJobDescription, lookingForAJob, contacts}) => {
    const style = {
        display: isShowInfo ? 'block' : 'none'
    }

    const contactsList = Object.keys(contacts).map(key => <InfoRow key={key} title={key} body={contacts[key]} link={true}/>)

    return (
        <div style={style} className={cn.full_info}>
            <div className={cn.full_info__item}>
                <div className={cn.full_info__block}>
                    <InfoHeader title='Поиск работы'/>
                    <InfoRow title='Ищу работу:' body={lookingForAJob? 'Да' : 'Нет'}/>
                    <InfoRow title='Описание:' body={lookingForAJobDescription}/>
                </div>
                <div className={cn.full_info__block}>
                    <InfoHeader title='Контакты'/>
                    {contactsList}
                </div>
            </div>
        </div>
    )
}

export default Info