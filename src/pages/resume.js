// src/pages/resume.js
import React from 'react';
import Layout from '../components/Layout';
import WorkExperience from '../components/WorkExperience';
import Education from '../components/Education';
import Skills from '../components/Skills';
import { motion } from 'framer-motion';


const ResumePage = () => {
  return (
    <Layout>
      <section id='resume' className='bg-gradient-to-b from-primary-200 to-background-950'>
        <div className="py-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-5xl mx-auto bg-white text-900 shadow-lg rounded-lg overflow-hidden"
          >
            <div className="px-6 py-8">
              <motion.h1
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="text-4xl font-bold mb-4 text-background-200"
              >
                Sandesh Lamichhane
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="text-lg mb-4"
              >
                Student Researcher Technical Staff | Software Developer
              </motion.p>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="mb-8"
              >
                <p>Email: sandesh.lamichhane1@gmail.com</p>
                <p>Location: Richmond Ky, U.S.A</p>
              </motion.div>
              {/* <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="mb-8"
              >
                <h2 className="text-2xl font-bold mb-2">Summary</h2>
                <p>
                  A brief summary highlighting My professional experience, skills, and career objectives.
                </p>
              </motion.div> */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.7 }}
                className="mb-8"
              >
                <h2 className="text-2xl font-bold mb-4">Education</h2>
                <Education />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 1 }}
              >
                <h2 className="text-2xl font-bold mb-4">Skills</h2>
                <Skills />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 1.3 }}
                className="mb-8"
              >
                <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
                <WorkExperience />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ResumePage;