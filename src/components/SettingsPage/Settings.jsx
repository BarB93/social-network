import React from 'react'

import Content from './Content/Content'
import Side from './Side/Side'

import styles from './Settings.module.scss'

const Settings = () => {
	return (
		<div className={styles.settings}>
			<Content />
			<Side />
		</div>
	)
}

export default Settings
