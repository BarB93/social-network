import React from 'react'
import UpdateAvatar from './UpdateAvatar'
import { useDispatch } from 'react-redux'
import { updatePhoto } from '../../../../../redux/actions/profileAction'

const UpdateAvatarContainer = () => {
	const dispatch = useDispatch()
	const handleOnChangeFile = (e) => {
		const formData = new FormData()
		formData.append('image', e.target.files[0])
		dispatch(updatePhoto({ photoFile: formData }))
	}

	return <UpdateAvatar handleOnChangeFile={handleOnChangeFile} />
}

export default UpdateAvatarContainer
