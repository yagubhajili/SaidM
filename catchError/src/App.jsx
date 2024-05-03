import { useEffect, useReducer, useState } from 'react'
import './App.css'
import reducer from './reducers/reducer'
import axios from 'axios'

function App() {



  const [state, dispatch] = useReducer(reducer, {
    title: '',
    des: '',
    price: '',
    category: ''
  })

  const { title, des, price, category } = state;



  return (
    <>
      <input type="text" value={title}
        onChange={(e) => {
          dispatch({
            type: 'setTitle',
            title: e.target.value
          })

        }} />
      <input type="text" value={des} onChange={(e) => {
        dispatch({
          type: 'setDes',
          des: e.target.value
        })

      }} />
      <input type="text" value={price} onChange={(e) => {
        dispatch({
          type: 'setPrice',
          price: e.target.value
        })

      }} />
    </>
  )
}

export default App
