import React from 'react';
import './Sidebar.css';
import { FaTimes } from 'react-icons/fa'

function Sidebar({ isOpen, onClose }) { 
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
    <div className="sidebar-header">
    <button className="close-button" onClick={onClose}> 
          <FaTimes /> 
        </button>
    </div>
      <div className="sidebar-content">
      <a href="/">
            <img src="https://res.cloudinary.com/dlfwqynh5/image/upload/v1734089366/logoo-1_hrujc7.png" alt="StonePedia Logo" className='image' /> 
          </a>
        <h2>Your Trusted Global Stone Marketplace</h2>
        <p>At StonePedia, We are redefining the future. StonePedia is an award winning platform simplifying the purchase of the world's finest stone through certified and verified quarry owners and stone processing units across the globe.</p>
        <ul>
          <li>Best Seller</li>
          <li>StonePedia Exclusive</li>
          <li>Premium Stones</li>
        </ul>
        <a href="#">Shop by Category</a>
      </div>
    </div>
  );
}

export default Sidebar;