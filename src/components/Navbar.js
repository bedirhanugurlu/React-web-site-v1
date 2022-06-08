import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Search from './Search';


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        }   else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton()
    }, []);

    window.addEventListener('resize', showButton);


  return (
    <>
      <nav className="navbar nav-down">
          <div className="navbar-container">
              <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                  STUDYCASE
              </Link>
              <div className='menu-icon' onClick={handleClick}>
                  <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
              </div>
              <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                        Corporate
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                        Products
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                        Services
                    </Link>
                </li>
              </ul>
              <Search />
          </div>
      </nav>
    </>
  );
}

export default Navbar;
