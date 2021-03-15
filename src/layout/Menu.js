// Use state & effect from react
import {useState} from 'react'
import {Link} from 'react-router-dom'
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
const Menu = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link to="/"><span className="navbar-brand">
                    <AllInclusiveIcon/></span></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className='nav-link' to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link' to="/contact/">Search Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Menu
