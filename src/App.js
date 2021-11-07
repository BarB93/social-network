import React, {useEffect} from 'react'
import {authMe} from './redux/actions/authAction'
import {useDispatch, useSelector} from 'react-redux'
import Header from './components/Header/Header'
import AppRouter from './components/Routers/AppRouter'

import './styles/App.scss'

function App() {
    const dispatch = useDispatch()
    const {isAuth, isInit} = useSelector(state => state.auth)

    useEffect(() => {
        dispatch(authMe())
    },[])


    if(!isInit) return  null
    return (
      <div className="app">
          <Header />
          <AppRouter/>
      </div>
    )
}

export default App;
