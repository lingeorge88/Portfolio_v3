import React from 'react';
import ProjectCard from './ProjectCard';

// Placeholder images and icons - replace later
const placeholderImg1 = "https://via.placeholder.com/400x200/808080/ffffff?text=Project+1";
const placeholderImg2 = "https://via.placeholder.com/400x200/707070/ffffff?text=Project+2";
const placeholderImg3 = "https://via.placeholder.com/400x200/606060/ffffff?text=Project+3";

// Example Technology Icons (placeholders - you might use actual icon components/SVGs)
const TechIcon = ({ name }) => (
  <div className="badge badge-secondary badge-outline">{name}</div> 
);

function Projects() {
  // Define project data (replace with your actual projects)
  const projectData = [
    {
      id: 1,
      title: "Interactive Dashboard",
      description: "A dynamic dashboard built with React and D3.js for visualizing data trends effectively.",
      imageUrl: placeholderImg1,
      liveUrl: "https://example.com/dashboard",
      repoUrl: "https://github.com/your-repo/dashboard",
      technologies: ["React", "D3.js", "Tailwind"],
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description: "Full-stack online store featuring product listings, cart management, and checkout. This description is a bit longer to test height differences.",
      imageUrl: placeholderImg2,
      liveUrl: "https://example.com/store",
      repoUrl: "#", 
      technologies: ["Node.js", "Express", "MongoDB", "React", "Another", "One"],
    },
    {
      id: 3,
      title: "Portfolio Website V2",
      description: "Previous version of my personal portfolio.",
      imageUrl: placeholderImg3,
      liveUrl: "#",
      repoUrl: "https://github.com/your-repo/portfolio-v2",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    // Add more projects as needed
  ];

  // Restore the full return statement with the grid layout
  return (
    <div id="projects" className="py-16 px-4 bg-base-100"> 
      <div className="max-w-6xl mx-auto text-center"> 
        <h2 className="text-4xl font-bold mb-12">My Projects</h2>
        
        {/* Tailwind Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"> 
          {projectData.map((project) => (
            // Render ProjectCard for each project
            <ProjectCard 
              key={project.id} 
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              liveUrl={project.liveUrl}
              repoUrl={project.repoUrl} 
              technologies={project.technologies}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;