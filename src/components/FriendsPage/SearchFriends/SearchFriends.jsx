import React from 'react'
import UserListContainer from '../User/UserList/UserListContainer'

import cn from './SearchFriends.module.scss'
import commonStyles from '../../../styles/commonStyles.module.scss'
import {useSelector} from 'react-redux'

const SearchFriends = () => {
    const {totalUsers} = useSelector(state => state.user)

    return (
        <div className={cn.search}>
            <div className={commonStyles.title}>
                <h4 className={commonStyles.title__header}>
                    Найти друзей
                    <span className={commonStyles.title__amount}>{totalUsers}</span>
                </h4>
            </div>
            <UserListContainer />
        </div>
    )
}

export default SearchFriends