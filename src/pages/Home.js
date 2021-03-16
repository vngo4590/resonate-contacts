import React from 'react'
import {Link} from 'react-router-dom'
const Home = () => {
    return (
        <>
            <header id="landing-header">
                <div className="container p-5" id="landing-wrapper">
                    <h1 className="display-3">Welcome to Contact Search!</h1>
                    <p className="lead">
                        Just press the button below and then search for the contact you want! Have fun searching!
                    </p>
                    <hr className="my-4"/>
                    
                    <Link to="/contact" className="btn btn-primary btn-lg">Search Now!</Link>
                </div>
            </header>
            <ul className="slideshow">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </>
    )
}

export default Home
