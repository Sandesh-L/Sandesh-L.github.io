import React from 'react';
import { motion } from 'framer-motion';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCards';

const ProjectsPage = () => {

  const data = useStaticQuery(graphql`
    query{
      allProjectsJson {
        edges {
          node {
            id
            title
            description
            tags
            githubLink
            websiteLink
            slug
          }
        }
      }
    }
  `);
  const projects = data.allProjectsJson.edges.map((edge)=>edge.node) || [];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-primary-200 to-background-950">
        <div className="py-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-3xl font-bold mb-8 text-text-900"
            >
              Projects
            </motion.h1>
            {projects.length > 0 ?(
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="columns-1 gap-8 md:columns-2 lg:columns-3"
              >
                {projects.map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
              </motion.div>
            ) : (
              <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  No projects found.
                </motion.p>
            )}
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectsPage;