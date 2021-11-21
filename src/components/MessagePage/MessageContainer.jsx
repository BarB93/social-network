import React from 'react'
import { useParams } from 'react-router-dom'

import { profileService } from '../../api/services/profileService'
import Message from './Message'
import commonStyle from '../../styles/commonStyles.module.scss'
import CircleLoader from '../UI/Loader/CircleLoader/CircleLoader'

const MessageContainer = () => {
	const { userId } = useParams()
	const {
		data: dialog,
		isFetching: isFetchingDialog,
		isError: isErrorDialog,
	} = profileService.useFetchProfileQuery(userId)

	if (isErrorDialog) return <div>Произошла ошибка при загрузке сообщений</div>
	if (isFetchingDialog)
		return (
			<div className={commonStyle.emptyBlock}>
				<CircleLoader />
			</div>
		)
	if (dialog === undefined) return null
	return <Message dialog={dialog} />
}

export default MessageContainer
