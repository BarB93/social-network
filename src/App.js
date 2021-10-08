import React from 'react'
import Header from "./components/Header/Header"
import AppContainer from "./components/AppContainer/AppContainer"

import './styles/App.scss'

function App() {
  return (
      <div className="app">
          <Header />
          <AppContainer />
      </div>
  )
}

export default App;
