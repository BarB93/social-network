import React from 'react'
import Logo from './Logo'
import Container from '../UI/Container/Container'
import SettingsContainer from './Settings/SettingsContainer'

import cn from './Header.module.scss'

const Header = () => {
	return (
		<header className={cn.header}>
			<Container>
				<div className={cn.header__container}>
					<Logo></Logo>
					<SettingsContainer />
				</div>
			</Container>
		</header>
	)
}

export default Header
