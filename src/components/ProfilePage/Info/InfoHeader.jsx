import React from 'react'

import cn from './Info.module.scss'

const InfoHeader = ({ title }) => {
	return (
		<div className={cn.header}>
			<div className={cn.header__title}>{title}</div>
			<div className={cn.header__line}>
				<button className={cn.header__line_link}>Редактировать</button>
			</div>
		</div>
	)
}

export default InfoHeader
