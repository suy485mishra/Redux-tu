import { useState } from 'react'

import './App.css'
import CakeView from '../features/cake/CakeView'
import UserView from '../features/user/UserView'
import IcecreamView from '../features/icecream/IcecreamView'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CakeView/>
      <IcecreamView/>
      <UserView/>
     
    </>
  )
}

export default App
