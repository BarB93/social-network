import React from 'react'
import { Field } from 'formik'

import styles from '../../Settings.module.scss'
import commonStyle from '../../../../styles/commonStyles.module.scss'

const MainBlock = ({ title, header, formik }) => {
	return (
		<>
			{header && (
				<div className={commonStyle.title}>
					<h4 className={commonStyle.title__header}>Обо мне</h4>
				</div>
			)}
			<div className={styles.form__block}>
				{title && <div className={styles.form__subheader}>Обо мне</div>}
				{formik.touched.fullName && formik.errors.fullName ? (
					<div className={styles.form__errorRow}>
						<span />
						<span className={commonStyle.form__error}>{formik.errors.fullName}</span>
					</div>
				) : null}
				<label className={styles.form__row}>
					<span className={styles.form__title}>Никнейм:</span>
					<Field className={commonStyle.form__input} name='fullName' type='text' />
				</label>
				<label className={`${styles.form__row} ${styles.alignStart}`}>
					<span className={styles.form__title}>Oбо мне:</span>
					<Field
						className={commonStyle.form__textarea}
						component='textarea'
						name='aboutMe'
						type='textarea'
					/>
				</label>
			</div>
		</>
	)
}

export default MainBlock
