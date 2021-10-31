import React from 'react'
import UserItemContainer from "../UserItem/UserItemContainer";

import cn from '../user.module.scss'

const UserList = ({users}) => {
    const usersItems = users.map(u => <UserItemContainer key={u.id} user={u} />)

    return (
        <ul className={cn.user__list}>
            {usersItems}
        </ul>

    )
}

export default UserList