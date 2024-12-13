import React,{useState} from 'react';
import './Navbar.css';
import { FiMenu } from "react-icons/fi";
import Sidebar from '../Sidebar/Sidebar';

function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <a href="/">
            <img src="https://res.cloudinary.com/dlfwqynh5/image/upload/v1734089366/logoo-1_hrujc7.png" alt="StonePedia Logo" /> 
          </a>
        </div>
        <div className="nav-links">
          <ul>
            <li><a href="/shop-by-category">SHOP BY CATEGORY</a></li>
            <li><a href="/partner-with-us">PARTNER WITH US</a></li>
          </ul>
        </div>
        <div className="search-cart">
          <div className="search-bar">
            <input type="text" placeholder="Search for products..." />
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
            </button>
          </div>
          <div className="cart">
            <a href="/cart">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0V1.5H1a.5.5 0 0 1-.5-.5z"/>
                <path d="M6 14a1 1 0 0 0 1 1v1H5a1 1 0 0 0-1-1v-1zm3 0a1 1 0 0 0 1 1v1H9a1 1 0 0 0-1-1v-1zM10 14a1 1 0 0 0 1 1v1H9a1 1 0 0 0-1-1v-1zm3 0a1 1 0 0 0 1 1v1H13a1 1 0 0 0-1-1v-1z"/>
                <path d="M3.354 6.854a.5.5 0 1 0-.708-.708L6.293 5 4.882 3.59L3.354 6.854zM.5 10a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H.5z"/>
              </svg>
              <span className="cart-count">0</span> 
            </a>
          </div>
          <div className="menu">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
          </div>
          <Sidebar isOpen={isMenuOpen} onClose={toggleMenu} /> 
          <button className="menu-button" onClick={toggleMenu}>
          <FiMenu />
        </button>
         
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
