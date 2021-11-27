import React, { useEffect, useState } from 'react'
import { Form, Formik, Field } from 'formik'

import Box from '../../../UI/Box/Box'
import Button from '../../../UI/Button/Button'
import ItemsLoader from '../../../UI/Loader/ItemsLoader/ItemsLoader'

import styles from './UpdateStatus.module.scss'
import commonStyle from '../../../../styles/commonStyles.module.scss'

const UpdateStatus = ({
	status,
	isOpen,
	updateStatus,
	isSuccess,
	isLoading,
	closeUpdateStatus,
}) => {
	const [value, setValue] = useState(status)
	const styleBox = {
		position: 'absolute',
		padding: '0',
		left: '-20px',
		right: '-20px',
		top: '3px',
		visibility: 'hidden',
		opacity: '0',
		transform: 'translateY(10px)',
		transition: 'opacity 200ms linear, transform 200ms linear, visibility 200ms linear',
		active: isOpen,
		zIndex: 10,
	}

	useEffect(() => {
		if (value !== status) updateStatus(value)
	}, [value, status])

	useEffect(() => {
		if (isSuccess && !isLoading) closeUpdateStatus()
	}, [isSuccess, isLoading])

	return (
		<Box {...styleBox}>
			<Formik
				initialValues={{ status: value }}
				onSubmit={(values) => {
					if (values.status !== status) {
						setValue(values.status)
					} else {
						closeUpdateStatus()
					}
				}}
			>
				<Form className={styles.form}>
					<div className={commonStyle.form__inputContainer}>
						<Field
							component='textarea'
							className={commonStyle.form__textarea}
							maxLength='300'
							placeholder='Введите статус'
							name='status'
							type='text'
						/>
					</div>
					<Button p='7px 16px 8px' minWidth='96px' lh='11px' type='submit' w='fit-content'>
						{isLoading ? <ItemsLoader dots /> : 'Сохранить'}
					</Button>
				</Form>
			</Formik>
		</Box>
	)
}

export default UpdateStatus
