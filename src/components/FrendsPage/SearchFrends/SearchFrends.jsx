import React from 'react'
import UserListContainer from '../User/UserListContainer'

import cn from './SearchFrends.module.scss'
import commonStyles from '../commonStyles.module.scss'

const SearchFrends = () => {

    return (
        <div className={cn.search}>
            <div className={commonStyles.title}>
                <h4>Найти друзей</h4>
            </div>
            <UserListContainer />
        </div>
    )
}

export default SearchFrends