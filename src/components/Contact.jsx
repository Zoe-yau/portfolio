import React from 'react';
import { User, Mail, Phone, Linkedin, Github } from 'lucide-react'; // Added Linkedin and Github

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-card">
        <h2>Get In Touch</h2>
        <div className="contact-info">
          <p><User size={20} /> <strong>Name:</strong> Zoe Yau</p>
          <p className="email"><Mail size={20} /> <strong>Email:</strong> <a href="mailto:zoeyau99@yahoo.com">zoeyau99@yahoo.com</a></p>
          <p class="phone-number"><Phone size={20} /> <strong>Phone:</strong> (469) 207-4058</p>
          
          <p className="social-row">
            <strong>Social:</strong> 
            <div className="social-icons">
              <a href="https://linkedin.com/in/zoe-yau99" target="_blank" rel="noreferrer">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com/zoe-yau" target="_blank" rel="noreferrer">
                <Github size={24} />
              </a>
            </div>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;