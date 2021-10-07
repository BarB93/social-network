import React from 'react'
import Header from "./components/Header/Header"
import Sidebar from "./components/Sidebar/Sidebar"
import Content from "./components/Content/Content";

import './styles/App.scss'
import Container from "./components/UI/Container/Container";

function App() {
  return (
      <div className="app">
          <Header />
          <Container>
              <div className="app_container">
                <Sidebar className={'sidebar'}/>
                <Content className={'content'}/>
              </div>
          </Container>
      </div>
  )
}

export default App;
