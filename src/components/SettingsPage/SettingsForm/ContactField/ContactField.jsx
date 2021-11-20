import React from 'react'
import { Field } from 'formik'

import cn from '../../Settings.module.scss'
import commonStyle from '../../../../styles/commonStyles.module.scss'

// import cn from './ContactField.module.scss'

const ContactField = ({ formik, name, type = 'text' }) => {
	return (
		<>
			{formik.touched[name] && formik.errors[name] ? (
				<div className={cn.form__errorRow}>
					<span />
					<span className={commonStyle.form__error}>{formik.errors[name]}</span>
				</div>
			) : null}
			<label className={cn.form__row}>
				<span className={cn.form__title}>{name}:</span>
				<Field className={commonStyle.form__input} name={name} type={type} />
			</label>
		</>
	)
}

export default ContactField
