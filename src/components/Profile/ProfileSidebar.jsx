import React from 'react'

import cn from './profile.module.scss'
import Avatar from "./Avatar/Avatar";

const ProfileSidebar = () => {
    return (
        <div className={cn.profile__sidebar}>
            <Avatar />
        </div>
    )
}

export default ProfileSidebar
