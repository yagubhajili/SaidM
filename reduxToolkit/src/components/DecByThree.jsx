import React from 'react'
import { useDispatch } from 'react-redux'
import {  decrementByThree, incrementByThree } from '../redux/slicers/counterSlice'

const DecByThree = () => {
    const dispatch = useDispatch()


    return (
        <div>
            <button onClick={() => dispatch(decrementByThree(3))}>
                -3
            </button>
            <button onClick={() => dispatch(incrementByThree(3))}>
                +3
            </button >
        </div>
    )
}

export default DecByThree