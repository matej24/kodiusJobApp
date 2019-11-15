import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../src/images/kodiusLogo.png';

 const Navbar = ()=>{
    return(
            <nav className="nav-wrapper">
                <div className="container">
                    <Link to="/" className="brand-logo"><img src={logo} alt=""/> <a href="/" style={{fontSize: 15 }}>App for job &copy; Matej</a>  </Link>
                    
                    <ul className="right">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/cart">My cart</Link></li>
                    </ul>
                </div>
            </nav>
   
        
    )
}

export default Navbar;