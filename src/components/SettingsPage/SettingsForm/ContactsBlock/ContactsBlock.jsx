import React from 'react'
import { Field } from 'formik'

import cn from '../../Settings.module.scss'
import commonStyle from '../../../../styles/commonStyles.module.scss'

const ContactsBlock = ({ title, header }) => {
	return (
		<>
			{header && (
				<div className={commonStyle.title}>
					<h4 className={commonStyle.title__header}>Контакты</h4>
				</div>
			)}
			<div className={cn.form__block}>
				{title && <div className={cn.form__subheader}>Контакты</div>}
				<label className={cn.form__row}>
					<span className={cn.form__title}>github:</span>
					<Field
						className={commonStyle.form__input}
						name='github'
						type='text'
					/>
				</label>
				<label className={cn.form__row}>
					<span className={cn.form__title}>vk:</span>
					<Field
						className={commonStyle.form__input}
						name='vk'
						type='textarea'
					/>
				</label>
				<label className={cn.form__row}>
					<span className={cn.form__title}>facebook:</span>
					<Field
						className={commonStyle.form__input}
						name='facebook'
						type='textarea'
					/>
				</label>
				<label className={cn.form__row}>
					<span className={cn.form__title}>instagram:</span>
					<Field
						className={commonStyle.form__input}
						name='instagram'
						type='textarea'
					/>
				</label>
				<label className={cn.form__row}>
					<span className={cn.form__title}>twitter:</span>
					<Field
						className={commonStyle.form__input}
						name='twitter'
						type='textarea'
					/>
				</label>
				<label className={cn.form__row}>
					<span className={cn.form__title}>website:</span>
					<Field
						className={commonStyle.form__input}
						name='website'
						type='textarea'
					/>
				</label>
				<label className={cn.form__row}>
					<span className={cn.form__title}>youtube:</span>
					<Field
						className={commonStyle.form__input}
						name='youtube'
						type='textarea'
					/>
				</label>
				<label className={cn.form__row}>
					<span className={cn.form__title}>mainLink:</span>
					<Field
						className={commonStyle.form__input}
						name='mainLink'
						type='text'
					/>
				</label>
			</div>
		</>
	)
}

export default ContactsBlock
