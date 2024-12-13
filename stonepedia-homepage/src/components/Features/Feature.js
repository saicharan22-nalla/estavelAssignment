import React from 'react';
import './Features.css';
import { FaCheckDouble, FaHome, FaUserGraduate, FaTruck, FaFileAlt } from 'react-icons/fa'; 

function Features() {
  return (
    <div className='features-color'>
        <div className="why-stonepedia-container">
      <div className="subheading">REDEFINING STONE SOURCING</div>
      <h1 className="heading">Why StonePedia?</h1>
    </div>

    <div className="features-container">
      <div className="feature">
        <div className="feature-icon">
          <div className="circle">
            <FaCheckDouble size={45} color="#fff" text-center /> 
          </div>
        </div>
        <h3>Rigorous Quality Control</h3>
        <p>Multi-level inspections ensure every stone meets the highest durability and aesthetic standards.</p>
      </div>

      <div className="feature text-center">
        <div className="feature-icon text-center">
          <div className="circle text-center ">
            <FaUserGraduate size={45} color="#fff" /> 
          </div>
        </div>
        <h3>Certified Suppliers & Compliance</h3>
        <p>Sourced from certified suppliers, every stone complies with global and local regulations.</p>
      </div>

      <div className="feature">
        <div className="feature-icon">
          <div className="circle">
            <FaUserGraduate size={45} color="#fff" /> 
          </div>
        </div>
        <h3>Expert Guidance And Support</h3>
        <p>StonePedia's specialists provide expert advice on material selection, application, and maintenance.</p>
      </div>

      <div className="feature">
        <div className="feature-icon">
          <div className='centerd d-flex flex-column justify-content-center text-center'>
          <div className="circle" >
            <FaTruck size={45} color="#fff" /> 
          </div>
          </div>
        </div>
        <h3>Comprehensive High-Quality Stones</h3>
        <p>Reliable, on-time delivery of stones directly to your project site, ensuring seamless logistics.</p>
      </div>

      <div className="feature">
        <div className="feature-icon">
          <div className="circle">
            <FaHome size={45} color="#fff" /> 
          </div>
        </div>
        <h3>Doorstep Delivery</h3>
        <p>Reliable, on-time delivery of stones directly to your project site, ensuring seamless logistics.</p>
      </div>

      <div className="feature">
        <div className="feature-icon">
          <div className="circle">
            <FaFileAlt size={45} color="#fff" /> 
          </div>
        </div>
        <h3>Guaranteed Order Fulfillment</h3>
        <p>Accurate and timely order processing to meet all project timelines without delays.</p>
      </div>

    </div>

    <div>
      <img src='https://res.cloudinary.com/dlfwqynh5/image/upload/v1734099437/d7a298d507e58de3_7320-w1050-h525-b2-p0-q90-_ldryqy.webp' className='image-2'/>
    </div>
    
    </div>
  );
}

export default Features;

