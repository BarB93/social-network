import React from 'react'
import UserListContainer from '../User/UserList/UserListContainer'

import cn from './SearchFriends.module.scss'
import commonStyles from '../commonStyles.module.scss'

const SearchFriends = () => {

    return (
        <div className={cn.search}>
            <div className={commonStyles.title}>
                <h4>Найти друзей</h4>
            </div>
            <UserListContainer />
        </div>
    )
}

export default SearchFriends