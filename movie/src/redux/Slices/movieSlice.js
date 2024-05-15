import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    movies: [],
    favorites: []
}

export const movieSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setMovies: (state, action) => {
            state.movies = action.payload
        },
        addMovies: (state, action) => {
            state.movies=[...state.movies,{...action.payload}]
        },
        setfavorites: (state, action) => {
            let elemIndex = state.favorites.findIndex(el => el.id == action.payload.id)
            if (elemIndex == -1) {
                state.favorites = [...state.favorites, { ...action.payload }]

            } else {
                state.favorites = state.favorites.filter(el => el.id != action.payload.id)
            }
        },
    },
})

// Action creators are generated for each case reducer function
export const { setMovies, setfavorites, addMovies } = movieSlice.actions

export default movieSlice.reducer