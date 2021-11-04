import React, {useEffect} from 'react'
import Header from "./components/Header/Header"
import AppContainer from "./components/AppContainer/AppContainer"
import {useDispatch, useSelector} from 'react-redux'

import './styles/App.scss'
import AuthPage from './components/AuthPage/AuthPage'
import HeaderContainer from './components/Header/HeaderContainer'
import {authMe} from './redux/actions/authAction'
import CircleLoader from './components/UI/Loader/CircleLoader/CircleLoader'

import commonStyles from './styles/commonStyles.module.scss'

function App() {
    const dispatch = useDispatch()
    const {isAuth, initialApp } = useSelector(state => state.auth)

    useEffect(() => {
        dispatch(authMe())
    },[])

    if(!initialApp) return null
    if(!isAuth) return <AuthPage />
    return (
      <div className="app">
          <HeaderContainer/>
          <AppContainer/>
      </div>
    )
}

export default App;
