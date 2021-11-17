import React from 'react'
import UpdateStatus from './UpdateStatus'
import { useSelector } from 'react-redux'
import { profileService } from '../../../../api/services/profileService'
import { closeUpdateStatus } from '../../../../redux/slices/profileSlice'
import { useDispatch } from 'react-redux'

const UpdateStatusContainer = ({ status }) => {
	const dispatch = useDispatch()
	const [updateStatus, { isLoading, isError, isSuccess }] =
		profileService.useUpdateStatusMutation()
	const { isOpenUpdateStatus } = useSelector((state) => state.profile)
	const handleUpdateStatus = (status) => {
		updateStatus({ status })
	}
	const handleCloseUpdateStatus = () => {
		dispatch(closeUpdateStatus())
	}
	return (
		<>
			{isError && <div>Во время обновления статуса произошла ошибка</div>}
			{isOpenUpdateStatus ? (
				<UpdateStatus
					status={status}
					updateStatus={handleUpdateStatus}
					isLoading={isLoading}
					isSuccess={isSuccess}
					isOpen={isOpenUpdateStatus}
					closeUpdateStatus={handleCloseUpdateStatus}
				/>
			) : null}
		</>
	)
}

export default UpdateStatusContainer
