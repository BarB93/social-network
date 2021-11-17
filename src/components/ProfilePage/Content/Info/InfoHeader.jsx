import React from 'react'
import { Link } from 'react-router-dom'

import cn from './Info.module.scss'

const InfoHeader = ({ title, isAuthUserProfile }) => {
	return (
		<div className={cn.header}>
			<div className={cn.header__title}>{title}</div>
			<div className={cn.header__line}>
				{isAuthUserProfile && (
					<Link to='/settings'>
						<button className={cn.header__line_link}>Редактировать</button>
					</Link>
				)}
			</div>
		</div>
	)
}

export default InfoHeader
