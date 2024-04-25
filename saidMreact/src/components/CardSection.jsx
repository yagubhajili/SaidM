import React from 'react'
import './cardsection.css'

const CardSection = () => {
    return (
        <div className='container cardsHolder'>
            <div className='card'>
                <div className="imgDiv">
                    <i class="fa-solid fa-window-maximize fa-3x"></i>
                </div>
                <h3>Fully Responsive</h3>
                <p>This theme will look great on any device, no matter the size!</p>
            </div>
            <div className='card'>
                <div className="imgDiv">
                    <i class="fa-solid fa-layer-group fa-3x"></i>
                </div>
                <h3>Fully Responsive</h3>
                <p>This theme will look great on any device, no matter the size!</p>
            </div>
            <div className='card'>
                <div className="imgDiv">
                    <i class="fa-solid fa-terminal fa-3x"></i>
                </div>
                <h3>Fully Responsive</h3>
                <p>This theme will look great on any device, no matter the size!</p>
            </div>

        </div>
    )
}

export default CardSection