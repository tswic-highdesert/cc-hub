import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../animations';
import { Layout } from '../components/Layout';
import { MemberCard } from '../components/MemberCard';

const members = [
  {
    name: "Town Square Studio"
  },
  {
    name: "Eleva"
  },
  {
    name: "ARRT By Rachel"
  },
  {
    name: "Building Roots"
  },
  {
    name: "Brainstorm Agency"
  },

  {
    name: "Russellville School District"
  },
  {
    name: "CM Collective"
  },
  {
    name: "Tradesman Builder & Professional Painters"
  },
  {
    name: "Scarlett Marketing & Design"
  },
  {
    name: "US Digital"
  },
  {
    name: "Bowl Time Bowls & Cafe"
  },


];

export default function Members() {
  return (
    <>
      <Helmet>
        <title>Our Members | Co-Create Innovation Hub</title>
        <meta name="description" content="Meet the businesses and entrepreneurs at Co-Create Innovation Hub in Russellville, AR." />
        <link rel="canonical" href="https://cc-hub.com/members" />
      </Helmet>
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
                Our Members
              </motion.h1>
              <motion.p
                variants={fadeIn}
                className="text-xl text-gray-600 max-w-2xl mx-auto"
              >
                Meet the innovative businesses and entrepreneurs that make our
                community vibrant and dynamic.
              </motion.p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {members.map((member, index) => (
                <MemberCard key={index} {...member} />
              ))}
            </motion.div>
          </div>
        </div>
      </Layout>
    </>
  );
}
