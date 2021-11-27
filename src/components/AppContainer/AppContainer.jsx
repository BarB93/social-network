import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Content from '../Content/Content'
import Container from '../UI/Container/Container'

import styles from './AppContainer.module.scss'

const AppContainer = () => {
	return (
		<Container minWidth='860px'>
			<div className={styles.app}>
				<div className={styles.app__sidebar}>
					<Sidebar />
				</div>
				<div className={styles.app__content}>
					<Content />
				</div>
			</div>
		</Container>
	)
}

export default AppContainer
