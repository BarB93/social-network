import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Formik } from 'formik'

import Button from '../../UI/Button/Button'
import AllBlocks from './AllBlocks.jsx/AllBlocks'
import WorkBlock from './WorkBlock/WorkBlock'
import ContactsBlock from './ContactsBlock/ContactsBlock'
import MainBlock from './MainBlock/MainBlock'
import ItemsLoader from '../../UI/Loader/ItemsLoader/ItemsLoader'

import cn from '../Settings.module.scss'

const SettingsForm = ({
	initialValues,
	handleOnSubmit,
	isUpdatingProfile,
	validationSchema,
}) => {
	const [lookingForAJob, setLookingForAJob] = useState(
		initialValues.lookingForAJob,
	)

	const handleIsLookingForTrue = () => {
		setLookingForAJob(true)
	}

	const handleIsLookingForFalse = () => {
		setLookingForAJob(false)
	}

	const lookingForAJobSettings = {
		isLookingFor: lookingForAJob,
		handlerTrue: handleIsLookingForTrue,
		handlerFalse: handleIsLookingForFalse,
	}

	return (
		<>
			<Formik
				initialValues={initialValues}
				onSubmit={handleOnSubmit}
				validationSchema={validationSchema}
			>
				{(formik) => {
					return (
						<form onSubmit={formik.handleSubmit} className={cn.form}>
							<Routes>
								<Route
									path='/'
									element={
										<AllBlocks
											lookingForAJobSettings={lookingForAJobSettings}
											formik={formik}
										/>
									}
								/>
								<Route path='/main' element={<MainBlock header />} />
								<Route
									path='/work'
									element={
										<WorkBlock
											header
											lookingForAJobSettings={lookingForAJobSettings}
										/>
									}
								/>
								<Route
									path='/contacts'
									element={<ContactsBlock header formik={formik} />}
								/>
							</Routes>

							<div className={cn.form__button}>
								<Button
									minWidth='100px'
									disabled={isUpdatingProfile || !formik.isValid}
									type='submit'
									w='fit-content'
									p='6px 20px 7px'
								>
									{isUpdatingProfile ? <ItemsLoader dots /> : 'Сохранить'}
								</Button>
							</div>
						</form>
					)
				}}
			</Formik>
		</>
	)
}

export default SettingsForm
