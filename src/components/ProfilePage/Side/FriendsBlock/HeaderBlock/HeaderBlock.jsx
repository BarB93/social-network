import React from 'react'

import cn from './HeaderBlock.module.scss'
import { Link } from 'react-router-dom'

const HeaderBlock = ({ friendsCount }) => {
	return (
		<div className={cn.header}>
			<Link to='/friends' className={cn.header__title}>
				Друзья
			</Link>
			<Link to='/friends' className={cn.header__amount}>
				{friendsCount}
			</Link>
		</div>
	)
}

export default HeaderBlock
