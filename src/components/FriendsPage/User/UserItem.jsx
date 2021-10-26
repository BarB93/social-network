import React from 'react'
import {NavLink} from 'react-router-dom'
import UserPupup from './UserPopup/UserPupup'

import {FaUserPlus} from 'react-icons/fa'
import cn from './user.module.scss'

const UserItem = ({user, follow, unfollow}) => {



    return (
        <div className={cn.user__item}>
            <div className={cn.user__avatar}>
                <NavLink to='/friends/77' >
                    <img className={cn.user__img} src='https://vk.com/images/camera_200.png' alt='avatar'/>
                </NavLink>
                {user.followed
                    && <UserPupup unfollow={unfollow}/>
                }
            </div>
            <div className={cn.user__info}>
                <NavLink to='/friends/77' className={cn.user__name}>{user.fullName}</NavLink>
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