import React from 'react'
import Info from "../../Info/Info";
import CreatePostContainer from "../../CreatePost/CreatePostContainer";
import PostListContainer from "../../Post/PostListContainer";

import cn from '../profile.module.scss'

const ProfileContent = ({profile}) => {
    return (
        <div className={cn.profile__content}>
            <Info aboutMe={profile.aboutMe}
                  contacts={profile.contacts}
                  name={profile.fullName}
                  lookingForAJob={profile.lookingForAJob}
                  lookingForAJobDescription={profile.lookingForAJobDescription}
            />
            <CreatePostContainer/>
            <PostListContainer/>
        </div>
    )
}

export default ProfileContent