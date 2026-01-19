import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react"; 

const projects = [
    {
      id: 1,
      title: "Care Bear",
      description: "AI project designed for medical data synthesis and patient care analysis.",
      image: "/portfolio/projects/project1.png",
      tags: ["Python", "HTML", "Javascript"],
      demoUrl: "",
      githubUrl: "https://github.com/Allen-ISD-Computer-Science/REPO_NASA_MedicalDataSynthesis_2024",
    },
    {
      id: 2,
      title: "Shelter Safe",
      description: "A mobile-focused application to help users easily find and navigate to local shelters.",
      image: "/portfolio/projects/shelterSafe.png",
      tags: ["Swift", "Xcode", "Javascript"],
      demoUrl: "",
      githubUrl: "https://github.com/CSAllenISD/2023-ISP-ShelterSafe",
    },
    {
      id: 3,
      title: "Maroon Reviews",
      description: "A specialized review platform for dining and locations across the Texas A&M Campus.",
      image: "/portfolio/projects/secondBack.png",
      tags: ["HTML", "CSS", "Javascript"],
      demoUrl: "https://zoe-yau.github.io/maroonRecs/",
      githubUrl: "https://github.com/Zoe-yau/maroonRecs",
    },
  ];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Selected Works</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <motion.div 
            key={project.id}
            className="project-card"
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="image-container">
              <img src={project.image} alt={project.title} />
              <motion.div 
                className="hover-overlay"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <div className="overlay-buttons">
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="overlay-btn">
                    <Github size={18} /> GitHub
                  </a>
                
                  {project.demoUrl && (
                    <a href={project.demoUrl} className="overlay-btn">
                      <ExternalLink size={18} /> Demo
                    </a>
                  )}
        

                </div>
              </motion.div>
            </div>

            <div className="project-info">
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
            
            <div className="tags-container">
              {project.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>

            <div className="mobile-actions">
              <div className="mobile-github-link">
                <a href={project.githubUrl} target="_blank" rel="noreferrer">
                  <Github size={18} /> GitHub
                </a>
              </div>
            </div>
          </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;