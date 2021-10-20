import React from 'react'
import {Route, Switch} from 'react-router-dom'
import ProfilePage from '../../pages/ProfilePage'
import DialogsPage from '../../pages/DialogsPage'
import FrendsPage from '../../pages/FrendsPage'
import NewsPage from '../../pages/NewsPage'
import MessagePage from '../../pages/MessagePage'

import  cn from  './Content.module.scss'

const Content = () => {

    return (
        <main className={cn.main}>
            <Switch>
                <Route exact path='/dialogs'     render={() => <DialogsPage/>}/>
                <Route exact path='/dialogs/:id' render={() => <MessagePage/>}/>
                <Route path='/frends'            render={() => <FrendsPage/>}/>
                <Route exact path='/news'        component={NewsPage}/>
                <Route exact path='/'            render={() => <ProfilePage/>}/>
            </Switch>
        </main>
    )
}

export default Content
