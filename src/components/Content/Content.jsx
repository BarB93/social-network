import React from 'react';
import {Route, Switch} from "react-router-dom";
import ProfilePage from "../../pages/ProfilePage";
import DialogsPage from "../../pages/DialogsPage";
import FrendsPage from "../../pages/FrendsPage";
import NewsPage from "../../pages/NewsPage";

const Content = ({store}) => {

    return (
        <main>
            <Switch>
                <Route path='/dialogs'       render={() => <DialogsPage state={store.dialog} />}/>
                <Route exact path='/frends'  component={FrendsPage}/>
                <Route exact path='/news'    component={NewsPage}/>
                <Route exact path='/'        render={() => <ProfilePage state={store.profile}/>}/>
            </Switch>
        </main>
    )
}

export default Content
