// src/pages/index.js
import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

const HomePage = () => {
  return (
    <Layout>
      <section className="bg-background-100 text-text-900 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
          <p className="text-xl mb-8">
            Hi, I'm [Your Name], a [Your Profession/Title].
          </p>
          <div className="mb-12">
            <p className="mb-4">
              [Brief introduction about yourself, your skills, and your passion.]
            </p>
            <p>
              [Additional information or a call-to-action, e.g., "Check out my projects and resume!"]
            </p>
          </div>
          <div className="flex space-x-4">
            <Link
              to="/projects"
              className="bg-primary-500 text-background-50 px-6 py-3 rounded hover:shadow-accent hover:shadow-md transition duration-300"
            >
              View Projects
            </Link>
            <Link
              to="/resume"
              className="bg-secondary-500 text-background-50 px-6 py-3 rounded hover:shadow-accent hover:shadow-md transition duration-300"
            >
              View Resume
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-background-200 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-accent-700">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="mb-4">
                [More detailed information about yourself, your background, and your experience.]
              </p>
              <p>
                [Additional information or highlights of your skills and achievements.]
              </p>
            </div>
            <div>
              {/* You can add an image of yourself or any other relevant content */}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;