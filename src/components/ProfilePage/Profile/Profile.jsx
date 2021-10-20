import React from 'react'

import ProfileSide from "./ProfileSide";
import ProfileContent from "./ProfileContent";

import cn from './profile.module.scss'

const Profile = () => {
    return (
        <div className={cn.profile}>
            <ProfileSide/>
            <ProfileContent/>
        </div>
    )
}

export default Profile