import React from 'react'
import { FaHeart } from 'react-icons/fa'
import styles from './LikeCount.module.scss'

const LikeCount = ({ likesCount }) => {
	return (
		<div className={styles.likes}>
			<div className={styles.iconWrapper}>
				<FaHeart className={styles.likesCount__icon} />
			</div>
			<div className={styles.likesCount}>{likesCount}</div>
		</div>
	)
}

export default LikeCount
