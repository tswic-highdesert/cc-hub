import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, Clock, Heart, History, Lightbulb, PenTool as Tool } from 'lucide-react';
import { fadeIn, staggerContainer } from '../animations';
import { Layout } from '../components/Layout';
import { Button } from '../components/Button';
import { ImageCarousel } from '../components/ImageCarousel';
import { PageHero } from '../components/PageHero';
import { ContentfulImage } from '..//components/ContentfulImage';

const historyImages = [
  {
    url: "https://images.unsplash.com/photo-1582481725274-d63bdf929a90?auto=format&fit=crop&q=80&w=2000",
    alt: "Historic building facade",
    title: "The Original Structure",
    description: "Built in 1912, this landmark has been a cornerstone of downtown Russellville for over a century."
  },
  {
    url: "https://images.unsplash.com/photo-1631193816258-28b44b21e78b?auto=format&fit=crop&q=80&w=2000",
    alt: "Restoration process",
    title: "The Transformation",
    description: "Careful restoration preserved historic elements while adding modern amenities."
  },
  {
    url: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=2000",
    alt: "Modern interior",
    title: "Today's Innovation Hub",
    description: "A perfect blend of historic charm and contemporary functionality."
  }
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Co-Create Innovation Hub</title>
        <meta name="description" content="Learn about the history, mission, and founders of Co-Create Innovation Hub in Russellville, AR." />
        <link rel="canonical" href="https://cc-hub.com/about" />
        <meta property="og:title" content="About Us | Co-Create Innovation Hub" />
        <meta property="og:description" content="Learn about the history, mission, and founders of Co-Create Innovation Hub in Russellville, AR." />
        <meta property="og:image" content="https://images.ctfassets.net/472n3jj0rqks/5DVTh80kNoaqqQtwbyBHCY/3f35fc4e6e8cf22e4d139a08eef2966c/CoCreateInnovHub_Logo.png" />
        <meta property="og:url" content="https://cc-hub.com/about" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Co-Create Innovation Hub",
            "url": "https://cc-hub.com",
            "logo": "https://images.ctfassets.net/472n3jj0rqks/5DVTh80kNoaqqQtwbyBHCY/3f35fc4e6e8cf22e4d139a08eef2966c/CoCreateInnovHub_Logo.png",
            "founders": [
              {
                "@type": "Person",
                "name": "Chris Abington"
              },
              {
                "@type": "Person",
                "name": "Tara Abington"
              }
            ],
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "215 S Arkansas Ave",
              "addressLocality": "Russellville",
              "addressRegion": "AR",
              "postalCode": "72801",
              "addressCountry": "US"
            }
          })}
        </script>
      </Helmet>
      <Layout>
     {/* Hero Section */}
      <PageHero
        slug="about"
        title={<>Our<br />Story</>}
        description="From historic landmark to innovation hub, discover how we're reshaping
            the future of work in the Arkansas River Valley."
        backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"
      >
      </PageHero>


      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeIn}>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Empowering Innovation in the River Valley
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Co-Create Innovation Hub is more than just a workspace—it's a catalyst
                for creativity, collaboration, and community growth. We believe that
                by bringing together diverse talents and providing the right environment,
                we can spark innovation that transforms our region.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our mission is to create an ecosystem where entrepreneurs, remote workers,
                and established businesses can thrive together, sharing knowledge and
                resources while building meaningful connections.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#f0f7fc] flex items-center justify-center text-[#1f7abc] flex-shrink-0">
                    <Lightbulb className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Innovation First</h3>
                    <p className="text-gray-600">Fostering creativity and forward thinking in every aspect.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#f0f7fc] flex items-center justify-center text-[#1f7abc] flex-shrink-0">
                    <Heart className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Community Focused</h3>
                    <p className="text-gray-600">Building connections that strengthen our entire region.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn}
              className="relative aspect-square rounded-2xl overflow-hidden"
            >
             <ContentfulImage
                id="39gioIcVu9tLd2Cvi8F9fd"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeIn}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              Meet Our Founders
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              The visionaries behind Co-Create Innovation Hub
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              variants={fadeIn}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1200"
                  alt="Chris Abington"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Chris Abington</h3>
                <p className="text-[#1f7abc] mb-4">Co-Founder & CEO</p>
                <p className="text-gray-600 mb-6">
                  With over 15 years of experience in business development and community
                  building, Chris saw the potential for creating a space where innovation
                  and collaboration could thrive in Russellville. His vision for
                  Co-Create stems from a deep commitment to fostering entrepreneurship
                  in the Arkansas River Valley.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1200"
                  alt="Tara Abington"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Tara Abington</h3>
                <p className="text-[#1f7abc] mb-4">Co-Founder & COO</p>
                <p className="text-gray-600 mb-6">
                  Tara brings her expertise in operations and community engagement
                  to Co-Create. Her background in event planning and workspace
                  management ensures that every detail is considered in creating
                  an environment where members can focus on what matters most—growing
                  their businesses and ideas.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Building History Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeIn}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              A Historic Legacy
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              The story of our building spans over a century of Russellville history
            </motion.p>
          </motion.div>

          <ImageCarousel images={historyImages} />
          
          <div className="mt-20 grid md:grid-cols-3 gap-8">
            <motion.div
              variants={fadeIn}
              className="flex flex-col items-start"
            >
              <div className="w-12 h-12 rounded-xl bg-[#f0f7fc] flex items-center justify-center text-[#1f7abc] mb-6">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Original Construction</h3>
              <p className="text-gray-600">
                Built in 1912, our building began as the Arkansas Valley Bank,
                serving as a cornerstone of Russellville's growing business district.
                The original architecture featured classic revival elements with
                locally sourced materials.
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="flex flex-col items-start"
            >
              <div className="w-12 h-12 rounded-xl bg-[#f0f7fc] flex items-center justify-center text-[#1f7abc] mb-6">
                <History className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Rich History</h3>
              <p className="text-gray-600">
                Over the decades, the building has housed various businesses and
                organizations, each contributing to its unique story. From a bank
                to retail spaces, it has always been a hub of community activity
                and commerce.
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="flex flex-col items-start"
            >
              <div className="w-12 h-12 rounded-xl bg-[#f0f7fc] flex items-center justify-center text-[#1f7abc] mb-6">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Preservation</h3>
              <p className="text-gray-600">
                Listed on the National Register of Historic Places, the building
                stands as a testament to Russellville's architectural heritage
                and the importance of preserving our community's history.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Restoration Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeIn}>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                The Restoration Journey
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                When we discovered this historic gem, we knew it had the potential
                to become something special. Our restoration process focused on
                preserving the building's character while adapting it for modern use.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#f0f7fc] flex items-center justify-center text-[#1f7abc] flex-shrink-0">
                    <Tool className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Careful Preservation</h3>
                    <p className="text-gray-600">
                      Working with local craftsmen and preservation experts, we
                      meticulously restored original features including the
                      ornate moldings, hardwood floors, and brick facade.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#f0f7fc] flex items-center justify-center text-[#1f7abc] flex-shrink-0">
                    <Lightbulb className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Modern Integration</h3>
                    <p className="text-gray-600">
                      We seamlessly integrated modern amenities and technology
                      while respecting the building's historic character,
                      creating a perfect blend of old and new.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn}
              className="grid grid-cols-2 gap-4"
            >
              <div className="aspect-[3/4] rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1582481725274-d63bdf929a90?auto=format&fit=crop&q=80&w=800"
                  alt="Historic features"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/4] rounded-xl overflow-hidden mt-8">
                <img
                  src="https://images.unsplash.com/photo-1631193816258-28b44b21e78b?auto=format&fit=crop&q=80&w=800"
                  alt="Restoration process"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1f7abc]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="container mx-auto px-4 text-center"
        >
          <motion.h2
            variants={fadeIn}
            className="text-4xl font-bold text-white mb-4"
          >
            Be Part of Our Story
          </motion.h2>
          <motion.p
            variants={fadeIn}
            className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
          >
            Join our community and help write the next chapter of innovation in the
            Arkansas River Valley.
          </motion.p>
          <motion.div variants={fadeIn}>
            <Button
              variant="white"
              size="lg"
              onClick={() => window.location.href = '/tour'}
            >
              Schedule a Tour
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </motion.div>
      </section>
      </Layout>
    </>
  );
}
