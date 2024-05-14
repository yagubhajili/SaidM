import React from 'react'
import { getVal } from '../redux/slicers/counterSlice'
import { useDispatch } from 'react-redux'

const Input = ( ) => {



    const dispatch = useDispatch()
    return (
        <div>
            <input type="text" placeholder='enter a number' onChange={(e) => {
                dispatch(getVal(e.target.value))
            }} />
        </div>
    )
}

export default Input