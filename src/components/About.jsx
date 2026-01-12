import { Code, Database, Settings, BookOpen, Users } from "lucide-react";

const About = () => {
  const skills = {
    languages: ["JavaScript", "Python", "Java", "Swift", "C#", "C++", "SQL", "HTML5", "CSS3"],
    frameworks: ["React", "Node.js", "API Integration"],
    tools: ["GitHub", "Linux", "Microsoft Office"],
    fundamentals: ["Algorithm Design", "Data Structures"],
    softSkills: ["Analytical Skills", "Communication", "Collaboration", "Leadership", "Adaptability", "Problem Solving"]
  };

  const SkillBadge = ({ name }) => (
    <span className="skill-badge">{name}</span>
  );

  return (
    <section id="about" className="about-page-container">
      <div className="about-card">
        <div className="about-main-content">
          <img src="/portfolio/images/zoe.JPG" alt="Zoe Yau" className="scrapbook-photo" />
          
          <div className="about-text-block">
            <h3>About Me</h3>
            <p className="about-text">Hi! I'm Zoe, a Computer Science student at Texas A&M University with minors in business and math. </p>
            <p>I specialize in building high-performance, user-focused solutions through innovation and process optimization. With a technical toolkit spanning JavaScript, Python, and React, I thrive in fast-paced, collaborative environments where I can apply my analytical skills to solve complex problems.</p>
          </div>
        </div>

        <div className="about-footer-lists" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
          
          <div className="skill-column">
            <h4 className="flex items-center gap-2"><Code size={18} /> Languages</h4>
            <div className="badge-container">
              {skills.languages.map(skill => <SkillBadge key={skill} name={skill} />)}
            </div>
          </div>

          <div className="skill-column">
            <h4 className="flex items-center gap-2"><Database size={18} /> Libraries & Frameworks</h4>
            <div className="badge-container">
              {skills.frameworks.map(skill => <SkillBadge key={skill} name={skill} />)}
            </div>
          </div>

          <div className="skill-column">
            <h4 className="flex items-center gap-2"><Settings size={18} /> Tools & Platforms</h4>
            <div className="badge-container">
              {skills.tools.map(skill => <SkillBadge key={skill} name={skill} />)}
            </div>
          </div>

          <div className="skill-column">
            <h4 className="flex items-center gap-2"><BookOpen size={18} /> CS Fundamentals</h4>
            <div className="badge-container">
              {skills.fundamentals.map(skill => <SkillBadge key={skill} name={skill} />)}
            </div>
          </div>

          <div className="skill-column">
            <h4 className="flex items-center gap-2"><Users size={18} /> Soft Skills</h4>
            <div className="badge-container">
              {skills.softSkills.map(skill => <SkillBadge key={skill} name={skill} />)}
            </div>
          </div>

        </div>
      </div>
    </section>
    
  );
};

export default About;