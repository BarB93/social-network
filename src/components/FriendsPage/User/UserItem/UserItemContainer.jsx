import React from 'react'

import {useDispatch} from 'react-redux'
import {follow, unfollow} from '../../../../redux/slices/userSlice'


import UserItem from "./UserItem";

const UserItemContainer = ({user}) => {
    const dispatch = useDispatch()

    const handleFollow = () => {
        dispatch(follow(user.id))
    }

    const handleUnfollow = (e) => {
        e.stopPropagation()
        dispatch(unfollow(user.id))
    }

    return <UserItem  follow={handleFollow} unfollow={handleUnfollow} user={user}/>
}

export default UserItemContainer