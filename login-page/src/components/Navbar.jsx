import * as React from 'react';
import './Navbar.css';

function Navbar(){
    return(
        <nav className='navbar'>
            <a href="LandingPage.jsx">
                <img className='logo-img' src="./Logo.png" alt="logo" />
            </a>
            <div>
                <ul className='navbar-list'>
                    <li>
                        <a href="LandingPage.jsx">Home</a>
                    </li>
                    <li>
                        <a href="AboutUs.jsx">About Us</a>
                    </li>
                    <li>
                        <a href="Courses.jsx">Courses</a>
                    </li>
                    <button className='nav-btn signin' href="Signin.jsx">Log In</button>
                    <button className='nav-btn signup' href="Signup.jsx">Sign Up</button>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;