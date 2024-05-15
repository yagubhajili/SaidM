import React, { useEffect, useState } from 'react'
import { getAllData } from '../services/provider'
import { endPoints } from '../services/api'
import { useDispatch, useSelector } from 'react-redux'
import { setMovies, setfavorites } from '../redux/Slices/movieSlice'

const Home = () => {

    const dispatch = useDispatch()
    const movies = useSelector(state => state.movies.movies)

    useEffect(() => {
        getAllData(endPoints.posts).then(res => {
            dispatch(setMovies(res))
        })
    }, [])


    return (
        <div>
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