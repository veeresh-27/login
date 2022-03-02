import React from 'react'
import './Navbar.css'
import { useState,useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';

function Navbar() {
  const [show, setShow] = useState(false);
  const navbarScroll = () => {
    if (window.scrollY > 100)
      setShow(true) // show navbar Effect when scroll down
    else 
      setShow(false);
  }
  useEffect(() => {
    window.addEventListener('scroll', navbarScroll);
    return () => {
      window.removeEventListener('scroll', navbarScroll);
    };
  }, []);

  return (
    <div className={show?"navbar":"unScrolledNavbar"}>
      StopNBuy
      <div className="search">
        <input type="text" placeholder="Search" />
        <SearchIcon className='icon'/>
      </div>
      <div className="nav-links">
      <ul>
          <li className="nav-link">
            Accessories
          </li>
          <li className='nav-link'>
            Women
          </li>
          <li className='nav-link'>
            Men
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar