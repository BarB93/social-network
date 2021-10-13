import React from 'react'
import Header from "./components/Header/Header"
import AppContainer from "./components/AppContainer/AppContainer"

import './styles/App.scss'

function App({store}) {
  return (
      <div className="app">
          <Header />
          <AppContainer store={store}/>
      </div>
  )
}

export default App;
