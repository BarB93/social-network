import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'

import LoginForm from './LoginForm'
import { login } from '../../../redux/actions/authAction'

const LoginFormContainer = () => {
	const dispatch = useDispatch()
	const { wrongData } = useSelector((state) => state.auth)

	const initialValues = {
		email: '',
		password: '',
		rememberMe: false,
	}
	const validationSchema = Yup.object({
		email: Yup.string()
			.email('Некорректный email')
			.required('Обязательное поле'),
		password: Yup.string().required('Обязательное поле'),
		rememberMe: Yup.boolean(),
		captcha: Yup.boolean(),
	})

	const onSubmit = (values, { setSubmitting, resetForm }) => {
		const loginData = {
			email: values.email,
			password: values.password,
			rememberMe: values.rememberMe,
		}
		const callbackOnEndRequest = () => {
			setSubmitting(false)
			resetForm(initialValues)
		}

		dispatch(login({ loginData, callbackOnEndRequest }))
	}

	return (
		<LoginForm
			onSubmit={onSubmit}
			initialValues={initialValues}
			validationSchema={validationSchema}
			wrongData={wrongData}
		/>
	)
}

export default LoginFormContainer
