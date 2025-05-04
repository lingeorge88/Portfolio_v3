import React from "react";

function SkillCard({ title, skills }) {
    return (
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body items-center text-center">
          <h3 className="card-title text-xl font-semibold mb-4">{title}</h3>
          <ul className="list-none space-y-2 w-full">
            {skills.map((skill) => {
              const { IconComponent } = skill;
              return (
                <li key={skill.name} className="flex items-center justify-start space-x-3">
                  <IconComponent size="24" />
                  <span className="text-sm">{skill.name}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
}

export default SkillCard;

