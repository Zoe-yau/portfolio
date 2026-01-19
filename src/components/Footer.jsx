import React from 'react';
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer-bar">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Zoe Yau</p>
        
        <div className="social-links">
          <a 
            href="https://github.com/zoe-yau" 
            target="_blank" 
            rel="noreferrer" 
            aria-label="GitHub Profile"
          >
            <Github size={20} />
          </a>
          <a 
            href="https://linkedin.com/in/zoe-yau99" 
            target="_blank" 
            rel="noreferrer" 
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href="mailto:zoeyau99@yahoo.com" 
            aria-label="Send Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;