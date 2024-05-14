import { useContext } from 'react'
import './App.css'
import { useAppContext } from './context/AppContext'
import { Register } from './components/Register'




function App() {

  const { data } = useAppContext()

  console.log(data)
  return (
    <>
      {/* <ul>
        {data.map(elem => {
          return (
            <li key={elem.id}>{elem.title}</li>
          )
        })}
      </ul> */}
      <Register />
    </>
  )
}

export default App
