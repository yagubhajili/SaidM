import React from 'react'
import './users.css'

const UserSection = () => {
    return (
        <div className='container users'>
            <h1>What people are saying...</h1>
            <div className="userHolder">
                <div className="user">
                    <div className="userImage">
                        <img src="https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-1.jpg" alt="" />

                    </div>
                    <h4>
                        Margaret E.
                    </h4>
                    <p>
                        "This is fantastic! Thanks so much guys!"
                    </p>
                </div>
                <div className="user">
                    <div className="userImage">
                        <img src="https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-2.jpg" alt="" />

                    </div>
                    <h4>
                        Margaret E.
                    </h4>
                    <p>
                        "This is fantastic! Thanks so much guys!"
                    </p>
                </div>
                <div className="user">
                    <div className="userImage">
                        <img src="https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-3.jpg" alt="" />

                    </div>
                    <h4>
                        Margaret E.
                    </h4>
                    <p>
                        "This is fantastic! Thanks so much guys!"
                    </p>
                </div>
            </div>
        </div>
    )
}

export default UserSection