import React from 'react'
import noAvatar from '../../../../assets/images/no_avatar.png'

import cn from './MyFriendsItem.module.scss'

const MyFriendsItem = ({friend}) => {
    const avatar = friend.photos.large ? friend.photos.large : noAvatar
    const status = friend.status ? friend.status : ''

    return (
        <li className={cn.friend}>
            <div className={cn.friend__avatar}>
                <img src={avatar} alt='avatar'/>
            </div>
            <div className={cn.friend__info}>
                <div className={cn.friend__name}>{friend.name}</div>
                {status && <div className={cn.friend__status}>{status}</div>}
                <div className={cn.friend__message}>Написать сообщение</div>
            </div>
        </li>
    )
}

export default MyFriendsItem