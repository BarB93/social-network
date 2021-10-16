import React from 'react'
import {Route, Switch} from 'react-router-dom'
import ProfilePage from '../../pages/ProfilePage'
import DialogsPage from '../../pages/DialogsPage'
import FrendsPage from '../../pages/FrendsPage'
import NewsPage from '../../pages/NewsPage'
import MessagePage from '../../pages/MessagePage'

import  cn from  './Content.module.scss'

const Content = ({state, dispatch}) => {

    return (
        <main className={cn.main}>
            <Switch>
                <Route exact path='/dialogs'     render={() => <DialogsPage state={state.dialog} />}/>
                <Route exact path='/dialogs/:id' render={() => <MessagePage state={state.message} dispatch={dispatch}/>}/>
                <Route exact path='/frends'      component={FrendsPage}/>
                <Route exact path='/news'        component={NewsPage}/>
                <Route exact path='/'            render={() => <ProfilePage state={state.profile} dispatch={dispatch}/>}/>
            </Switch>
        </main>
    )
}

export default Content
