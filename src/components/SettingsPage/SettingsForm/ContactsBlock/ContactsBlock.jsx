import React from 'react'

import ContactField from '../ContactField/ContactField'

import styles from '../../Settings.module.scss'
import commonStyle from '../../../../styles/commonStyles.module.scss'

const ContactsBlock = ({ title, header, formik }) => {
	return (
		<>
			{header && (
				<div className={commonStyle.title}>
					<h4 className={commonStyle.title__header}>Контакты</h4>
				</div>
			)}
			<div className={styles.form__block}>
				{title && <div className={styles.form__subheader}>Контакты</div>}
				<ContactField name='github' formik={formik} />
				<ContactField name='vk' formik={formik} />
				<ContactField name='facebook' formik={formik} />
				<ContactField name='instagram' formik={formik} />
				<ContactField name='twitter' formik={formik} />
				<ContactField name='website' formik={formik} />
				<ContactField name='youtube' formik={formik} />
				<ContactField name='mainLink' formik={formik} />
			</div>
		</>
	)
}

export default ContactsBlock
