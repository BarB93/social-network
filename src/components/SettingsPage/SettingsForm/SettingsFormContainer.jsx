import React from 'react'

import { useSelector } from 'react-redux'
import SettingsForm from './SettingsForm'
import { profileService } from '../../../api/services/profileService'

const SettingsFormContainer = () => {
	const {
		fullName,
		aboutMe,
		userId,
		lookingForAJob,
		lookingForAJobDescription,
		contacts: {
			github,
			vk,
			facebook,
			instagram,
			twitter,
			website,
			youtube,
			mainLink,
		},
	} = useSelector((state) => state.profile.myProfile)

	const [updateProfile, { isLoading: isUpdatingProfile }] =
		profileService.useUpdateProfileMutation()

	const initialValues = {
		userId,
		fullName,
		aboutMe,
		lookingForAJob,
		lookingForAJobDescription,
		github,
		vk,
		facebook,
		instagram,
		twitter,
		website,
		youtube,
		mainLink,
	}

	const handleOnSubmit = ({
		userId,
		fullName,
		aboutMe,
		lookingForAJob,
		lookingForAJobDescription,
		github,
		vk,
		facebook,
		instagram,
		twitter,
		website,
		youtube,
		mainLink,
	}) => {
		const result = {
			userId,
			fullName,
			aboutMe,
			lookingForAJob,
			lookingForAJobDescription,
			contacts: {
				github,
				vk,
				facebook,
				instagram,
				twitter,
				website,
				youtube,
				mainLink,
			},
		}
		updateProfile(result)
	}

	return (
		<SettingsForm
			initialValues={initialValues}
			handleOnSubmit={handleOnSubmit}
			isUpdatingProfile={isUpdatingProfile}
		/>
	)
}

export default SettingsFormContainer
