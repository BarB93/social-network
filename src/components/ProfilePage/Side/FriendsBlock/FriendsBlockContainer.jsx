import React from 'react'

import CircleLoader from '../../../UI/Loader/CircleLoader/CircleLoader'
import { userService } from '../../../../api/services/userService'
import { FaUndo } from 'react-icons/fa'

import commonStyle from '../../../../styles/commonStyles.module.scss'
import FriendsBlock from './FriendsBlock'

const FriendsBlockContainer = () => {
	const {
		data: friends,
		isFetching,
		isError,
		refetch,
	} = userService.useFetchUsersQuery({ limit: 9, friend: true })

	if (isError)
		return (
			<div className={commonStyle.emptyBlock}>
				<div className={commonStyle.emptyBlock__title}>
					Произошла ошибка при загрузке друзей
				</div>
				<div className={commonStyle.refetch} onClick={refetch}>
					<FaUndo />
				</div>
			</div>
		)
	if (isFetching)
		return (
			<div className={commonStyle.emptyBlock}>
				<CircleLoader />
			</div>
		)
	if (friends === undefined) return null
	return (
		<FriendsBlock friends={friends.items} friendsCount={friends.totalCount} />
	)
}

export default FriendsBlockContainer
