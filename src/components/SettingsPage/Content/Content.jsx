import React from 'react'
import Box from '../../UI/Box/Box'
import SettingsFormContainer from '../SettingsForm/SettingsFormContainer'
import { useSelector } from 'react-redux'

const Content = () => {
	const { isInitial } = useSelector((state) => state.profile)

	return (
		<Box padding='0 0 15px 0'>{isInitial && <SettingsFormContainer />}</Box>
	)
}

export default Content
