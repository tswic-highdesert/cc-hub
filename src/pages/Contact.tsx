import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../animations';
import { Layout } from '../components/Layout';
import ContactForm from '../components/ContactForm'; // Default import
import { Mail, MapPin, Phone } from 'lucide-react';
import { businessConfig } from '../config/business';
import { Helmet } from 'react-helmet-async';

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us | Co-Create Innovation Hub</title>
        <meta name="description" content="Reach out to Co-Create Innovation Hub in Russellville, AR for coworking, private offices, and event space inquiries." />
        <link rel="canonical" href="https://cc-hub.com/contact" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Co-Create Innovation Hub",
            "url": "https://cc-hub.com",
            "logo": "https://images.ctfassets.net/472n3jj0rqks/5DVTh80kNoaqqQtwbyBHCY/3f35fc4e6e8cf22e4d139a08eef2966c/CoCreateInnovHub_Logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": businessConfig.contact.phone,
              "contactType": "Customer Service",
              "areaServed": "US",
              "availableLanguage": "English"
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": businessConfig.contact.address.street,
              "addressLocality": businessConfig.contact.address.city,
              "addressRegion": businessConfig.contact.address.state,
              "postalCode": businessConfig.contact.address.zip,
              "addressCountry": "US"
            }
          })}
        </script>
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
                Get in Touch
              </motion.h1>
              <motion.p
                variants={fadeIn}
                className="text-xl text-gray-600 max-w-2xl mx-auto"
              >
                If you're interested in joining The Hub, renting some space, or have any questions – just submit the form below and we will reach out soon!
              </motion.p>
            </motion.div>

            <div className="max-w-6xl mx-auto space-y-8">
              <div className="bg-white rounded-2xl shadow-sm p-8">
                <ContactForm />
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <motion.div
                  variants={fadeIn}
                  className="bg-white rounded-2xl p-6 shadow-sm"
                >
                  <div className="w-12 h-12 bg-[#f0f7fc] rounded-lg flex items-center justify-center text-[#1f7abc] mb-4">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Location</h3>
                  <p className="text-gray-600">
                    {businessConfig.contact.address.street}<br />
                    {businessConfig.contact.address.city}, {businessConfig.contact.address.state} {businessConfig.contact.address.zip}
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeIn}
                  className="bg-white rounded-2xl p-6 shadow-sm"
                >
                  <div className="w-12 h-12 bg-[#f0f7fc] rounded-lg flex items-center justify-center text-[#1f7abc] mb-4">
                    <Phone className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                  <p className="text-gray-600">
                    <a href={`tel:${businessConfig.contact.phone}`} className="hover:text-[#1f7abc]">
                      {businessConfig.contact.phone}
                    </a>
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeIn}
                  className="bg-white rounded-2xl p-6 shadow-sm"
                >
                  <div className="w-12 h-12 bg-[#f0f7fc] rounded-lg flex items-center justify-center text-[#1f7abc] mb-4">
                    <Mail className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-600">
                    <a href={`mailto:${businessConfig.contact.email}`} className="hover:text-[#1f7abc]">
                      {businessConfig.contact.email}
                    </a>
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
