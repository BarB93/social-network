import React from 'react'
import {NavLink} from 'react-router-dom'
import Box from '../../../UI/Box/Box'
import CircleLoader from '../../../UI/Loader/CircleLoader/CircleLoader'


import noAvatar from '../../../../assets/images/no_avatar.png'
import cn from './MyFriendsItem.module.scss'
import MyFriendMenu from './MyFriendMenu/MyFriendMenu'

const MyFriendsItem = ({friend, follow, unfollow, isLoading}) => {
    const avatar = friend.photos.large ? friend.photos.large : noAvatar
    const status = friend.status ? friend.status : ''
    const classUnfollow = friend.followed ? '' : cn.unfollowed

    return (
        <li className={`${cn.friend} ${classUnfollow}`}>
            <div className={cn.friend__avatar}>
               <NavLink to={`/profile/${friend.id}`}><img src={avatar} alt='avatar'/></NavLink>
            </div>
            <div className={cn.friend__info}>
                <div className={cn.friend__name}>
                    <NavLink to={`/profile/${friend.id}`}>{friend.name}</NavLink>
                </div>
                {status && <div className={cn.friend__status}>{status}</div>}
                <div className={cn.friend__message}>Написать сообщение</div>
            </div>
            <div className={cn.friend__menu}>
                {isLoading
                    ? <CircleLoader />
                    : (friend.followed
                        ? <MyFriendMenu friend={friend} unfollow={unfollow}/>
                        : <span className={cn.friend__cancel} onClick={follow}>Отмена</span>
                    )
                }
            </div>
        </li>
    )
}

export default MyFriendsItem