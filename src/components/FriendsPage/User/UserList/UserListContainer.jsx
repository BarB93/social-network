import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import UserList from './UserList'
import { fetchUsers } from '../../../../redux/actions/userAction'
import CircleLoader from '../../../UI/Loader/CircleLoader/CircleLoader'
import MessageBlock from '../../../UI/MessageBlock/MessageBlock'
import { resetUsers, setSearch } from '../../../../redux/slices/userSlice'
import { useObserver } from '../../../../hooks/useObserver'

import commonStyle from '../../../../styles/commonStyles.module.scss'

const UserListContainer = () => {
	const dispatch = useDispatch()
	const { users, isLoading, error, isInit, totalPages, currentPage, limit, search } = useSelector(
		(state) => state.user,
	)
	const lastElement = useRef()
	const pageRef = useRef(currentPage)
	useObserver({
		ref: lastElement,
		canLoad: totalPages >= pageRef.current,
		isLoading,
		currentPage: pageRef.current,
		search,
		callback: () => {
			dispatch(fetchUsers({ friend: false, count: limit, page: pageRef.current, term: search }))
			pageRef.current++
		},
	})

	useEffect(() => {
		return () => {
			dispatch(resetUsers())
			dispatch(setSearch(''))
		}
	}, [])

	useEffect(() => {
		dispatch(resetUsers())
		pageRef.current = 1
	}, [search])

	if (error) return <MessageBlock>{error}</MessageBlock>
	return (
		<>
			{isInit &&
				(users.length ? (
					<UserList users={users} />
				) : (
					<MessageBlock fontSize='1rem'>Ваш запрос не дал результатов</MessageBlock>
				))}
			{isLoading && (
				<div className={commonStyle.emptyBlock}>
					<CircleLoader />
				</div>
			)}
			<div className={commonStyle.emptyBlock} ref={lastElement} />
		</>
	)
}

export default UserListContainer
