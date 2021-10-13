import React from 'react'
import Profile from "../components/ProfilePage/Profile/Profile";

const ProfilePage = ({state}) => {
    return <Profile posts={state.posts}/>
}

export default ProfilePage
