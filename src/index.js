import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import store from "./myRedux/store"

import App from './App';

export let rerenderEntireTree = (store) => {
    console.log('RERENDER!')
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App store={store}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store)
store.subscribe(rerenderEntireTree)






