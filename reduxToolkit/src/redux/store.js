import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slicers/counterSlice.js'
export const store = configureStore({
    reducer: {
        counter: counterReducer
    },
})