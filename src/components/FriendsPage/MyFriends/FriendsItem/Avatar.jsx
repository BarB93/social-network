import React from 'react'
import {NavLink} from "react-router-dom";
import noAvatar from "../../../../assets/images/no_avatar.png";

import cn from './FriendsItem.module.scss'

const Avatar = ({friend}) => {
    const avatar = friend.photos.large ? friend.photos.large : noAvatar

    return (
        <div className={cn.friend__avatar}>
            <NavLink to={`/profile/${friend.id}`}><img src={avatar} alt='avatar'/></NavLink>
        </div>
    )
}

export default Avatar