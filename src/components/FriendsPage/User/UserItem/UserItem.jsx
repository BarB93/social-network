import React from 'react'
import {NavLink} from 'react-router-dom'
import UserPupup from '../UserPopup/UserPupup'
import noAvatar from '../../../../assets/images/no_avatar.png'

import {FaUserPlus} from 'react-icons/fa'
import cn from '../User.module.scss'

const UserItem = ({user, follow, unfollow, isLoading}) => {
    const avatar = user.photos.large ? user.photos.large : noAvatar

    return (
        <div className={cn.user__item}>
            <div className={cn.user__avatar}>
                <NavLink to={`/profile/${user.id}`} >
                    <img className={cn.user__img} src={avatar} alt='avatar'/>
                </NavLink>
                {(isLoading || user.followed)
                    && <UserPupup unfollow={unfollow} isLoading={isLoading}/>
                }
            </div>
            <div className={cn.user__info}>
                <NavLink to={`/profile/${user.id}`} className={cn.user__name}>{user.name}</NavLink>
                <div className={cn.user__button}>
                    {!user.followed
                        && <button onClick={follow} className={cn.user__add}><FaUserPlus  className={cn.user__icon}/></button>
                    }
                </div>

            </div>
        </div>
    )
}

export default UserItem