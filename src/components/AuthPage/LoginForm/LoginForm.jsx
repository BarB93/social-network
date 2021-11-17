import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import * as Yup from 'yup'
import { Form, Field, Formik, ErrorMessage } from 'formik'
import Button from '../../UI/Button/Button'
import Box from '../../UI/Box/Box'
import { login } from '../../../redux/actions/authAction'

import cn from './LoginForm.module.scss'
import commonStyle from '../../../styles/commonStyles.module.scss'

const LoginForm = () => {
	const dispatch = useDispatch()
	const { wrongData } = useSelector((state) => state.auth)
	const initialValues = {
		email: '',
		password: '',
		rememberMe: false,
		captcha: true,
	}
	const validationSchema = Yup.object({
		email: Yup.string()
			.email('Некорректный email')
			.required('Обязательное поле'),
		password: Yup.string().required('Обязательное поле'),
		rememberMe: Yup.boolean(),
		captcha: Yup.boolean(),
	})
	const onSubmit = (values) => {
		const loginData = {
			email: values.email,
			password: values.password,
			rememberMe: values.rememberMe,
			captcha: values.captcha,
		}

		dispatch(login(loginData))
	}

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={onSubmit}
		>
			<Form className={commonStyle.form}>
				<Box padding='25px 30px'>
					<div className={cn.form__title}>Войти в аккаунт</div>
					<div className={commonStyle.form__inputContainer}>
						<ErrorMessage name='email'>
							{(msg) => <span className={commonStyle.form__error}>{msg}</span>}
						</ErrorMessage>
						<Field
							className={commonStyle.form__input}
							name='email'
							label='Email'
							placeholder='Email'
						/>
					</div>
					<div className={commonStyle.form__inputContainer}>
						<ErrorMessage name='password'>
							{(msg) => <span className={commonStyle.form__error}>{msg}</span>}
						</ErrorMessage>
						<Field
							className={commonStyle.form__input}
							type='password'
							name='password'
							placeholder='Пароль'
						/>
					</div>
					<div>
						<label className={commonStyle.form__label}>
							<Field
								className={commonStyle.form__checkbox}
								type='checkbox'
								name='rememberMe'
							/>
							<span className={commonStyle.form__labelText}>
								Запомнить меня
							</span>
						</label>
					</div>

					{wrongData ? (
						<span className={commonStyle.form__error}>wrongData</span>
					) : null}
					<Button
						minWidth='120px'
						type='submit'
						m='20px 0 0 0'
						p='10px 20px'
						w='content-fit'
					>
						Войти
					</Button>
				</Box>
			</Form>
		</Formik>
	)
}

export default LoginForm
