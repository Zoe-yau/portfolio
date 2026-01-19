import React from 'react';
import Wave3D from "./Wave3D"; 

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="wave-3d-container">
        <Wave3D />
      </div>

      <div className="hero-content">
        <h1>Zoe Yau</h1>
        <p className="hero-subtitle"> Portfolio </p> 
      </div>
    </section>
  );
};

export default Hero;