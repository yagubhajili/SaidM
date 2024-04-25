import React from 'react'
import './hero.css'
import PositionAbsolute from './PositionAbsolute'

const Hero = () => {
    return (
        <div className='hero'>
            {/* <img src={image} alt="" /> */}
            <div className="holder">
                <div className="container heroHolder">
                    <h2>Generate more leads with a professional landing page!</h2>
                    <PositionAbsolute />

                </div>
            </div>

        </div>
    )
}

export default Hero