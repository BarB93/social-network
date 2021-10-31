import React, {useEffect, useRef} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import UserList from './UserList'
import {fetchUsers} from "../../../../redux/actions/userAction";
import CircleLoader from "../../../UI/Loader/CircleLoader/CircleLoader";
import UserError from "../UserError/UserError";
import {setCurrentPage, resetUsers} from "../../../../redux/slices/userSlice";

import commonStyles from '../../commonStyles.module.scss'

const UserListContainer = () => {
    const dispatch = useDispatch()
    const {users, isLoading, error, isInit, totalPages, currentPage, limit} = useSelector(state => state.user)
    const lastElement = useRef()
    const observer = useRef()

    useEffect(() => {
        if(isLoading) return
        if(observer.current) observer.current.disconnect()

        const options = {
            root: document,
            rootMargin: '0px',
            threshold: 0
        }
        const callback = (entries, observer) => {
            if(entries[0].isIntersecting && currentPage < totalPages) {
                console.log('intersection')
                dispatch(setCurrentPage(currentPage + 1 ))
            }
        }

        observer.current = new IntersectionObserver(callback, options)
        observer.current.observe(lastElement.current)

    },[isLoading])

    useEffect(() => {
        dispatch(fetchUsers({friend: false, count: limit, page: currentPage}))
    }, [currentPage, limit])


    useEffect(() => {
        return  () => {
            console.log('unmounted')
            dispatch(resetUsers())
        }

    },[])


    return (
        <>
            {error && <UserError />
            }
            {isInit && !error &&
                (
                    users.length
                        ? <UserList users={users}/>
                        : <div className={commonStyles.emptyBlock}>Совпадений не найдено</div>
                )
            }
            <div style={{height: 20, background: 'red'}} ref={lastElement}/>
            {isLoading && <div className={commonStyles.emptyBlock}><CircleLoader/></div>}
        </>
    )

}

export default UserListContainer