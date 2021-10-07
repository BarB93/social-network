import React from 'react'

import ProfileSidebar from "./ProfileSidebar";
import ProfileContent from "./ProfileContent";

import cn from './profile.module.scss'

const Profile = () => {
    return (
        <div className={cn.profile}>
            <ProfileSidebar/>
            <ProfileContent />
        </div>
    )
}

export default Profile