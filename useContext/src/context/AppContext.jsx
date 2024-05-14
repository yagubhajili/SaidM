import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react'


const AppContext = createContext()


export const useAppContext = () => useContext(AppContext)

 

const AppProvider = ({ children }) => {

    const [data, setData] = useState([]);


    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(elem => {
            setData(elem.data)
            console.log(elem.data)
        })
    }, [])


    return (
        <AppContext.Provider value={{ data, setData }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider