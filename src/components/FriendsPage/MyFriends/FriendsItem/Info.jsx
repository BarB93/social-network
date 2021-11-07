import React from 'react'
import {NavLink} from "react-router-dom";

import cn from './FriendsItem.module.scss'

const Info = ({friend}) => {
    const status = friend.status ? friend.status : ''

    return (
        <div className={cn.friend__info}>
            <div className={cn.friend__name}>
                <NavLink to={`/profile/${friend.id}`}>{friend.name}</NavLink>
            </div>
            {status && <div className={cn.friend__status}>{status}</div>}
            <div className={cn.friend__message}>Написать сообщение</div>
        </div>
    )
}

export default Info