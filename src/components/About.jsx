import { Code, Database, Terminal } from "lucide-react";

const About = () => {
  const skills = {
    frontend: {
      languages: ["JavaScript", "HTML", "CSS", "Swift"],
      frameworks: ["React", "Three.js", "Tailwind CSS"]
    },
    backend: {
      languages: ["Python", "Java", "C#", "C++", "SQL"],
      tools: ["Node.js", "PostgreSQL", "API Integration"]
    }
  };

  const SkillBadge = ({ name }) => (
    <span className="skill-badge">{name}</span>
  );

  return (
    <section id="about" className="about-page-container">
      <div className="about-card">
        {/* This is the container that will use Flexbox */}
        <div className="about-main-content">
          <img src="/images/zoe.JPG" alt="Zoe Yau" className="scrapbook-photo" />
          
          <div className="about-text-block">
            <h3>About Me</h3>
            <p class="about-text">Hi! I'm Zoe, a Computer Science student at Texas A&M University with minors in business and math. </p>
            <p>I specialize in building high-performance, user-focused solutions through innovation and process optimization. With a technical toolkit spanning JavaScript, Python, and React, I thrive in fast-paced, collaborative environments where I can apply my analytical skills to solve complex problems.</p>
          </div>

        </div>
        <div className="about-footer-lists">

          
    <div className="skill-column">
      <h4>Frontend Skills</h4>
      <div className="badge-container">
        {[...skills.frontend.languages, ...skills.frontend.frameworks].map(skill => (
          <SkillBadge key={skill} name={skill} />
        ))}
      </div>
    </div>
      <div className="skill-column">
        <h4>Backend Skills</h4>
        <div className="badge-container">
          {[...skills.backend.languages, ...skills.backend.tools].map(skill => (
            <SkillBadge key={skill} name={skill} />
        ))}
      </div>
    </div>
  </div>
      </div>


    </section>
    
  );
};

export default About;