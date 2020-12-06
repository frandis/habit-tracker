import React, { Component } from 'react'

import './app.css'
import Habits from './components/habits'
import Navbar from './components/navbar'
import Form from './components/form'
import Reset from './components/reset'

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Form />
        <Habits />
        <Reset />
      </>
    )
  }
}

export default App
