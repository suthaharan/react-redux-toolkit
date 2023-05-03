//import { useState } from 'react'

import './App.css'
import CakeView from './features/cake/CakeView'
import BiscuitView from './features/biscuit/BiscuitView'
import {UserView} from './features/user/UserView'

function App() {
  return (
    <div className='App'>
      <CakeView/>
      <BiscuitView/>
      <UserView/>
    </div>
  )
}

export default App
