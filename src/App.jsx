import React from 'react'
import GetTodos from './components/GetTodos'
import { Snowfall } from 'react-snowfall'

const App = () => {
  return (
    <div>
      <Snowfall  color='white' />
      <GetTodos/>
    </div>
  )
}

export default App
