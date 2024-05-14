import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    basket: []
}

export const basketSlicer = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addBasket: (state, action) => {
            state.basket = [...state.basket, action.payload]
            console.log(action.payload)
        },
    },
})

export const { addBasket } = basketSlicer.actions

export default basketSlicer.reducer