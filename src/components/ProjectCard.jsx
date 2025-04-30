import React from 'react';

// Placeholder Technology Icon component (can be enhanced later)
const TechIcon = ({ name }) => (
  <div className="badge badge-secondary badge-outline">{name}</div> 
);

// ProjectCard component accepting props
function ProjectCard({ title, description, imageUrl, liveUrl, repoUrl, technologies }) {
  return (
    <div className="card w-80 sm:w-96 bg-base-100 shadow-xl flex flex-col"> {/* Responsive width and flex container with vertical flow */}
      <figure className="px-4 pt-4"> 
        <img src={imageUrl} alt={title} className="rounded-xl h-48 object-cover w-full flex-shrink-0"/> 
      </figure>
      <div className="card-body items-center text-center px-4 py-6 flex-grow"> 
        <h3 className="card-title mb-2">{title}</h3>
        <p className="text-sm mb-4">{description}</p>
        
        {/* Technology Icons Area */}
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {technologies && technologies.map((tech) => ( // Check if technologies array exists
            <TechIcon key={tech} name={tech} />
          ))}
        </div>

        {/* Card Actions: Live Demo and Repo Buttons */}
        <div className="card-actions justify-center mt-auto pt-4"> {/* mt-auto pushes to bottom, pt-4 adds space */}
          {liveUrl && liveUrl !== "#" && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">Live Demo</a>
          )}
          {/* Added conditional rendering for Repo button as well */}
          {repoUrl && repoUrl !== "#" && (
             <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">Code Repo</a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;