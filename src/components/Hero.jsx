import Wave3D from "./Wave3D"; 

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h1>Zoe Yau</h1>
        <p> Portfolio </p>
      </div>
      <div className="wave-3d-container">
        <Wave3D />
      </div>
    </section>
  );
};

export default Hero;