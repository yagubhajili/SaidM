import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    toDos: []
}

export const toDoSlicer = createSlice({
    name: 'toDos',
    initialState,
    reducers: {
        setToDos: (state, action) => {
            state.toDos.push(action.payload)
        },
        deleteToDos: (state, action) => {
            state.toDos = state.toDos.filter((elem) => elem.id !== action.payload.id)
        },
        editToDos: (state, action) => {
            let index = state.toDos.findIndex((elem) => elem.id === action.payload.id)
            state.toDos[index] = { id: action.payload.id, text: action.payload }
        },
    },
})

export const { setToDos, deleteToDos, editToDos } = toDoSlicer.actions

export default toDoSlicer.reducer