import React from 'react'
import { decrement, increment } from '../redux/slicers/counterSlice'
import { useDispatch } from 'react-redux'

const DecByOne = () => {
    const dispatch = useDispatch()


    return (
        <div>
            <button onClick={() => dispatch(decrement())}>
                -
            </button>
            <button onClick={() => dispatch(increment())}>
                +
            </button>
        </div>
    )
}

export default DecByOne