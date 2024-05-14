import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ToDoApp = () => {

    const basket = useSelector((state) => state.basket.basket)

    console.log(basket)


    return (
        <div>
            <h1>basket</h1>
            <ul>
                {basket &&basket.map(el => {
                   return <li>{el.name}</li>
                })}
            </ul>
        </div>
    )
}

export default ToDoApp