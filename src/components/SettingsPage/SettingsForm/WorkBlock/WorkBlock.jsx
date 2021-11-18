import React from 'react'
import { Field } from 'formik'

import cn from '../../Settings.module.scss'
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
			<div className={cn.form__block}>
				{title && <div className={cn.form__subheader}>Работа</div>}
				<label className={cn.form__row}>
					<span className={cn.form__title}>Ищу работу:</span>
					<div
						className={cn.form__radioGroup}
						role='group'
						aria-labelledby='my-radio-group'
					>
						<label className={cn.form__radioLabel} onClick={handlerTrue}>
							<Field
								type='radio'
								name='lookingForAJob'
								value={true}
								checked={isLookingFor}
							/>
							<span className={cn.form__radioValue}>Да</span>
						</label>
						<label className={cn.form__radioLabel} onClick={handlerFalse}>
							<Field
								type='radio'
								name='lookingForAJob'
								value={false}
								checked={!isLookingFor}
							/>
							<span className={cn.form__radioValue}>Нет</span>
						</label>
					</div>
				</label>
				<label className={`${cn.form__row} ${cn.alignStart}`}>
					<span className={cn.form__title}>Описание:</span>
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
