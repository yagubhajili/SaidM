import { useState } from 'react'

import './App.css'
import ToDoApp from './components/ToDoApp/ToDoApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ToDoApp />
    </>
  )
}

export default App
