import React from 'react';
import { Link } from 'gatsby';
import { FaGithub, FaGlobe } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  const handleIconClick = (event) => {
    event.stopPropagation();
  
  }
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className='py-3 break-inside-avoid-column'
    >
      <Link
        // to={`/projects/${project.slug}`}
        to={`/projects/#`}
        className="block bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300"
      >
        <div className="p-6">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl font-bold mb-2 text-primary-200"
          >
            {project.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-text-400 mb-4"
          >
            {project.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap mb-4"
          >
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-secondary-600 text-text-100 px-2 py-1 rounded-full text-xs font-medium mr-2 mb-2"
              >
                {tag}
              </span>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center"
          >
            {project.githubLink.length >0 ? (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 text-text-600 hover:text-accent-500"
                onClick={handleIconClick}
              >
                <FaGithub size={20} />
              </a>
            ):(
              null
            )}
            {project.websiteLink ? (
              <a
                href={project.websiteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 text-text-600 hover:text-accent-500"
                onClick={handleIconClick}
              >
                <FaGlobe size={20} />
              </a>
            ):(
              null
            )}

          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;