import React from 'react'
import {NavLink} from "react-router-dom"
import Logo from "../../images/logo.svg"
import {CgMenuLeftAlt as MenuIcon} from "react-icons/cg";
const Navbar = () => {
    
    return (
        <nav>
            
            <img src={Logo} alt=""/>
            <div className="nav-wrapper">
            <NavLink className='nav-link' to='/'>Home</NavLink>
            <NavLink className='nav-link' to='/login'>Login</NavLink>
            <NavLink className='nav-link' to='/register'>Register</NavLink>
            
            </div>
           
            
        </nav>
    )

    
}

export default Navbar
