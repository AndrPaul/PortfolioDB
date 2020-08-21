import React,{useState, useEffect} from 'react'
import {NavLink} from "react-router-dom"
import {NavItems} from "./navItems/NavItems"
import Logo from "../../images/logo.svg"
import {CgMenuLeftAlt as MenuIcon} from "react-icons/cg";
const Navbar = () => {
    const [clicked, setClicked] = useState(false);
    return (
        <nav>
            
            <img src={Logo} alt=""/>
            <div className="nav-wrapper">
               
            {NavItems.map((item, i) => {
                return(
                <NavLink key={i} className={item.cName} to={item.url}>{item.title}</NavLink>
                )
            })}
            
            </div>
           
            
        </nav>
    )

    
}

export default Navbar
