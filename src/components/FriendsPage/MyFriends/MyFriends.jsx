import React from 'react'
import {NavLink} from 'react-router-dom'
import Button from '../../UI/Button/Button'

import cn from './MyFriends.module.scss'
import commonStyles from '../../../styles/commonStyles.module.scss'
import MyFriendsListContainer from './MyFriendsList/MyFriendsListContainer'

const MyFriends = ({friends = []}) => {
    const friendsCount = friends.length

    return (
        <>
            <div className={cn.myFriends}>
                <div className={commonStyles.title}>
                   <h4 className={cn.myFriends__title}>Все друзья</h4>
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