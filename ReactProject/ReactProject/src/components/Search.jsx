import React from 'react'
import './search.css'
const Search = () => {
    return (
        <div className='search'>
            <input type="text" placeholder='Search Github usrename' />
            <button>Search</button>
        </div>

    )
}

export default Search