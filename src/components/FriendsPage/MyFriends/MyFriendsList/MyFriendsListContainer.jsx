import React, {useEffect, useRef} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useObserver} from '../../../../hooks/useObserver'
import {fetchAllFriends} from '../../../../redux/actions/friendAction'
import {resetFriends, setCurrentPage} from '../../../../redux/slices/friendSlice'
import MyFriendsList from './MyFriendsList'
import MessageBlock from '../../../UI/MessageBlock/MessageBlock'
import CircleLoader from '../../../UI/Loader/CircleLoader/CircleLoader'

import commonStyle from '../../../../styles/commonStyles.module.scss'

const MyFriendsListContainer = () => {
    const dispatch = useDispatch()
    const {isLoading, friends, currentPage, totalPages, limit, error, isInit} = useSelector(state => state.friend)
    const lastElement = useRef()
    const pageRef = useRef(currentPage)
    debugger
    useObserver(lastElement, totalPages >= pageRef.current, isLoading,
        () => {
            console.log('inCallback')
            dispatch(fetchAllFriends({friend: true, count: limit, page: pageRef.current, }))
            pageRef.current += 1
        }
    )

    useEffect(() => {
        return () => {
            dispatch(resetFriends())
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
            <div style={{height: '10px'}} ref={lastElement}/>
        </>
    )
}

export default MyFriendsListContainer