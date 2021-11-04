import React, {useEffect, useRef} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useObserver} from '../../../../hooks/useObserver'
import {fetchAllFriends} from '../../../../redux/actions/friendAction'
import {setCurrentPage} from '../../../../redux/slices/friendSlice'
import MyFriendsList from './MyFriendsList'
import MessageBlock from '../../../UI/MessageBlock/MessageBlock'
import CircleLoader from '../../../UI/Loader/CircleLoader/CircleLoader'


import commonStyle from '../../../../styles/commonStyles.module.scss'
// import cn from './MyFriendsList.module.scss'

const MyFriendsListContainer = () => {
    const dispatch = useDispatch()
    const {isLoading, friends, currentPage, totalPages, limit, error, isInit} = useSelector(state => state.friend)
    const lastElement = useRef()
    const pageRef = useRef(currentPage)
    useObserver(lastElement, totalPages > pageRef.current, isLoading,
        () => {
            console.log('inCallback')
            dispatch(fetchAllFriends({friend: true, count: limit, page: pageRef.current, }))
            pageRef.current += 1
        }
    )

    useEffect(() => {
        return () => {
            dispatch(setCurrentPage())
        }
    },[])

    return (
        <>
            {isInit && !error &&
            (
                friends.length
                    ? <MyFriendsList friends={friends}/>
                    : <MessageBlock>Совпадений не найдено</MessageBlock>
            )
            }
            {isLoading && !error && <div className={commonStyle.emptyBlock}><CircleLoader/></ div>}
            {error && <MessageBlock>{error}</MessageBlock>}
            <div ref={lastElement}/>
        </>
    )
}

export default MyFriendsListContainer