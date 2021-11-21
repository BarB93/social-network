import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Avatar from '../../UI/Avatar/Avatar'

import { FaChevronLeft } from 'react-icons/fa'
import cn from './MessageTopSection.module.scss'

const MessageTopSection = ({ title, photo, userId }) => {
	const navigate = useNavigate()
	const handleGoBack = () => {
		navigate(-1)
	}

	return (
		<div className={cn.section}>
			<button className={cn.section__button} onClick={handleGoBack}>
				<FaChevronLeft className={cn.section__icon} />
				Назад
			</button>
			<div className={cn.section__chatInfo}>
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
