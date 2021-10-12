import React from 'react'

import cn from './profile.module.scss'
import Info from "./Info/Info";
import PostList from "./Post/PostList";

const ProfileContent = () => {
    return (
        <div className={cn.profile__content}>
            <Info />
            <PostList />
        </div>
    )
}

export default ProfileContent