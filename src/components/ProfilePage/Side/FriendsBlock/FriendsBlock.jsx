import React from 'react'

import CircleLoader from '../../../UI/Loader/CircleLoader/CircleLoader'
import { userService } from '../../../../api/services/userService'
import { FaUndo } from 'react-icons/fa'

import commonStyle from '../../../../styles/commonStyles.module.scss'

const FriendsBlock = () => {
	const {
		data: frends,
		isFetching,
		isError,
		refetch,
	} = userService.useFetchUsersQuery(6, true)

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
	if (frends === undefined) return null
	return <div>{JSON.stringify(frends)}</div>
}

export default FriendsBlock
