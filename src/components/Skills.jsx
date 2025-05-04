import React from 'react';
import SkillCard from './SkillCard';
import JavascriptPlain from 'devicons-react/lib/icons/JavascriptPlain';
import ReactOriginal from 'devicons-react/lib/icons/ReactOriginal';
import NodejsPlain from 'devicons-react/lib/icons/NodejsPlain';
import Html5Plain from 'devicons-react/lib/icons/Html5Plain';
import Css3Plain from 'devicons-react/lib/icons/Css3Plain';
import RPlain from 'devicons-react/lib/icons/RPlain';
import TailwindcssOriginal from 'devicons-react/lib/icons/TailwindcssOriginal';
import JavaPlain from 'devicons-react/lib/icons/JavaPlain';
import PythonOriginal from 'devicons-react/lib/icons/PythonOriginal';
import { PythonOriginalWordmark } from 'devicons-react';


import CPlain from 'devicons-react/lib/icons/CPlain';
import GitPlain from 'devicons-react/lib/icons/GitPlain';
import GithubOriginal from 'devicons-react/lib/icons/GithubOriginal';
import FigmaPlain from 'devicons-react/lib/icons/FigmaPlain';


// Categorize skills data
const languages = [
  { name: 'JavaScript', IconComponent: JavascriptPlain },
  { name: 'Java', IconComponent: JavaPlain },
  { name: 'Python', IconComponent: PythonOriginal },
  { name: 'C', IconComponent: CPlain },
  { name: 'HTML5', IconComponent: Html5Plain },
  { name: 'CSS3', IconComponent: Css3Plain },
  {name : 'R', IconComponent: RPlain}
];

const frameworksLibraries = [
  { name: 'React', IconComponent: ReactOriginal },
  { name: 'Node.js', IconComponent: NodejsPlain },
  { name: 'TailwindCSS', IconComponent: TailwindcssOriginal },
];

const tools = [
  { name: 'Git', IconComponent: GitPlain },
  { name: 'GitHub', IconComponent: GithubOriginal },
  { name: 'Figma', IconComponent: FigmaPlain },
];

function Skills() {
  return (
    <div id="skills" className="py-16 px-4 bg-base-200 rounded-xl">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">My Tech Stack</h2>
        <p className="mb-12 text-lg">Here are some languages and tools I have worked with</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SkillCard title="Languages" skills={languages} />
          <SkillCard title="Frameworks & Libraries" skills={frameworksLibraries} />
          <SkillCard title="Tools & Platforms" skills={tools} />
        </div>
      </div>
    </div>
  );
}

export default Skills;
