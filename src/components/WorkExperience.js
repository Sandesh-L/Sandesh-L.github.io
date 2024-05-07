import React from 'react';
import { useStaticQuery, graphql, Link as GatsbyLink } from 'gatsby';
import ReactMarkdown from 'react-markdown';


const WorkExperience = () => {
    const data = useStaticQuery(graphql`
    query {
        allWorkExperienceJson {
          edges {
            node {
              positionTitle
              companyName
              location
              startDate
              endDate
              descriptions
            }
          }
        }
      }
    `);

    const workExperience = data.allWorkExperienceJson.edges.map((edges) => edges.node) || [];

    const renderLink = ({ href, children }) => {
        if (href.startsWith('/')) {
          // Internal link
          return (
            <GatsbyLink to={href} className="text-blue-500 hover:underline">
              {children}
            </GatsbyLink>
          );
        } else {
          // External link
          return (
            <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              {children}
            </a>
          );
        }
      };

    return (
        <div className="mb-8">
            {workExperience.map((experience, index) => (
                    <div key={index} className="mb-4">
                        <h3 className="text-lg font-bold">{experience.positionTitle}</h3>
                        <p className="text-sm text-text-700">{experience.companyName}, {experience.startDate} - {experience.endDate}</p>
                        <ul className="list-disc pl-6 mt-2">
                            {experience.descriptions.map((description, index) => (
                                <li key={index}>
                                    <ReactMarkdown components={{a:renderLink}}>
                                        { `${description}` }
                                    </ReactMarkdown>
                                </li>
                                ))}
                        </ul>
                    </div>
                )
            )}
        </div>
    );
};

export default WorkExperience;