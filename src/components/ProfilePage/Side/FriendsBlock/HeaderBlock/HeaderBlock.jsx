import React from 'react'

import styles from './HeaderBlock.module.scss'
import { Link } from 'react-router-dom'

const HeaderBlock = ({ friendsCount }) => {
	return (
		<div className={styles.header}>
			<Link to='/friends' className={styles.header__title}>
				Друзья
			</Link>
			<Link to='/friends' className={styles.header__amount}>
				{friendsCount}
			</Link>
		</div>
	)
}

export default HeaderBlock
