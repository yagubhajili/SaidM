import React, { useEffect, useState } from 'react'
import { getAllData } from '../services/provider'
import { BASE_URL, endPoints } from '../services/api'
import { useDispatch, useSelector } from 'react-redux'
import { addMovies, setMovies, setfavorites } from '../redux/Slices/movieSlice'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';

const Home = () => {

    const dispatch = useDispatch()
    const movies = useSelector(state => state.movies.movies)

    useEffect(() => {
        getAllData(endPoints.posts).then(res => {
            // dispatch(setMovies(res))
        })
    }, [movies])
    const [inputVal, setInputVal] = useState('')


    return (
        <div>
            <input type="text" value={inputVal} onChange={(e) => {
                // console.log(e.target.value)
                setInputVal(e.target.value)
            }} />
            <button onClick={() => {
                // axios.post(BASE_URL + endPoints.posts, { id: uuidv4(), title: inputVal })
                let obj = {
                    id: uuidv4(),
                    title: inputVal
                }
                dispatch(addMovies(obj))
                setInputVal('')
            }}>add to movies</button>
            <ul>
                {movies?.map(movie => {
                    return <li key={movie.id}>{movie.title}

                        <button onClick={() => {
                            dispatch(setfavorites(movie))
                        }}>add to fav</button>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default Home