import React from 'react';
import { ExternalLink, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const photos = [
    { id: 1, url: "/photos/ring.JPG", caption: "The Ring" }, 
    { id: 2, url: "/photos/bridge.jpeg", caption: "City" },
    { id: 3, url: "/photos/hands.jpeg", caption: "Nature"},
    { id: 4, url: "/photos/kvShadow.jpeg", caption: "Shadow" }, 
    { id: 5, url: "/photos/sunrise.jpeg", caption: "Sunrise" },
    { id: 6, url: "/photos/NOShadow.jpeg", caption: "Nature"},
    { id: 7, url: "/photos/mermaid.jpeg", caption: "The Ring" }, 
    { id: 8, url: "/photos/blueBeach.jpeg", caption: "City" },
    { id: 9, url: "/photos/sofia.jpeg", caption: "Nature"},
    { id: 10, url: "/photos/MO.jpeg", caption: "The Ring" }, 
    { id: 11, url: "/photos/met.jpeg", caption: "City" },
    { id: 12, url: "/photos/soho.jpeg", caption: "Nature"},
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