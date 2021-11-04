import React from 'react'
import MyFriendsItem from '../MyFriendsItem/MyFriendsItem'
import Box from '../../../UI/Box/Box'

import cn from './MyFriendsList.module.scss'

const MyFriendsList = ({friends}) => {
    const friendsList = friends.map(f => <MyFriendsItem key={f.id} friend={f}/>)

    return (
        <ul className={cn.friends}>
            {friendsList}
        </ul>
    )
}

export default MyFriendsList