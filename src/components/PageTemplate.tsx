import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../animations';
import { Layout } from './Layout';

interface PageTemplateProps {
  title: string;
  description: string;
}

export const PageTemplate: React.FC<PageTemplateProps> = ({ title, description }) => {
  return (
    <Layout>
      <div className="bg-gradient-to-br from-[#f0f7fc] to-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="text-center mb-16"
          >
            <motion.h1
              variants={fadeIn}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            >
              {title}
            </motion.h1>
            <motion.p
              variants={fadeIn}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              {description}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};
