import React from 'react'
import Logo from './Logo'
import Container from '../UI/Container/Container'
import SettingsContainer from './Settings/SettingsContainer'

import styles from './Header.module.scss'

const Header = () => {
	return (
		<header className={styles.header}>
			<Container>
				<div className={styles.header__container}>
					<Logo />
					<SettingsContainer />
				</div>
			</Container>
		</header>
	)
}

export default Header
