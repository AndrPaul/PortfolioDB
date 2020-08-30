import React,{useState, useEffect} from 'react'
import {NavLink, Link} from "react-router-dom"
import {NavItems} from "./navItems/NavItems"
import Logo from "../../images/logo.svg"
import {FiMenu as OpenIcon} from "react-icons/fi";
import {VscChromeClose as CloseIcon} from "react-icons/vsc"


function Navbar() {
    const [click, setClick] = useState(false);
    const activeColor = '#ffa41b';
  
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  
    
  
    return (
      <>
        <nav className='navbar'>
        <Link to='/' onClick={closeMobileMenu} className="navbar-logo"><img src={Logo} alt="portfolio-db-logo"/></Link>
          <div className='menu-icon' onClick={handleClick}>
          {click ? <CloseIcon /> : <OpenIcon />  }
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          {NavItems.map((item, i) => {
               return(
                    <li key={i} className="nav-item">
                        <NavLink key={i} onClick={closeMobileMenu} activeStyle={{ color: activeColor }} exact className={item.cName} to={item.url}>{item.title}</NavLink>
                  </li>
                
              )
            })}
           
          </ul>
        
        </nav>
      </>
    );
  }
  
  export default Navbar;
  

// const Navbar = () => {
//     const [click, setClick] = useState(false);
 
//     const closeMobileMenu = () => setClick(false);
//     const handleClick = () => setClick(!click);



   
//     return (
//         <nav className='navbar'>
//             <div className="navbar-container">
//                 <Link to='/' className="navbar-logo"><img src={Logo} alt="portfolio-db-logo"/></Link>
            
//             <div className="menu-icon" onClick={handleClick}>
//                 {click ? <CloseIcon /> : <OpenIcon />  }
//             </div>
//             <ul className={click ? 'nav-menu active' : 'nav-menu'}>
//             {NavItems.map((item, i) => {
//                 return(
//                     <li key={i} className="nav-item">
//                         <NavLink key={i} className={item.cName} to={item.url}>{item.title}</NavLink>
//                     </li>
                
//                 )
//             })}
//             </ul>
//             </div>
//         </nav>
//     )
// }

// export default Navbar


