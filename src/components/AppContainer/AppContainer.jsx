import React from 'react'
import Sidebar from "../Sidebar/Sidebar"
import Content from "../Content/Content"
import Container from "../UI/Container/Container"

import cn from './AppContainer.module.scss'

const AppContainer = ({store}) => {

    return (
        <Container>
            <div className={cn.app}>
                <div className={cn.app__sidebar}>
                    <Sidebar/>
                </div>
                <div className={cn.app__content}>
                    <Content state={store.getState()} dispatch={store.dispatch.bind(store)}/>
                </div>
            </div>
        </Container>

    )
}

export default AppContainer