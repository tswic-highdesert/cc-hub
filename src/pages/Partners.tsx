import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../animations';
import { Layout } from '../components/Layout';
import { PartnerCard } from '../components/PartnerCard';
import { usePartners } from '../hooks/usePartners';
import { Helmet } from 'react-helmet-async';


export default function Partners() {
  const { partners, loading, error } = usePartners();

  return (
    <>
      <Helmet>
        <title>Community Partners | Co-Create Innovation Hub</title>
        <meta name="description" content="Meet the organizations and institutions that support our innovation hub in Russellville, AR." />
        <link rel="canonical" href="https://cc-hub.com/partners" />
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
                Community Partners
              </motion.h1>
              <motion.p
                variants={fadeIn}
                className="text-xl text-gray-600 max-w-2xl mx-auto"
              >
                Meet the organizations and institutions that help make our innovation
                hub a catalyst for growth and development in the Arkansas River Valley.
              </motion.p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className={`space-y-8 ${loading ? 'min-h-[400px]' : ''}`}
            >
              {loading ? (
                <div className="space-y-8">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-64 bg-gray-100 animate-pulse rounded-xl" />
                  ))}
                </div>
              ) : error ? (
                <div className="text-center text-red-500">
                  Error loading partners. Please try again later.
                </div>
              ) : partners.length === 0 ? (
                <div className="text-center text-gray-500">
                  No partners available at this time.
                </div>
              ) : (
                partners.map((partner, index) => (
                  <PartnerCard key={index} {...partner} />
                ))
              )}
            </motion.div>
          </div>
        </div>
      </Layout>
    </>
  );
}
