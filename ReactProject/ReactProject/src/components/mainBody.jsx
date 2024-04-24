import React from 'react'
import Search from './Search'
import LeftImage from './LeftImage'
import RightPart from './rightPart'
import './mainbody.css'

const MainBody = () => {
    return (
        <div className='container'>
            <Search />

            <div className='both'>
                <LeftImage />
                <RightPart />
            </div>
        </div>

    )
}

export default MainBody