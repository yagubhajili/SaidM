import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setfavorites } from '../redux/Slices/movieSlice'

const Favorites = () => {
    const favs = useSelector(state => state.movies.favorites)
    const dispatch = useDispatch()
    console.log(favs)
    return (
        <div>
            <h1>FAVORITES</h1>
            <ul>
                {favs.map(el => {
                    return <li key={el.id}>
                        {el.title}
                        <button onClick={() => {
                            dispatch(setfavorites(el))
                        }}>delete</button>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default Favorites