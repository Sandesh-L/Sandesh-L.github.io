import React from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaGit } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';

const ContactPage = () => {
  const handleEmailClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    const subject = document.getElementById('subject').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const mailtoUrl = `mailto:${email}?subject=${subject}&body=${encodeURIComponent(message)}`;

    window.location.href = mailtoUrl;
  }
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-primary-200 to-background-950 text-text-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-4xl font-bold mb-8 text-center text-text-900"
          >
            Contact Me
          </motion.h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-primary-200 rounded-lg shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold mb-4 text-text-900">Get in Touch</h2>
              <p className="mb-4">
                Have any questions or inquiries? Feel free to reach out to me. I'd love to hear from you!
                For prompt response text me, but be sure to mention who you are and how you got my information.
              </p>
              <div className="flex items-center mb-4">
                <FaEnvelope className="text-primary-500 mr-2" />
                <a href="mailto:sandesh.lamichhane1@gmail.com" className="text-text-900 hover:text-secondary-600">
                sandesh.lamichhane1@gmail.com
                </a>
              </div>
              <div className="flex items-center mb-4">
                <FaPhone className="text-primary-500 mr-2" />
                <a href="tel:+18593537632" className="text-text-900 hover:text-secondary-600">
                  +1 (859) 353-7632
                </a>
              </div>
              <div className="flex items-center mb-4">
                <FaLinkedin className="text-primary-500 mr-2" />
                <a href="https://www.linkedin.com/in/sandesh-l/" 
                  target="_blank"
                  rel="noopener noreferrer"  
                  className="text-text-900 hover:text-secondary-600"
                >
                  Sandesh-L
                </a>
              </div>
              <div className="flex items-center mb-4">
                <FaGithub className="text-primary-500 mr-2" />
                <a href="https://github.com/Sandesh-L" 
                  target="_blank"
                  rel="noopener noreferrer"  
                  className="text-text-900 hover:text-secondary-600"
                >
                  Sandesh-L
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="bg-background-200 rounded-lg shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold mb-4 text-primary-500">Send me a Message</h2>
              <form action='mailto:sandesh.lamichhane1@gmail.com' method='GET'>
                <div className="mb-4">
                  <label htmlFor="email" className="block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 bg-background-800 rounded-lg text-text-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    value='sandesh.lamichhane1@gmail.com'
                    disabled='true'
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="subject" className="block mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 bg-background-800 rounded-lg text-text-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="message" className="block mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full px-4 py-2 bg-background-800 rounded-lg text-text-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  ></textarea>
                </div>
                <motion.button
                  onClick={handleEmailClick}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary-500 text-background-950 px-6 py-2 text-text-100 rounded-lg"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;