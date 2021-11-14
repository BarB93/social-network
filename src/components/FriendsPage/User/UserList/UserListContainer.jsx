import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import UserList from './UserList'
import { fetchUsers } from '../../../../redux/actions/userAction'
import CircleLoader from '../../../UI/Loader/CircleLoader/CircleLoader'
import MessageBlock from '../../../UI/MessageBlock/MessageBlock'
import { resetUsers } from '../../../../redux/slices/userSlice'
import { useObserver } from '../../../../hooks/useObserver'

import commonStyle from '../../../../styles/commonStyles.module.scss'

const UserListContainer = () => {
	const dispatch = useDispatch()
	const { users, isLoading, error, isInit, totalPages, currentPage, limit } =
		useSelector((state) => state.user)
	const lastElement = useRef()
	const pageRef = useRef(currentPage)
	useObserver(lastElement, totalPages >= pageRef.current, isLoading, () => {
		dispatch(fetchUsers({ friend: false, count: limit, page: pageRef.current }))
		pageRef.current += 1
	})

	useEffect(() => {
		return () => {
			dispatch(resetUsers())
		}
	}, [])

	return (
		<>
			{isInit &&
				!error &&
				(users.length ? (
					<UserList users={users} />
				) : (
					<MessageBlock>Совпадений не найдено</MessageBlock>
				))}
			{isLoading && !error && (
				<div className={commonStyle.emptyBlock}>
					<CircleLoader />
				</div>
			)}
			{error && <MessageBlock>{error}</MessageBlock>}
			<div className={commonStyle.emptyBlock} ref={lastElement} />
		</>
	)
}

export default UserListContainer
