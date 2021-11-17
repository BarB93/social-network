import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'

import Status from './Status'

import {
	closeUpdateStatus,
	openUpdateStatus,
} from '../../../../redux/slices/profileSlice'
import { profileService } from '../../../../api/services/profileService'
import { closeMenu } from '../../../../redux/slices/headerSlice'
import CircleLoader from '../../../UI/Loader/CircleLoader/CircleLoader'

const StatusContainer = ({ userId, isAuthUserProfile }) => {
	const dispatch = useDispatch()
	const {
		data: status,
		isError,
		isFetching,
	} = profileService.useFetchStatusQuery(userId)

	const statusRef = useRef()
	const closeChangeStatus = () => {
		dispatch(closeUpdateStatus())
	}
	let openChangeStatus = () => {}
	const closeOtherElements = () => {
		dispatch(closeMenu())
	}
	if (isAuthUserProfile)
		openChangeStatus = () => {
			dispatch(openUpdateStatus())
		}

	const handleCloseUpdateStatus = (event) => {
		const path = event.path || (event.composedPath && event.composedPath())

		if (!path.includes(statusRef.current)) {
			closeChangeStatus()
		}
	}

	useEffect(() => {
		document.body.addEventListener('click', handleCloseUpdateStatus)
		return () => {
			document.body.removeEventListener('click', handleCloseUpdateStatus)
		}
	}, [])

	return (
		<>
			{isError && <div>Произошла ошибка призагрузке статуса</div>}
			{isFetching && (
				<div style={{ margin: '5px 0 0' }}>
					<CircleLoader size='15px' />
				</div>
			)}
			{!isFetching && (
				<Status
					ref={statusRef}
					status={status}
					isAuthUserProfile={isAuthUserProfile}
					openUpdateStatus={openChangeStatus}
					closeOtherElements={closeOtherElements}
				/>
			)}
		</>
	)
}

export default StatusContainer
