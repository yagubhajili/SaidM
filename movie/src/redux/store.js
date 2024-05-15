import { configureStore } from '@reduxjs/toolkit'
import moviesReducer from './Slices/movieSlice.js'

export const store = configureStore({
    reducer: {
        movies: moviesReducer
    },
})