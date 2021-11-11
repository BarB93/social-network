import React from 'react'
import CircleLoader from '../../../UI/Loader/CircleLoader/CircleLoader'
import Menu from './Menu/Menu'
import Avatar from './Avatar'
import Info from './Info'


import cn from './FriendsItem.module.scss'

const FriendsItem = ({friend, follow, unfollow, isLoading}) => {
    const classUnfollowed = friend.followed ? '' : cn.unfollowed

    return (
        <li className={`${cn.friend} ${classUnfollowed}`}>
            <Avatar friend={friend}/>
            <Info friend={friend}/>
            <div className={cn.friend__dots}>
                {isLoading
                    ? <CircleLoader />
                    : (friend.followed
                        ? <Menu friend={friend} unfollow={unfollow}/>
                        : <span className={cn.friend__cancel} onClick={follow}>Отмена</span>
                    )
                }
            </div>
        </li>
    )
}

export default FriendsItem