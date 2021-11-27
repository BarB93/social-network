import React from 'react'
import Container from '../UI/Container/Container'
import LoginFormContainer from './LoginForm/LoginFormContainer'

import styles from './Auth.module.scss'

const Auth = () => {
	return (
		<div className={styles.auth}>
			<Container>
				<LoginFormContainer />
			</Container>
		</div>
	)
}

export default Auth
