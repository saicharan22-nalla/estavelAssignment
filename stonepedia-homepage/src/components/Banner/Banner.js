import React, { useState, useEffect, useRef } from 'react';
import './Banner.css';

function Banner() {
  const [translateY, setTranslateY] = useState(0);
  const maxTranslateY = 10; // Adjust this value for the maximum movement
  const direction = useRef(1); // 1 for up, -1 for down

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newTranslateY = translateY + direction.current;

      if (newTranslateY > maxTranslateY || newTranslateY < -maxTranslateY) {
        direction.current = -direction.current; // Reverse direction
      }

      setTranslateY(newTranslateY);
    }, 10); // Adjust the interval time for animation speed

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="banner-container">
      <img 
        src="https://stonepedia.in/wp-content/uploads/2024/04/banner-2.png" 
        alt="Stone Pedia Banner" 
        className="banner-image"
        style={{ transform: `translateY(${translateY}%)` }} 
      />
      <div className="banner-title-container">
        <h2 className="banner-title">Your One-Stop Platform For The<br />World's Finest Natural Stones</h2>
      </div>
      
    </div>
  );
}

export default Banner;
