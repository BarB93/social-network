import React from 'react'
import {NavLink} from 'react-router-dom'
import {useSelector} from 'react-redux'
import MyFriendsListContainer from './MyFriendsList/MyFriendsListContainer'
import Button from '../../UI/Button/Button'

import commonStyles from '../../../styles/commonStyles.module.scss'

const MyFriends = () => {
    const {totalFriends} = useSelector(state => state.friend)

    return (
        <>
            <div>
                <div className={commonStyles.title}>
                    <h4 className={commonStyles.title__header}>
                        Все друзья
                        <span className={commonStyles.title__amount}>{totalFriends}</span>
                    </h4>
                    <NavLink to='/friends/search'>
                        <Button
                            fontSize='0.9rem'
                            height='25px'
                        >
                            Найти друзей</Button>
                    </NavLink>
                </div>
                {/*{friendsCount*/}
                {/*    ? <div>Мои друзья</div>*/}
                {/*    : <div className={commonStyles.emptyBlock}>Ни одного друга не добавлено</div>*/}
                {/*}*/}
            </div>
            <MyFriendsListContainer />
        </>
    )
}

export default MyFriends