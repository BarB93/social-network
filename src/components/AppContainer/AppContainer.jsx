import React from 'react'
import Sidebar from "../Sidebar/Sidebar"
import Content from "../Content/Content"
import Container from "../UI/Container/Container"
import {useSelector} from 'react-redux'
import LoginForm from '../AuthPage/LoginForm/LoginForm'

import cn from './AppContainer.module.scss'

const AppContainer = () => {
    const {isAuth} = useSelector(state => state.auth)
    return (
        <Container minWidth='860px'>
            <div className={cn.app}>
                <div className={cn.app__sidebar}>
                    {isAuth ?
                        <Sidebar/>
                        :
                        <LoginForm/>
                    }

                </div>
                <div className={cn.app__content}>
                    <Content />
                </div>
            </div>
        </Container>

    )
}

export default AppContainer