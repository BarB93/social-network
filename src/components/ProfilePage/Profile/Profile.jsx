import React from 'react'

import ProfileSide from "./ProfileSide";
import ProfileContent from "./ProfileContent";

import cn from './profile.module.scss'

const Profile = ({posts, dispatch}) => {
    return (
        <div className={cn.profile}>
            <ProfileSide/>
            <ProfileContent postsData={posts} dispatch={dispatch}/>
        </div>
    )
}

export default Profile