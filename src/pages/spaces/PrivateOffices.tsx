import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { motion } from 'framer-motion';
import {
  Lock,
  Users,
  Wifi,
  Printer,
  Clock,
  Mail,
  Phone,
  Shield,
  Coffee,
  Monitor
} from 'lucide-react';
import { fadeIn, staggerContainer } from '../../animations';
import { Layout } from '../../components/Layout';
import { Button } from '../../components/Button';
import { PageHero } from '../../components/PageHero';
import { BenefitGrid } from '../../components/spaces/BenefitGrid';
import { SpaceShowcase } from '../../components/spaces/SpaceShowcase';
import { UseCase } from '../../components/spaces/UseCase';
import { AmenityGrid } from '../../components/spaces/AmenityGrid';
import { useSuccessStories } from '../../hooks/useSuccessStories';
import { FaqSection } from '../../components/spaces/FaqSection';
import { PricingCard } from '../../components/PricingCard';

const benefits = [
  {
    icon: Lock,
    title: 'Private & Secure',
    description: 'Your own lockable office space with 24/7 secure access.',
    imageId: '4x82OdEaKJdKN6E2ZL1BR0'
  },
  {
    icon: Users,
    title: 'Team Friendly',
    description: 'Flexible spaces that grow with your team.',
    imageId: '6Gr55yi0pHTn0jlaNXLj9N'
  },
  {
    icon: Shield,
    title: 'Professional Image',
    description: 'Meet clients, host meetings, and be presented with a professional image all around.',
    imageId: '6lurCHkNtgGHOxXp6kUCOr'
  }
];

const amenities = [
  {
    icon: Lock,
    title: '24/7 Access',
    description: 'Secure, around-the-clock access to your office.',
    isPremium: false
  },
  {
    icon: Mail,
    title: 'Mail Service',
    description: 'Professional address and mail box.',
    isPremium: false
  },
  {
    icon: Wifi,
    title: 'Fast Internet',
    description: 'Dedicated high-speed internet connection.'
  },
  {
    icon: Monitor,
    title: 'Meeting Rooms',
    description: '15 hours of meeting room credits monthly.'
  },
  {
    icon: Phone,
    title: 'Phone Booths',
    description: 'Private spaces for calls and meetings.'
  },
  {
    icon: Coffee,
    title: 'Kitchen Access',
    description: 'Fully stocked kitchen and coffee bar.'
  },
  {
    icon: Printer,
    title: 'Business Center',
    description: 'Print, scan, and copy services.'
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Access to networking events and community.'
  }
];

const faqs = [
  {
    question: 'What\'s included in the office rental?',
    answer: 'All private offices include 24/7 access, utilities, internet, mail handling, meeting room credits, and access to common areas and amenities.'
  },
  {
    question: 'Can I customize my office space?',
    answer: 'Yes! You can bring your own furniture or use ours. We also allow reasonable customization like wall mounting of TVs or whiteboards.'
  },
  {
    question: 'What are the lease terms?',
    answer: 'We offer flexible terms starting at 6 months. Longer commitments come with preferential rates. All utilities and services are included in the monthly rate.'
  },
  {
    question: 'How quickly can I move in?',
    answer: 'Most offices are move-in ready. Once your application is approved and the agreement is signed, you can move in immediately.'
  }
];

export default function PrivateOffices() {
  const { stories, loading: storiesLoading } = useSuccessStories('private-offices');
  const navigate = useNavigate(); // Initialize useNavigate
  return (
    <>
      <Helmet>
        <title>Private Offices | Co-Create Innovation Hub</title>
        <meta name="description" content="Secure, fully-furnished private offices for teams in Russellville, AR. Flexible terms, 24/7 access, and premium amenities." />
        <link rel="canonical" href="https://cc-hub.com/spaces/private-offices" />
        <meta property="og:title" content="Private Offices | Co-Create Innovation Hub" />
        <meta property="og:description" content="Secure, fully-furnished private offices for teams in Russellville, AR. Flexible terms, 24/7 access, and premium amenities." />
        <meta property="og:image" content="https://images.ctfassets.net/472n3jj0rqks/5DVTh80kNoaqqQtwbyBHCY/3f35fc4e6e8cf22e4d139a08eef2966c/CoCreateInnovHub_Logo.png" />
        <meta property="og:url" content="https://cc-hub.com/spaces/private-offices" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Co-Create Innovation Hub",
            "image": "https://images.ctfassets.net/472n3jj0rqks/5DVTh80kNoaqqQtwbyBHCY/3f35fc4e6e8cf22e4d139a08eef2966c/CoCreateInnovHub_Logo.png",
            "priceRange": "$650-$950/month",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "215 S Arkansas Ave",
              "addressLocality": "Russellville",
              "addressRegion": "AR",
              "postalCode": "72801",
              "addressCountry": "US"
            },
            "url": "https://cc-hub.com/spaces/private-offices",
            "telephone": "479-310-5370",
            "openingHours": "Mo-Fr 08:00-17:00",
            "description": "Secure, fully-furnished private offices for teams. Flexible terms, 24/7 access, premium amenities."
          })}
        </script>
      </Helmet>
      <Layout>
      <PageHero
        slug="private-offices"
        title="Private Offices"
        description="Secure, fully-furnished private offices for growing teams."
        backgroundImage="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=2000"
      />

      {/* Benefits Section */}
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
              The Perfect Space for Your Team
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Private, secure, and professional offices designed for productivity and growth.
            </motion.p>
          </motion.div>

          <BenefitGrid benefits={benefits} />
        </div>
      </section>

      {/* Showcase Section */}
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
              Available Office Spaces
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Find the perfect size for your team.
            </motion.p>
          </motion.div>

          <SpaceShowcase
            videoTour={{
              title: 'Office Tour',
              description: 'Take a virtual tour of our private office spaces.',
              embedUrl: 'https://www.youtube.com/embed/HcR4w-7fzxo ',
              thumbnailUrl: 'https://i9.ytimg.com/vi_webp/HcR4w-7fzxo/mq3.webp?sqp=CIS15L8G-oaymwEmCMACELQB8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgZShlMA8=&rs=AOn4CLBuPyeNVp4wvUtVPUcqHLo4eLvTqw'
            }}
          />
        </div>
      </section>

      {/* Pricing Section */}
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
              Office Solutions
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Flexible office spaces that grow with your business.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard
              title="Small Office"
              price={<><span className="text-base font-normal">Starting at</span> $650</>}
              period="/month"
              description="Perfect for 1-2 person teams"
              features={[
                "24/7 Access",
                "Furnished Options",
                "Mail Service",
                "15 hr/mo Meeting Room"
              ]}
              buttonText="Tour Office"
            />
            <PricingCard
              title="Medium Office"
              price={<><span className="text-base font-normal">Starting at</span> $750</>}
              period="/month"
              description="Ideal for 2-3 person teams"
              features={[
                "24/7 Access",
                "Furnished Options",
                "Mail Service",
                "15 hr/mo Meeting Room"
              ]}
              buttonText="Tour Office"
              popular={true}
            />
            <PricingCard
              title="Large Office"
              price={<><span className="text-base font-normal">Starting at</span> $950</>}
              period="/month"
              description="Perfect for 4-5 person teams"
              features={[
                "24/7 Access",
                "Furnished Options",
                "Mail Service",
                "20 hr/mo Meeting Room"
              ]}
              buttonText="Tour Office"
            />
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
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
              Client Success Stories
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              See how our private offices help businesses thrive.
            </motion.p>
          </motion.div>

          <div className="space-y-20">
            {storiesLoading ? (
              <div className="space-y-8">
                <div className="h-96 bg-gray-100 animate-pulse rounded-xl" />
                <div className="h-96 bg-gray-100 animate-pulse rounded-xl" />
              </div>
            ) : stories.length > 0 ? (
              stories.map((story, index) => (
                <UseCase
                  key={index}
                  title={story.title}
                  description={story.description}
                  imageUrl={`https:${story.imageUrl}`}
                  videoUrl={story.videoUrl}
                  testimonial={story.testimonial}
                  benefits={story.benefits}
                />
              ))
            ) : (
              <div className="text-center text-gray-500">
                No success stories available at this time.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
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
              Office Amenities
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Everything your team needs to succeed.
            </motion.p>
          </motion.div>

          <AmenityGrid amenities={amenities} />
        </div>
      </section>

      {/* FAQ Section */}
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
              Frequently Asked Questions
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Everything you need to know about our private offices.
            </motion.p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <FaqSection faqs={faqs} />
          </div>
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
            Ready to Tour Our Offices?
          </motion.h2>
          <motion.p
            variants={fadeIn}
            className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
          >
            Schedule a tour and find the perfect office for your team.
          </motion.p>
          <motion.div variants={fadeIn}>
            <Button
              variant="white"
              size="lg"
              onClick={() => navigate('/tour')}
            >
              Book Office Tour
            </Button>
          </motion.div>
        </motion.div>
      </section>
      </Layout>
    </>
  );
}
