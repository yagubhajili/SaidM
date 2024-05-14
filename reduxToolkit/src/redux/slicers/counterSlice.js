import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
    inputVaL: '',
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += +state.inputVaL
        },
        decrementByAmount: (state, action) => {
            state.value -= +state.inputVaL
        },
        incrementByThree: (state, action) => {
            state.value += +action.payload
        },
        decrementByThree: (state, action) => {
            state.value -= +action.payload
        },
        getVal: (state, action) => {
            state.inputVaL = action.payload
        },

    },
})

export const { increment, decrement, incrementByAmount, decrementByAmount, incrementByThree, decrementByThree,getVal } = counterSlice.actions

export default counterSlice.reducer