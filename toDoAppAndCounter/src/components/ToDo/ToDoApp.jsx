import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const ToDoApp = () => {
    let [toDoText, toDoTextSet] = useState([])
    return (
        <div>
            <div className='header'>
                <input type="text"
                    onChange={(e) => {
                        toDoText = e.target.value
                    }} />
                <button onClick={() => {
                    let obj = {
                        id: uuidv4(),
                        todo: toDoText
                    }
                    toDoTextSet(...toDoText, obj)
                    console.log(toDoText)

                }}>Add</button>
            </div>
            <div className="footer">
                <ul>
                    <li></li>
                </ul>
            </div>
        </div>
    )
}

export default ToDoApp