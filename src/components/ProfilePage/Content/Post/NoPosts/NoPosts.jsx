import React from 'react'
import { FaRegNewspaper } from 'react-icons/fa'
import Box from '../../../../UI/Box/Box'

import styles from './NoPosts.module.scss'

const NoPosts = () => {
	return (
		<Box className={styles.noPosts} padding='0'>
			<div className={styles.noPosts__header}>Нет постов</div>
			<div className={styles.noPosts__content}>
				<div className={styles.noPosts__icon}>
					<FaRegNewspaper />
				</div>
				<div>Пока нет ни одного поста</div>
			</div>
		</Box>
	)
}

export default NoPosts
