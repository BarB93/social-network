import React from 'react'

import { Field, Formik } from 'formik'
import Button from '../../UI/Button/Button'
import Box from '../../UI/Box/Box'
import ItemsLoader from '../../UI/Loader/ItemsLoader/ItemsLoader'

import cn from './LoginForm.module.scss'
import commonStyle from '../../../styles/commonStyles.module.scss'

const LoginForm = ({
	onSubmit,
	initialValues,
	validationSchema,
	wrongData,
}) => {
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={onSubmit}
		>
			{(formik) => {
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
									placeholder='Email'
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
									placeholder='Пароль'
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
							{wrongData && !formik.dirty && (
								<span className={commonStyle.form__error}>{wrongData}</span>
							)}

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
									{formik.isSubmitting ? <ItemsLoader dots /> : 'Войти'}
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
