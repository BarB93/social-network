import React from 'react'
import Profile from "../components/ProfilePage/Profile/Profile";

const ProfilePage = ({state, dispatch}) => {
    return <Profile posts={state.posts} dispatch={dispatch}/>
}

export default ProfilePage
