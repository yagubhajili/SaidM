import { useEffect, useState } from 'react'

import './App.css'
import ToDoApp from './components/ToDoApp/ToDoApp'
import axios from 'axios'
import { addBasket } from './redux/Slicers/basketSlicer'
import { useDispatch } from 'react-redux'

function App() {

  const [data, setdata] = useState([])


  useEffect(() => {
    axios('https://northwind.vercel.app/api/products').then(res => {
      console.log(res.data)
      setdata(res.data)

    })
  }, [])

  const dispatch = useDispatch()

  return (
    <><ul>
      {data.map(elem => {
        return <li key={elem.id}>{elem.name}--------

          <button onClick={() => {
            dispatch(addBasket(elem))
          }}>
            add to basket
          </button>
        </li>

      })}
    </ul>
      <ToDoApp />
    </>
  )
}

export default App
