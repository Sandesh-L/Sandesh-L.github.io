// src/pages/index.js
import React from 'react';
import { Link} from 'gatsby';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import maybeHeroImage from "../images/photo.jpg";
import WorkExperience from '../components/WorkExperience';
import Education from '../components/Education';
import Skills from '../components/Skills';

const HomePage = () => {

return(
  <Layout className='bg-background-950'>
    <SEO title="Home" />
    <div className='bg-gradient-to-b from-primary-200 to-background-950'>
      <section id="hero" className='py-32'>
        <div className='container mx-auto px-4'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className='flex flex-col md:flex-row items-center justify-between'
          >
            <div className='md:w-1/2'>
              <motion.img
                initial={{ opacity: 0, scale: 0.4 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                src={maybeHeroImage}
                alt="Sandesh Lamichhane"
                className='rounded-full shadow-lg object-cover mx-auto'
              />
            </div>
            <div className='md:w-1/2 mb-8 md:mb-0 px-10'>
              <motion.h1
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className='text-4xl font-bold mb-4 text-text-50'
              >
                Sandesh Lamichhane.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className='text-lg mb-4 text-white'
              >
                <p>Software Developer | Musician</p>
                <p>I'm available for freelance projects. Reach out if you want to connect!</p>
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className='text-lg mb-2 text-text-700'
              >
                <strong>Current Position:</strong> <span>Software Professional II</span>
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 1 }}
                className='text-lg mb-6 text-secondary-900'
              >
                <strong>Master's Degree:</strong> Computer Science <br />
                <strong>Bachelor's Degrees:</strong> Computer Science & Mathematics
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.2 }}
                className='flex space-x-4'
              >
                <Link
                  to='/contact'
                  className='bg-primary-500 hover:bg-primary-600 text-background-950 font-bold py-2 px-4 rounded'
                >
                  Contact Me
                </Link>
                <Link
                  to='/projects'
                  className='bg-secondary-400 hover:bg-secondary-500 text-background-950 font-bold py-2 px-4 rounded'
                >
                  View Projects
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      <section id='resume'>
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
                Software Professional II | Software Developer
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
    </div>
  </Layout>
)};

export default HomePage;