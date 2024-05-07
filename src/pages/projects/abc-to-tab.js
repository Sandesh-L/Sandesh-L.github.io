import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../../components/Layout';

const AbcToTab = () => {
  return (
    <Layout>
      <div className='py-12 min-h-screen bg-gradient-to-b from-primary-200 to-background-950'>
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-3xl font-bold mb-8 text-text-900"
        >
          Abc To Tab
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="columns-1 gap-8 md:columns-2 lg:columns-3"
        >
          A more detailed description of the project and how I approached it will replace this message soon.
        </motion.div>
      </div>
    </Layout>
  )
}

export default AbcToTab