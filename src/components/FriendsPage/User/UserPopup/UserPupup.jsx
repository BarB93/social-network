import React from 'react'

import cn from './UserPupup.module.scss'
import SubscribeLoader from '../../../UI/Loader/SubcribeLoader/SubscribeLoader'


const UserPupup = ({unfollow, isLoading}) => {
    return (
        <div className={cn.popup}>
            {isLoading
                ? <SubscribeLoader />
                : <>
                    < div className={cn.popup__title}>Добавлен в друзья</div>
                    <div className={cn.popup__buttonWrapper}>
                        <button onClick={unfollow} className={cn.popup__button}>Отменить</button>
                    </div>
                </>
            }
        </div>
    )
}

export default UserPupup