import React from 'react'
import UserItem from './UserItem'

import cn from './user.module.scss'

const UserList = ({users}) => {
    const usersItems = users.map(u => <UserItem key={u.id} user={u} />)

    return (
        <ul className={cn.user__list}>
            {usersItems}
        </ul>

    )
}

export default UserList