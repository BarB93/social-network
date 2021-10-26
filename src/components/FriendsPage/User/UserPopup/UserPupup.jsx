import React from 'react'

import cn from './UserPupup.module.scss'


const UserPupup = ({unfollow}) => {
    return (
        <div className={cn.popup}>
            <div className={cn.popup__title}>Добавлен в друзья</div>
            <div className={cn.popup__buttonWrapper}>
                <button onClick={unfollow} className={cn.popup__button}>Отменить</button>
            </div>
        </div>
    )
}

export default UserPupup