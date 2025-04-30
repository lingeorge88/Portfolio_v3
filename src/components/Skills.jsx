import React from 'react';

// Import specific icons from devicons-react
import JavascriptPlain from 'devicons-react/lib/icons/JavascriptPlain';
import ReactOriginal from 'devicons-react/lib/icons/ReactOriginal';
import NodejsPlain from 'devicons-react/lib/icons/NodejsPlain';
import Html5Plain from 'devicons-react/lib/icons/Html5Plain';
import Css3Plain from 'devicons-react/lib/icons/Css3Plain';
import Tailwindcss from 'devicons-react/lib/icons/TailwindcssOriginal'; 
import JavaPlain from 'devicons-react/lib/icons/JavaPlain';
import PythonPlain from 'devicons-react/lib/icons/PythonPlain';
import CPlain from 'devicons-react/lib/icons/CPlain';
import GitPlain from 'devicons-react/lib/icons/GitPlain';
import GithubOriginal from 'devicons-react/lib/icons/GithubOriginal';
import FigmaPlain from 'devicons-react/lib/icons/FigmaPlain';
// Import others as needed...

// Define skills data using the imported components
// Note: The component itself is stored in the 'IconComponent' property
const skillsData = [
  { name: 'JavaScript', IconComponent: JavascriptPlain },
  { name: 'React', IconComponent: ReactOriginal },
  { name: 'Node.js', IconComponent: NodejsPlain },
  { name: 'HTML5', IconComponent: Html5Plain },
  { name: 'CSS3', IconComponent: Css3Plain },
  { name: 'TailwindCSS', IconComponent: Tailwindcss }, 
  { name: 'Java', IconComponent: JavaPlain },
  { name: 'Python', IconComponent: PythonPlain },
  { name: 'C', IconComponent: CPlain },
  { name: 'Git', IconComponent: GitPlain },
  { name: 'GitHub', IconComponent: GithubOriginal },
  { name: 'Figma', IconComponent: FigmaPlain },
  // Add more skills here
];

function Skills() {
  return (
    <div id="skills" className="py-16 px-4 bg-base-200 rounded-xl"> {/* Match About section styling */}
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Skills & Technologies</h2>

        {/* Responsive Grid for Skills */}
        {/* Adjust columns (cols-3, cols-4, etc.) and breakpoints (sm, md, lg) as needed */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-8">
          {skillsData.map((skill) => {
            // Destructure the IconComponent from the skill object
            const { IconComponent } = skill; 
            return (
              <div key={skill.name} className="flex flex-col items-center p-4 rounded-lg transition-transform duration-300 hover:scale-110 hover:bg-base-100/50"> {/* Container for icon + name */}
                {/* Render the IconComponent */}
                <IconComponent size="60" className="mb-2" /> {/* Pass size and margin */}
                {/* Skill Name */}
                <span className="text-sm font-medium">{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Skills;
