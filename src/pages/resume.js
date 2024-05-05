// src/pages/resume.js
import React from 'react';
import Layout from '../components/Layout';
import WorkExperience from '../components/WorkExperience';
import Education from '../components/Education';
import Skills from '../components/Skills';

const ResumePage = () => {
  return (
    <Layout>
      <div className="py-12 bg-gradient-to-b from-primary-200 to-background-950">
        <div className="max-w-4xl mx-auto bg-white text-900 shadow-lg rounded-lg overflow-hidden">
          <div className="px-6 py-8">
            <h1 className="text-4xl font-bold mb-4">Your Name</h1>
            <p className="text-lg mb-4">Your Profession/Title</p>
            <div className="mb-8">
              <p>Email: your.email@example.com</p>
              <p>Phone: (123) 456-7890</p>
              <p>Location: City, Country</p>
            </div>
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">Summary</h2>
              <p>
                A brief summary highlighting your professional experience, skills, and career objectives.
              </p>
            </div>
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
              <WorkExperience />
            </div>
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Education</h2>
              <Education />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Skills</h2>
              <Skills />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ResumePage;