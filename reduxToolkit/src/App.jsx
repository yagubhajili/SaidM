import { useState } from 'react'

import './App.css'
import Span from './components/Span'
import DecByOne from './components/DecByOne'
import { useDispatch, useSelector } from 'react-redux'
import DecByThree from './components/DecByThree'
import Input from './components/Input'
import DecByNum from './components/DecByNum'

function App() {

  const [inputVal, setInputVal] = useState('')

  return (
    <>
      <Span />
      <DecByOne />
      <DecByThree />
      <Input setInputVal={setInputVal} />
      <DecByNum inputVal={inputVal} />
    </>
  )
}

export default App
