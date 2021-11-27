import React from 'react'
import { Field } from 'formik'

import styles from '../../Settings.module.scss'
import commonStyle from '../../../../styles/commonStyles.module.scss'

const ContactField = ({ formik, name, type = 'text' }) => {
	return (
		<>
			{formik.touched[name] && formik.errors[name] ? (
				<div className={styles.form__errorRow}>
					<span />
					<span className={commonStyle.form__error}>{formik.errors[name]}</span>
				</div>
			) : null}
			<label className={styles.form__row}>
				<span className={styles.form__title}>{name}:</span>
				<Field className={commonStyle.form__input} name={name} type={type} />
			</label>
		</>
	)
}

export default ContactField
