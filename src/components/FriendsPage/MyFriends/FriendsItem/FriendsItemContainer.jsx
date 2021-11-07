import React from 'react'
import FriendsItem from './FriendsItem'
import {useDispatch, useSelector} from 'react-redux'
import {followFriend, unfollowFriend} from '../../../../redux/actions/friendAction'

const FriendsItemContainer = ({friend}) => {
    const dispatch = useDispatch()
    const {subscribingInProgress} = useSelector(state => state.friend)
    const isLoading = subscribingInProgress.includes(friend.id)


    const follow = () => {
        dispatch(followFriend(friend.id))
    }

    const unfollow = () => {
        dispatch(unfollowFriend(friend.id))
    }

    return (
        <FriendsItem friend={friend} isLoading={isLoading} follow={follow} unfollow={unfollow}/>
    )
}

export default FriendsItemContainer