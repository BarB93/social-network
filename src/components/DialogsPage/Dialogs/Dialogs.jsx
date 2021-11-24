import React from 'react'

import CircleLoader from '../../UI/Loader/CircleLoader/CircleLoader'
import Box from '../../UI/Box/Box'
import DialogList from './DialogList'
import { userService } from '../../../api/services/userService'

import commonStyle from '../../../styles/commonStyles.module.scss'
import cn from './dialogs.module.scss'

const Dialogs = () => {
	const {
		data: dialogs,
		isFetching,
		isError,
	} = userService.useFetchUsersQuery({ limit: 10, friend: true })

	if (isError) return <div>Произошла ошибка при загрузке диалогов</div>
	if (isFetching)
		return (
			<div className={commonStyle.emptyBlock}>
				<CircleLoader />
			</div>
		)
	if (dialogs === undefined) return null
	return (
		<div className={cn.dialog}>
			<Box padding='0'>
				<div className={commonStyle.title}>Диалоги</div>
				<DialogList dialogs={dialogs.items} />
			</Box>
		</div>
	)
}

export default Dialogs
