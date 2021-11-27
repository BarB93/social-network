import React from 'react'
import ContentRouter from '../Routers/ContentRouter'

import styles from './Content.module.scss'

const Content = () => {
	return (
		<main className={styles.main}>
			<ContentRouter />
		</main>
	)
}

export default Content
