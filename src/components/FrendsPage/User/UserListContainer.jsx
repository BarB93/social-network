import React from 'react'
import {useSelector} from 'react-redux'
import UserList from './UserList'

import cn from './user.module.scss'
import commonStyles from '../commonStyles.module.scss'

const UserListContainer = () => {
    let users = useSelector(state => state.frends.users)

    return (
        <>
            {users.length
                ? <UserList users={users}/>
                : <div className={commonStyles.emptyBlock}>Совпадений не найдено</div>
            }
        </>
    )

}

export default UserListContainer