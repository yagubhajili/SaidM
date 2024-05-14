import { configureStore } from '@reduxjs/toolkit'
import toDosReducer from './Slicers/toDoSlicer.js'
import basketRedcuder from './Slicers/basketSlicer.js'

export const store = configureStore({
    reducer: {
        toDos: toDosReducer,
        basket: basketRedcuder
    },
})