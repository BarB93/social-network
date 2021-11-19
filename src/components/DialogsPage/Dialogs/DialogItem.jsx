import React from 'react'
import { NavLink } from 'react-router-dom'

import cn from './dialogs.module.scss'

const DialogsItem = ({ id, name }) => {
	return (
		<li>
			<NavLink
				to={`/dialogs/${id}`}
				className={({ isActive }) =>
					[cn.dialog__item, isActive ? cn.active : ''].filter(Boolean).join(' ')
				}
			>
				<img
					className={cn.dialog__avatar}
					src='https://vk.com/images/camera_200.png'
					alt='avatar'
				/>
				<div className={cn.dialog__data}>
					<span className={cn.dialog__name}>{name}</span>
				</div>
			</NavLink>
		</li>
	)
}

export default DialogsItem
