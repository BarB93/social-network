import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Avatar from '../../UI/Avatar/Avatar'

import { FaChevronLeft } from 'react-icons/fa'
import styles from './MessageTopSection.module.scss'

const MessageTopSection = ({ title, photo, userId }) => {
	const navigate = useNavigate()
	const handleGoBack = () => {
		navigate(-1)
	}

	return (
		<div className={styles.section}>
			<button className={styles.section__button} onClick={handleGoBack}>
				<FaChevronLeft className={styles.section__icon} />
				Назад
			</button>
			<div className={styles.section__chatInfo}>
				<Link to={`/profile/${userId}`}>
					<span>{title}</span>
				</Link>
			</div>
			<Link to={`/profile/${userId}`}>
				<Avatar photo={photo} />
			</Link>
		</div>
	)
}

export default MessageTopSection
