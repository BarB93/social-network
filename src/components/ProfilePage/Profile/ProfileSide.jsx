import React from 'react'
import Avatar from "../Avatar/Avatar";

import cn from './profile.module.scss'

const ProfileSide = () => {
    return (
        <div className={cn.profile__side}>
            <Avatar />
        </div>
    )
}

export default ProfileSide
