import React from 'react';
import {Route, Switch} from "react-router-dom";
import ProfilePage from "../../pages/ProfilePage";
import DialogsPage from "../../pages/DialogsPage";
import FrendsPage from "../../pages/FrendsPage";
import NewsPage from "../../pages/NewsPage";

const Content = (props) => {
    return (
        <main {...props}>
            <Switch>
                <Route path='/dialogs' component={DialogsPage}/>
                <Route exact path='/frends'  component={FrendsPage}/>
                <Route exact path='/news'    component={NewsPage}/>
                <Route exact path='/' component={ProfilePage}/>
            </Switch>
        </main>
    )
}

export default Content
