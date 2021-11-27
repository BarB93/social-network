import React from 'react'
import { Field } from 'formik'

import styles from '../../Settings.module.scss'
import commonStyle from '../../../../styles/commonStyles.module.scss'

const WorkBlock = ({
	title,
	header,
	lookingForAJobSettings: { handlerTrue, handlerFalse, isLookingFor },
}) => {
	return (
		<>
			{header && (
				<div className={commonStyle.title}>
					<h4 className={commonStyle.title__header}>Работа</h4>
				</div>
			)}
			<div className={styles.form__block}>
				{title && <div className={styles.form__subheader}>Работа</div>}
				<label className={styles.form__row}>
					<span className={styles.form__title}>Ищу работу:</span>
					<div className={styles.form__radioGroup} role='group' aria-labelledby='my-radio-group'>
						<label className={styles.form__radioLabel} onClick={handlerTrue}>
							<Field type='radio' name='lookingForAJob' value={true} checked={isLookingFor} />
							<span className={styles.form__radioValue}>Да</span>
						</label>
						<label className={styles.form__radioLabel} onClick={handlerFalse}>
							<Field type='radio' name='lookingForAJob' value={false} checked={!isLookingFor} />
							<span className={styles.form__radioValue}>Нет</span>
						</label>
					</div>
				</label>
				<label className={`${styles.form__row} ${styles.alignStart}`}>
					<span className={styles.form__title}>Описание:</span>
					<Field
						className={commonStyle.form__textarea}
						component='textarea'
						name='lookingForAJobDescription'
						type='textarea'
					/>
				</label>
			</div>
		</>
	)
}

export default WorkBlock
