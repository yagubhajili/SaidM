import { useReducer, useState } from 'react'
import './App.css'
import reducer from './reducers'

function App() {
  const [state, dispatch] = useReducer(reducer,
    {
      inptValue: '',
      count: 0
    })

  return (
    <>

      <input type="text" value={state.inptValue} onChange={(e) => {
        dispatch({
          type: 'setinptValue',
          inptValue: e.target.value
        })
      }} />
      <h1>{state.count}</h1>
      <button onClick={() => {
        dispatch({
          type: 'setDec',
        })
      }}>DEC</button>
      <button onClick={() => {
        dispatch({
          type: 'setInc',
        })
      }}>INC</button>


    </>
  )
}

export default App
