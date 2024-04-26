import React, { useEffect, useState } from 'react'




const ToDoApp = () => {



    const [toDos, setToDos] = useState(JSON.parse(localStorage.getItem("storage")) || [])
    const [inputValue, setInputValue] = useState('')
    useEffect(() => {
        localStorage.setItem('storage', JSON.stringify(toDos))
    }, [toDos])

    return (
        <div>
            <div>
                <input type="text"

                    value={inputValue}
                    onChange={(e) => {
                        setInputValue(e.target.value)
                    }
                    }
                />
                <button onClick={() => {
                    console.log(inputValue)
                    // localStorage.setItem('storage', JSON.stringify())
                    setToDos([...toDos, { inputValue }])
                    setInputValue('')
                }}>Add</button>
            </div>
            <ul>
                {toDos.map(element => {
                    return <li>
                        {element.inputValue}
                    </li>
                })}

            </ul>





        </div>
    )
}

export default ToDoApp