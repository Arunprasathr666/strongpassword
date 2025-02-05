import { useState } from 'react'
import './App.css'
import { PasswordGenerator } from './passwordGenerator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PasswordGenerator/>
    </>
  )
}

export default App
