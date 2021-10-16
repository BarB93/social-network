import React, {useState} from 'react'

import cn from './profile.module.scss'
import Info from "../Info/Info";
import PostList from "../Post/PostList";
import CreatePost from "../CreatePost/CreatePost";

const ProfileContent = ({postsData, dispatch}) => {



    return (
        <div className={cn.profile__content}>
            <Info />
            <CreatePost dispatch={dispatch}/>
            <PostList posts={postsData} />
        </div>
    )
}

export default ProfileContent