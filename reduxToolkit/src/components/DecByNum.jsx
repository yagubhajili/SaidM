import React from 'react'
import { decrementByAmount, incrementByAmount } from '../redux/slicers/counterSlice'
import { useDispatch, useSelector } from 'react-redux'

const DecByNum = () => {

    const dispatch = useDispatch()
    const inputVal = useSelector((state) => state.counter.inputVal)

    return (
        <div>
            <button onClick={() => dispatch(decrementByAmount(inputVal))}>
                dec
            </button>
            <button onClick={() => dispatch(incrementByAmount(inputVal))}>
                inc
            </button>
        </div>
    )
}

export default DecByNum