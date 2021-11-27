import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Info.module.scss'

const InfoHeader = ({ title, isAuthUserProfile }) => {
	return (
		<div className={styles.header}>
			<div className={styles.header__title}>{title}</div>
			<div className={styles.header__line}>
				{isAuthUserProfile && (
					<Link to='/settings'>
						<button className={styles.header__line_link}>Редактировать</button>
					</Link>
				)}
			</div>
		</div>
	)
}

export default InfoHeader
