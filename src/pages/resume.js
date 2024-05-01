// src/pages/resume.js
import React from 'react';
import Layout from '../components/Layout';
import WorkExperience from '../components/WorkExperience';
import Education from '../components/Education';
import Skills from '../components/Skills';

const ResumePage = () => {
  return (
    <Layout>
      <div className="py-12 bg-background-100">
        <div className="max-w-4xl mx-auto bg-background-50 text-text-900 shadow-lg rounded-lg overflow-hidden">
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

            <WorkExperience/>
            <Education/>
            <Skills/>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ResumePage;