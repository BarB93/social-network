import React from 'react'

import cn from './profile.module.scss'
import Info from "../Info/Info";
import PostList from "../Post/PostList";
import CreatePost from "../CreatePost/CreatePost";

const ProfileContent = ({posts}) => {
    return (
        <div className={cn.profile__content}>
            <Info />
            <CreatePost />
            <PostList posts={posts}/>
        </div>
    )
}

export default ProfileContent