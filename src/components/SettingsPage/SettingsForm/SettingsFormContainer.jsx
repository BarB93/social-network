import React from 'react'

import * as Yup from 'yup'
import { useSelector } from 'react-redux'
import SettingsForm from './SettingsForm'
import { profileService } from '../../../api/services/profileService'

const SettingsFormContainer = () => {
	const [updateProfile, { isLoading: isUpdatingProfile }] =
		profileService.useUpdateProfileMutation()

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

	const regExpURL =
		/^((https?):\/\/)?(www.)?[a-z0-9-]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#-]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/i
	const validationSchema = Yup.object({
		github: Yup.lazy((value) =>
			!value
				? Yup.string()
				: Yup.string().matches(regExpURL, 'Некорректная ссылка'),
		),
		vk: Yup.lazy((value) =>
			!value
				? Yup.string()
				: Yup.string().matches(regExpURL, 'Некорректная ссылка'),
		),
		facebook: Yup.lazy((value) =>
			!value
				? Yup.string()
				: Yup.string().matches(regExpURL, 'Некорректная ссылка'),
		),
		instagram: Yup.lazy((value) =>
			!value
				? Yup.string()
				: Yup.string().matches(regExpURL, 'Некорректная ссылка'),
		),
		twitter: Yup.lazy((value) =>
			!value
				? Yup.string()
				: Yup.string().matches(regExpURL, 'Некорректная ссылка'),
		),
		website: Yup.lazy((value) =>
			!value
				? Yup.string()
				: Yup.string().matches(regExpURL, 'Некорректная ссылка'),
		),
		youtube: Yup.lazy((value) =>
			!value
				? Yup.string()
				: Yup.string().matches(regExpURL, 'Некорректная ссылка'),
		),
		mainLink: Yup.lazy((value) =>
			!value
				? Yup.string()
				: Yup.string().matches(regExpURL, 'Некорректная ссылка'),
		),
	})

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
			validationSchema={validationSchema}
			initialValues={initialValues}
			handleOnSubmit={handleOnSubmit}
			isUpdatingProfile={isUpdatingProfile}
		/>
	)
}

export default SettingsFormContainer
