import { useEffect, useReducer, useState } from 'react'
import Reducers from './Reducers'
import './App.css'
function App() {
  const [state, dispatch] = useReducer(Reducers, {
    count: 0,
    toDos: [],
    inputVal: ''
  })
  const { count, toDos, inputVal } = state
  return (
    <div>
      <div className='holder'>
        <button onClick={() => {
          dispatch({
            type: 'setDec',
          })
        }}>-</button>
        <h1>{count}</h1>
        <button onClick={() => {
          dispatch({
            type: 'setInc',
          })
        }}>+</button>
      </div>
      <div className="toDoApp">
        <input type="text" value={inputVal} onChange={(e) => {
          let value = e.target.value
          dispatch({
            type: "setInputVal",
            inputVal: value
          })
        }} />
        <button onClick={() => {
          dispatch({
            type: 'setToDos',
            toDos: inputVal
          })
        }}>add</button>
        <ul>
          {toDos && toDos.map(todo => {
            // { console.log(toDos) }
            return <li key={todo.id}>{todo.name}
              <button onClick={() => {
                const newArr = toDos.filter(elem => elem.id !== todo.id)
                dispatch({
                  type: 'editedArr',
                  arr: [...newArr]
                })
              }}>delete</button>
              <button onClick={() => {
               let newName = prompt('edit to do', todo.name)
                let edited = toDos.map(el => {
                  if (el.id === todo.id) {
                    return { ...el, name: newName }
                  }
                  return el
                })
                dispatch({
                  type: 'editedArr',
                  arr: edited
                })
              }}>edit</button></li>

          })}
        </ul>
      </div>
    </div >
  )
}

export default App
