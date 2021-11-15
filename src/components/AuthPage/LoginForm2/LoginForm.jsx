// import React from 'react'
// import { Formik } from 'formik'
// import * as Yup from 'yup'

// const LoginForm = () => {
//     return (
//         <Formik
//             initialValues={{ firstName: '', lastName: '', email: '' }}
//             validationSchema={Yup.object({
//                 firstName: Yup.string()
//                     .max(15, 'Must be 15 characters or less')
//                     .required('Required'),
//                 lastName: Yup.string()
//                     .max(20, 'Must be 20 characters or less')
//                     .required('Required'),
//                 email: Yup.string().email('Invalid email address').required('Required'),
//             })}
//             onSubmit={(values, { setSubmitting }) => {
//                 setTimeout(() => {
//                     alert(JSON.stringify(values, null, 2))
//                     setSubmitting(false)
//                 }, 400)
//             }}
//         >
//             {formik => (
//                 <form onSubmit={formik.handleSubmit}>
//                     <label htmlFor='firstName'>First Name</label>
//                     <input
//                         id='firstName'
//                         type='text'
//                         {...formik.getFieldProps('firstName')}
//                     />
//                     {formik.touched.firstName && formik.errors.firstName ? (
//                         <div>{formik.errors.firstName}</div>
//                     ) : null}
//
//                     <label htmlFor='lastName'>Last Name</label>
//                     <input
//                         id='lastName'
//                         type='text'
//                         {...formik.getFieldProps('lastName')}
//                     />
//                     {formik.touched.lastName && formik.errors.lastName ? (
//                         <div>{formik.errors.lastName}</div>
//                     ) : null}
//
//                     <label htmlFor='email'>Email Address</label>
//                     <input id='email' type='email' {...formik.getFieldProps('email')} />
//                     {formik.touched.email && formik.errors.email ? (
//                         <div>{formik.errors.email}</div>
//                     ) : null}
//
//                     <button type='submit'>Submit</button>
//                 </form>
//             )}
//         </Formik>
//     )
// }
//
// export default LoginForm

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import * as Yup from 'yup'
import { Field, Formik } from 'formik'
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
	const onSubmit = (values, { setSubmitting }) => {
		const loginData = {
			email: values.email,
			password: values.password,
			rememberMe: values.rememberMe,
			captcha: values.captcha,
		}

		dispatch(login(loginData))
		setSubmitting(false)
	}

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={onSubmit}
		>
			{(formik) => {
				console.log('FORMIKK', formik)
				return (
					<form className={commonStyle.form} onSubmit={formik.handleSubmit}>
						<Box padding='25px 30px'>
							<div className={cn.form__title}>Войти в аккаунт</div>
							{formik.touched.email && formik.errors.email ? (
								<span className={commonStyle.form__error}>
									{formik.errors.email}
								</span>
							) : null}
							<div className={commonStyle.form__inputContainer}>
								<input
									className={commonStyle.form__input}
									id='email'
									type='text'
									{...formik.getFieldProps('email')}
								/>
							</div>

							{formik.touched.password && formik.errors.password ? (
								<span className={commonStyle.form__error}>
									{formik.errors.password}
								</span>
							) : null}
							<div className={commonStyle.form__inputContainer}>
								<input
									className={commonStyle.form__input}
									id='password'
									type='password'
									{...formik.getFieldProps('password')}
								/>
							</div>
							<div className={commonStyle.form__inputContainer}>
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
								<span className={commonStyle.form__error}>{wrongData}</span>
							) : null}
							<div>
								<Button
									disabled={
										!(formik.isValid && formik.dirty && !formik.isSubmitting)
									}
									minWidth='120px'
									type='submit'
									p='10px 20px'
									w='content-fit'
								>
									Войти
								</Button>
							</div>
						</Box>
					</form>
				)
			}}
		</Formik>
	)
}

export default LoginForm
