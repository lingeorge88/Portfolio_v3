import React from 'react';
import ProjectCard from './ProjectCard';
import SMAppImg from '../assets/SMApp.png';
import GameStoreImg from '../assets/GameStore.png';
import PixelFighterImg from '../assets/PixelFighter.png';
import PokeAppImg from '../assets/PokeApp.png';

// Example Technology Icons (placeholders - you might use actual icon components/SVGs)
const TechIcon = ({ name }) => (
  <div className="badge badge-secondary badge-outline">{name}</div> 
);

function Projects() {
  // Define project data (replace with your actual projects)
  const projectData = [
    {
      id: 1,
      title: "Social Village",
      description: "A full-stack social media application that mimics Facebook with real time updates and user interactions.",
      imageUrl: SMAppImg,
      liveUrl: "https://gatherly88.onrender.com/",
      repoUrl: "https://github.com/lingeorge88/MERN_Social_Media",
      technologies: ["React", "Node.js", "MongoDB", "TailwindCSS", "Render.io"],
    },
    {
      id: 2,
      title: "Retro Rush",
      description: "An e-commerce platform geared towards retro video game enthusiasts and collectors with user payment processing and custom CSS styling.",
      imageUrl: GameStoreImg,
      liveUrl: "https://retro-rush-38883.netlify.app/",
      repoUrl: "https://github.com/lingeorge88/8bitGamesV2", 
      technologies: ["React", "Node.js", "Netlify", "Stripe", "React Lazy"],
    },
    {
      id: 3,
      title: "Pixel Fighter",
      description: "A retro-style two-player shooting game built with Pygame.",
      imageUrl: PixelFighterImg,
      liveUrl: "https://www.youtube.com/watch?v=D9IKvuRBKG0",
      repoUrl: "https://github.com/lingeorge88/Pixel_Fighter",
      technologies: ["Python", "PyGame"],
    },
    {
      id: 4,
      title: "Poké Trader",
      description: "A Pokemon TCG application that lets users collect, browse and trade with other Pokémon card collectors and players",
      imageUrl: PokeAppImg,
      liveUrl: "https://poketraderv1.herokuapp.com/",
      repoUrl: "https://github.com/lingeorge88/Poke_Trader",
      technologies: ["ReactJS", "MongoDB", "GraphQL", "MaterialUI", "ExpressJS"],
    },
  ];

  return (
    <div id="projects" className="py-16 px-4 bg-base-100"> 
      <div className="max-w-6xl mx-auto text-center"> 
        <h2 className="text-4xl font-bold mb-12">My Projects</h2>
        
        {/* Tailwind Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"> 
          {projectData.map((project) => (
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