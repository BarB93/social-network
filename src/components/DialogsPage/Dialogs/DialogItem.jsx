import React from 'react'
import { NavLink } from 'react-router-dom'
import Avatar from '../../UI/Avatar/Avatar'

import cn from './dialogs.module.scss'

const DialogsItem = ({ item: { id, name, photos } }) => {
	return (
		<li>
			<NavLink
				to={`/dialogs/${id}`}
				className={({ isActive }) =>
					[cn.dialog__item, isActive ? cn.active : ''].filter(Boolean).join(' ')
				}
			>
				<Avatar photo={photos?.large} size='50px' margin='11px 14px 7px 0' />
				<div className={cn.dialog__data}>
					<span className={cn.dialog__name}>{name}</span>
				</div>
			</NavLink>
		</li>
	)
}

export default DialogsItem
