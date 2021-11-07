import React from 'react'
import LoginForm from './LoginForm/LoginForm'
import Container from '../UI/Container/Container'

import cn from './AuthPage.module.scss'

const AuthPage = () => {
    return (
        <div className={cn.auth}>
            <Container>
                    <LoginForm />
            </Container>
        </div>
    )
}

export default AuthPage