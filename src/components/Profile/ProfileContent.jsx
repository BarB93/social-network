import React from 'react'

import cn from './profile.module.scss'

const ProfileContent = () => {
    return (
        <div className={cn.profile__content}>
            <div>Блок информации</div>
            <div>
                Мои посты
                <div>Создать пост</div>
                <div>Список постов</div>
            </div>
        </div>
    )
}

export default ProfileContent