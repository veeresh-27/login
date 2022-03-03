import React from 'react'
import './Navbar.css'
import { useState,useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';

function Navbar({onClickNavTitile}) {
  const [show, setShow] = useState(false);
  const navbarScroll = () => {
    if (window.scrollY > 100 )
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
      <div className="navbarTitle" onClick={onClickNavTitile}>
        <h3>Shmart</h3>
      </div>
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
            Clothing
          </li>
          
        </ul>
      </div>
      <div className="profileIcon">
          <Avatar />
      </div>
    </div>
  )
}

export default Navbar