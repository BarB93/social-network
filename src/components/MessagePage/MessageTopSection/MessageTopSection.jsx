import React from 'react'
import { useNavigate } from 'react-router-dom'

import cn from './MessageTopSection.module.scss'

const MessageTopSection = () => {
	const navigate = useNavigate()
	const handleGoBack = () => {
		navigate(-1)
	}

	return (
		<div className={cn.section}>
			<button className={cn.section__button} onClick={handleGoBack}>
				Назад
			</button>
			<div className={cn.section__chatInfo}>
				<span>Название чата</span>
			</div>
		</div>
	)
}

export default MessageTopSection
