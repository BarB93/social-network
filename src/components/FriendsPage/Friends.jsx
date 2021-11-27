import React from 'react'
import Content from './Content/Content'
import Side from './Side/Side'

import styles from './friends.module.scss'

const Friends = () => {
	return (
		<div className={styles.friends}>
			<Content />
			<Side />
		</div>
	)
}

export default Friends
