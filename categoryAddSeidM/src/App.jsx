import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {

  const getAll = async () => {
    let res = await axios.get("https://northwind.vercel.app/api/categories")
    setCategories(res.data)
    // console.log(res.data)
  }
  useEffect(() => {
    getAll()
  }, [])

  const [categories, setCategories] = useState([])
  return (

    <div className='body'>
      <div className="container">
        <div className="addTask">
          <form>
            <input id="input" type="text" placeholder="Add your task" />
            <button id="add" className="btn">Add Task</button>
          </form>
        </div>
        <div className="taskList">
          <ul>
            {categories && categories.map(item => (<li key={item.id}>
              <span>{item.name}</span>
              <div className="actions">
                <button id="delete" className="btn" onClick={() => {
                  axios.delete(`https://northwind.vercel.app/api/categories/${item.id}`)
                  let filteredCategories = categories.filter(elem => elem.id !== item.id)
                  setCategories(filteredCategories)
                }}>Delete Task</button>
                <button id="edit" className="btn" onClick={() => {
                  let newName = prompt("edit the name of product", item.name)
                  if (newName !== null) {
                    const updatedCategories = categories.map(elem => {
                      if (elem.id === item.id) {
                        return { ...elem, name: newName };
                      }
                      return elem;
                    });
                    setCategories(updatedCategories);
                    axios.patch(`https://northwind.vercel.app/api/categories/${item.id}`, { name: newName })
                  }
                }}>Edit Task</button>
              </div>
            </li>)

            )}
          </ul>
        </div>
      </div>
    </div >

  )
}

export default App
