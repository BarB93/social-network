import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import UserList from './UserList'
import {setUsers} from "../../../redux/slices/friendsSlice";

import commonStyles from '../commonStyles.module.scss'
import {fetchUsers} from "../../../api/api";

const UserListContainer = () => {
    const dispatch = useDispatch()
    const users = useSelector(state => state.friends.users)

    useEffect(async () => {
       await fetchUsers()
    }, [])

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