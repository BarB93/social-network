import React from 'react'
import Info from "../Info/Info";
import CreatePostContainer from "../CreatePost/CreatePostContainer";
import PostListContainer from "../Post/PostListContainer";

import cn from './profile.module.scss'

const ProfileContent = () => {

    return (
        <div className={cn.profile__content}>
            <Info />
            <CreatePostContainer/>
            <PostListContainer/>
        </div>
    )
}

export default ProfileContent