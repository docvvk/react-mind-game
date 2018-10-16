import React from 'react'
import logo from '../assets/logo.svg'
import './index.css'

const AppLayout = (props) => {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2 className="Header-text">REACT MIND GAME</h2>
        <marquee className='Scroll-nav'><a href='https://reactjs.org/docs/create-a-new-react-app.html#create-react-app'>Create React App</a> is a comfortable environment for learning React, and is the best way to start building a new single-page application in React.</marquee>
      </div>
      <p className="App-intro">
        Click the card squares - Match similar cards 
      </p>

      {props.children}
    </div>
  )
}

export default AppLayout
