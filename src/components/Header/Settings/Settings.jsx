import React from 'react'
import noAvatar from '../../../assets/images/no_avatar.png'
import { FaAngleDown } from 'react-icons/fa'
import Menu from './Menu/Menu'

import styles from './Settings.module.scss'
import Avatar from '../../UI/Avatar/Avatar'

const Settings = React.forwardRef(
	({ profile, isMenuOpen, toggleMenu, logout, closeOtherElements }, ref) => {
		const imageURL = profile?.photos.small ? profile.photos.small : noAvatar
		const activeClass = isMenuOpen ? styles.active : ''

		return (
			<div ref={ref} className={`${styles.menu} ${activeClass}`} onClick={toggleMenu}>
				<div className={styles.menu__name}>{profile.fullName}</div>
				<Avatar photo={profile?.photos.small} />
				<FaAngleDown className={styles.menu__icon} />
				<Menu
					logout={logout}
					profile={profile}
					imageURL={imageURL}
					isMenuOpen={isMenuOpen}
					toggleMenu={toggleMenu}
					closeOtherElements={closeOtherElements}
				/>
			</div>
		)
	},
)

Settings.displayName = 'Settings'

export default Settings
