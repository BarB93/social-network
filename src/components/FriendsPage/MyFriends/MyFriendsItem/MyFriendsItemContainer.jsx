import React from 'react'
import MyFriendsItem from './MyFriendsItem'
import {useDispatch, useSelector} from 'react-redux'
import {followFriend, unfollowFriend} from '../../../../redux/actions/friendAction'

const MyFriendsItemContainer = ({friend}) => {
    const dispatch = useDispatch()
    const {friendIdForChange, subscribeLoading,} = useSelector(state => state.friend)
    const isLoading = subscribeLoading && friendIdForChange === friend.id


    const follow = () => {
        dispatch(followFriend(friend.id))
    }

    const unfollow = () => {
        dispatch(unfollowFriend(friend.id))
    }

    return (
        <MyFriendsItem friend={friend} isLoading={isLoading} follow={follow} unfollow={unfollow}/>
    )
}

export default MyFriendsItemContainer