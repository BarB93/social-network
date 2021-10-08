import React from 'react'

import cn from './AppContainer.module.scss'
import Sidebar from "../Sidebar/Sidebar";
import Content from "../Content/Content";
import Container from "../UI/Container/Container";

const AppContainer = () => {
    return (
        <Container>
            <div className={cn.app}>
                <div className={cn.app__sidebar}>
                    <Sidebar/>
                </div>
                <div className={cn.app__content}>
                    <Content/>
                </div>
            </div>
        </Container>

    )
}

export default AppContainer