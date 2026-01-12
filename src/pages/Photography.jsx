import React from 'react';
import { ExternalLink, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const photos = [
    { id: 1, url: "/portfolio/photos/ring.JPG", caption: "The Ring" }, 
    { id: 2, url: "/portfolio/photos/bridge.jpeg", caption: "City" },
    { id: 3, url: "/portfolio/photos/hands.jpeg", caption: "Nature"},
    { id: 4, url: "/portfolio/photos/kvShadow.jpeg", caption: "Shadow" }, 
    { id: 5, url: "/portfolio/photos/sunrise.jpeg", caption: "Sunrise" },
    { id: 6, url: "/portfolio/photos/NOShadow.jpeg", caption: "Nature"},
    { id: 7, url: "/portfolio/photos/mermaid.jpeg", caption: "The Ring" }, 
    { id: 8, url: "/portfolio/photos/blueBeach.jpeg", caption: "City" },
    { id: 9, url: "/portfolio/photos/sofia.jpeg", caption: "Nature"},
    { id: 10, url: "/portfolio/photos/MO.jpeg", caption: "The Ring" }, 
    { id: 11, url: "/portfolio/photos/met.jpeg", caption: "City" },
    { id: 12, url: "/portfolio/photos/soho.jpeg", caption: "Nature"},
];

const Photography = () => {
  return (
    <div className="photography-page">
      <div className="photography-header">
        <Link to="/" className="back-link"><ArrowLeft /> Back to Portfolio</Link>
        <h1>Photography Gallery</h1>
        <a href="https://www.instagram.com/zypicz" target="_blank" className="portfolio-link">
          View More Photos <ExternalLink size={18} />
        </a>
      </div>

      <div className="gallery-grid">
        {photos.map(photo => (
          <div key={photo.id} className="gallery-item">
            <img src={photo.url} alt={photo.caption} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photography;