import React from 'react';
import { Link } from 'gatsby';
import { FaGithub } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
    return(
        <Link to={`/projects/${project.slug}`} 
        className='block bg-background-50 rounded-lg shadow-md hover:shadow-lg transition duration-300'>
            <div className='p-6'>
                <h2 className='text-xl font-bold mb-2 text-text-900'> {project.title} </h2>
                <p className='text-text-700 mb-4'> {project.description} </p>
                <div className='flex flex-wrap mb-4'>
                    {project.tags.map((tag, index) => (
                        <span key={index} 
                        className="bg-accent-400 text-primary-800 px-2 py-1 rounded-full text-xs font-medium mr-2 mb-2">
                            {tag}
                        </span>
                    ))}
                </div>
                <div className='flex items-center'>
                    <a href={project.githubLink} target='_blank' rel="noopener noreferrer" className="text-text-500 hover:text-text-700">
                        <FaGithub size={20} />
                    </a>
                </div>
            </div>
        </Link>
    )
}

export default ProjectCard;