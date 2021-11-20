import React from 'react'

import MainBlock from '../MainBlock/MainBlock'
import WorkBlock from '../WorkBlock/WorkBlock'
import ContactsBlock from '../ContactsBlock/ContactsBlock'

import commonStyle from '../../../../styles/commonStyles.module.scss'

const AllBlocks = ({ lookingForAJobSettings, formik }) => {
	return (
		<>
			<div className={commonStyle.title}>
				<h4 className={commonStyle.title__header}>Все настройки</h4>
			</div>
			<div>
				<MainBlock title />
				<WorkBlock title lookingForAJobSettings={lookingForAJobSettings} />
				<ContactsBlock title formik={formik} />
			</div>
		</>
	)
}

export default AllBlocks
