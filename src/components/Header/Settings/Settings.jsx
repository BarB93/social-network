import React from 'react'
import noAvatar from '../../../assets/images/no_avatar.png'
import { FaAngleDown } from 'react-icons/fa'
import Menu from './Menu/Menu'

import cn from './Settings.module.scss'

const Settings = React.forwardRef(
	({ profile, isMenuOpen, toggleMenu, logout, closeOtherElements }, ref) => {
		const imageURL = profile?.photos.small ? profile.photos.small : noAvatar
		const activeClass = isMenuOpen ? cn.active : ''

		return (
			<div
				ref={ref}
				className={`${cn.menu} ${activeClass}`}
				onClick={toggleMenu}
			>
				<div className={cn.menu__name}>{profile.fullName}</div>
				<div className={cn.menu__img}>
					<img src={imageURL} alt='avatar' />
				</div>
				<FaAngleDown className={cn.menu__icon} />
				<Menu
					logout={logout}
					profile={profile}
					imageURL={imageURL}
					isMenuOpen={isMenuOpen}
					closeOtherElements={closeOtherElements}
				/>
			</div>
		)
	},
)

Settings.displayName = 'Settings'

export default Settings
