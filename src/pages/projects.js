// index.js
import React from 'react';
import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCards';


const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'A brief description of Project 1',
      tags: ['Machine Learning', 'Data Analytics'],
      githubLink: 'https://github.com/username/project1',
      slug: 'project-1',
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'A brief description of Project 2',
      tags: ['Software Development', 'Web App'],
      githubLink: 'https://github.com/username/project2',
      slug: 'project-2',
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'A brief description of Project 3',
      tags: ['Software Development', 'Web App'],
      githubLink: 'https://github.com/username/project3',
      slug: 'project-3',
    },
    {
      id: 4,
      title: 'Project 4',
      description: 'A brief description of Project 4',
      tags: ['Software Development', 'Web App'],
      githubLink: 'https://github.com/username/project4',
      slug: 'project-4',
    },
  ]

  return (
    <Layout>
      <div className='min-h-fit bg-background-100'>

        <div className='py-12'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h1 className='text-3xl font-bold mb-8 text-text-900'> Projects </h1>
            <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project}/>
                ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectsPage;