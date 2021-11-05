import React from 'react'
import MyFriendsItemContainer from '../MyFriendsItem/MyFriendsItemContainer'

import cn from './MyFriendsList.module.scss'

const MyFriendsList = ({friends}) => {
    const friendsList = friends.map(f => <MyFriendsItemContainer key={f.id} friend={f}/>)

    return (
        <ul className={cn.friends}>
            {friendsList}
        </ul>
    )
}

export default MyFriendsList