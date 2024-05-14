import { useEffect, useReducer, useState } from 'react'
import Reducers from './Reducers'
import './App.css'
import axios from 'axios';
function App() {
  const [state, dispatch] = useReducer(Reducers, {
    inputVal: '',
    data: [],
    localStorages: JSON.parse(localStorage.getItem('localStorages')) || []
  })
  let { data, localStorages, inputVal } = state;
  // useEffect(() => {
  //   axios('https://northwind.vercel.app/api/categories').then(res => {
  //     dispatch({
  //       type: "getData",
  //       data: res.data
  //     })
  //   })
  // }, [])
  useEffect(() => {
    localStorage.setItem('localStorages', JSON.stringify(localStorages))
  }, [localStorages])
  // console.log(data)
  return (
    <>
      <div className='body'>
        <div className="container">
          <div className="addTask">
            <form>
              <input id="input" type="text" placeholder="Add your task" value={inputVal} onChange={(e) => {
                dispatch({
                  type: "setInputVal",
                  inputVal: e.target.value
                })
              }} />
              <button id="add" className="btn" onClick={(e) => {
                e.preventDefault()
                // dispatch({
                //   type: 'setLocalStorages',
                //   localStorages: [...localStorages, ...data]
                // })
                dispatch({ 
                  type: 'setData',
                  data: [...data, inputVal]
                })
                inputVal = '' 

                // console.log(data)
              }}>Add Task</button>
            </form>
          </div>
          <div className="taskList">
            <ul>
              {data.map(data => {
                return (
                  <li>
                    <span>{data}</span>
                    <button id="delete" className="btn">Delete Task</button>
                  </li>
                )

              })}

            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
