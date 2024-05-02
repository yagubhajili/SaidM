import { useEffect, useReducer, useState } from 'react'
import './App.css'
import './index.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from './assets/pages/Admin/Admin';
import Edit from './assets/pages/Edit/Edit';
import Post from './assets/pages/Post/Post';
import Layout from './assets/layout/Layout';
import reducer from './reducers/reducer';
import { getAllData } from './services/provider';
import { endPoints } from './services/api';
import { v4 as uuidv4 } from 'uuid';


function App() {


  const [state, dispatch] = useReducer(reducer, {
    data: []
  })
  const { data } = state
  useEffect(() => {
    getAllData(endPoints.suppliers).then(res => {
      dispatch({
        type: 'setData',
        data: res
      })
    })
  }, [data])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Admin data={data} dispatch={dispatch} />} />
            <Route path="/edit" element={<Edit />} />
            <Route path="/post" element={<Post />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
