import React from 'react'
import Container from '../UI/Container/Container'
import LoginFormContainer from './LoginForm2/LoginFormContainer'

import cn from './AuthPage.module.scss'

const AuthPage = () => {
	return (
		<div className={cn.auth}>
			<Container>
				<LoginFormContainer />
			</Container>
		</div>
	)
}

export default AuthPage
