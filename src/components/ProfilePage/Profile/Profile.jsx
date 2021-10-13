import React from 'react'

import ProfileSide from "./ProfileSide";
import ProfileContent from "./ProfileContent";

import cn from './profile.module.scss'

const Profile = ({posts}) => {
    return (
        <div className={cn.profile}>
            <ProfileSide/>
            <ProfileContent posts={posts}/>
        </div>
    )
}

export default Profile