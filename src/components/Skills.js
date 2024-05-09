// src/components/Skills.js
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';



const Skills = () => {

    const data = useStaticQuery(graphql`
    query {
      allSkillsJson {
          nodes {
            programmingLanguages
            webDevelopment
            hpcAndCiSkills
            toolsAndPlatforms
            coursework
          }
      }
    }
    `);

    const allSkills = data.allSkillsJson.nodes[0] || [];

  return (
    <div>
      <ul className="list-disc pl-6 mb-4">
        <li><strong>Programming Languages:</strong> {allSkills.programmingLanguages}</li>
        <li><strong>Web Development:</strong> {allSkills.webDevelopment}</li>
        <li><strong>Tools & Platforms:</strong> {allSkills.toolsAndPlatforms}</li>
        <li><strong>HPC & CI Skills:</strong> {allSkills.hpcAndCiSkills}</li>
        <li><strong>Coursework:</strong> {allSkills.coursework}</li>
      </ul>
    </div>
  );
};

export default Skills;