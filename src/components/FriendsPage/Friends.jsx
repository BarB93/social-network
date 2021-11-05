import React from 'react'
import FriendsContent from './FriendsContent/FriendsContent'
import FriendsSide from './FriendsSide/FriendsSide'

import cn from './friends.module.scss'

const Friends = () => {
    return (
        <div className={cn.friends}>
            <FriendsContent/>
            <FriendsSide/>
        </div>
    )
}

export default Friends