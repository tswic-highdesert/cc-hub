import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { motion } from 'framer-motion';
import {
  Coffee,
  Users,
  Wifi,
  Printer,
  Clock,
  Mail,
  Phone,
  Lock,
  Zap,
  Monitor,
  Coffee as CoffeeIcon,
} from 'lucide-react';
import { fadeIn, staggerContainer } from '../../animations';
import { Layout } from '../../components/Layout';
import { PageHero } from '../../components/PageHero';
import { BenefitGrid } from '../../components/spaces/BenefitGrid';
import { SpaceShowcase } from '../../components/spaces/SpaceShowcase';
import { UseCase } from '../../components/spaces/UseCase';
import { AmenityGrid } from '../../components/spaces/AmenityGrid';
import { FaqSection } from '../../components/spaces/FaqSection';
import { PricingCard } from '../../components/PricingCard';
import { Button } from '../../components/Button';
import { useSuccessStories } from '../../hooks/useSuccessStories';

const benefits = [
  {
    icon: Users,
    title: 'Vibrant Community',
    description: 'Join a diverse network of professionals, entrepreneurs, and creatives.',
    imageId: '4jYpqH56JEfCeG2yU1TdEr'
  },
  {
    icon: Clock,
    title: 'Flexible Access',
    description: 'Work on your schedule with plans that fit your needs.',
    imageId: '4L7vpgHIV0s9hWyHUZkXw0'
  },
  {
    icon: Zap,
    title: 'Productivity Boost',
    description: 'Everything you need to stay focused and productive.',
    imageId: '1aQm8phbQ7fWBOGYmPN929'
  }
];

const amenities = [
  // Standard Amenities
  {
    icon: Wifi,
    title: 'High-Speed Internet',
    description: 'Gigabit fiber internet with backup connection.',
    isPremium: false
  },
  {
    icon: Users,
    title: 'Community Events',
    description: 'Regular networking and learning events.',
    isPremium: false
  },
  {
    icon: CoffeeIcon,
    title: 'Unlimited Drip Coffee',
    description: 'Fresh coffee available all day.',
    isPremium: false
  },
  {
    icon: Clock,
    title: 'Mon-Fri 8am-5pm Access',
    description: 'Standard business hours access.',
    isPremium: false
  },
  // Premium Amenities (Dedicated Desk & Private Office Members)
  {
    icon: Lock,
    title: '24/7 Access',
    description: 'Around-the-clock secure building access.',
    isPremium: true
  },
  {
    icon: Printer,
    title: 'Print & Scan',
    description: 'Professional printing and scanning services.',
    isPremium: true
  },
  {
    icon: Mail,
    title: 'Business Address',
    description: 'Professional mailing address and mail handling.',
    isPremium: true
  },
  {
    icon: Phone,
    title: 'Phone Booths',
    description: 'Sound-isolated spaces for private calls.',
    isPremium: true
  },
  {
    icon: Monitor,
    title: 'Meeting Rooms',
    description: 'Access to fully equipped meeting spaces.',
    isPremium: true
  }
];

const faqs = [
  {
    question: 'What are your operating hours?',
    answer: 'Our space is accessible 24/7 for members with premium plans. Day pass holders have access from 8am to 5pm, Monday through Friday.'
  },
  {
    question: 'Do you offer day passes?',
    answer: 'Yes! We offer flexible day passes for $25/day, which includes access to our main workspace, high-speed internet, and complimentary coffee.'
  },
  {
    question: 'What\'s included in the membership?',
    answer: 'All memberships include high-speed internet, coffee, and community events. Higher tiers include additional amenities like meeting room credits and business address services.'
  },
  {
    question: 'Can I bring guests?',
    answer: 'Members can bring guests for meetings in our common areas. Guest passes are available for purchase if your visitor needs workspace access.'
  }
];

export default function Coworking() {
  const { stories, loading: storiesLoading } = useSuccessStories('coworking');
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <>
      <Helmet>
        <title>Coworking Space | Co-Create Innovation Hub</title>
        <meta name="description" content="Flexible coworking spaces with fast internet, vibrant community, and premium amenities in Russellville, AR." />
        <link rel="canonical" href="https://cc-hub.com/spaces/coworking" />
        <meta property="og:title" content="Coworking Space | Co-Create Innovation Hub" />
        <meta property="og:description" content="Flexible coworking spaces with fast internet, vibrant community, and premium amenities in Russellville, AR." />
        <meta property="og:image" content="https://images.ctfassets.net/472n3jj0rqks/5DVTh80kNoaqqQtwbyBHCY/3f35fc4e6e8cf22e4d139a08eef2966c/CoCreateInnovHub_Logo.png" />
        <meta property="og:url" content="https://cc-hub.com/spaces/coworking" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Co-Create Innovation Hub",
            "image": "https://images.ctfassets.net/472n3jj0rqks/5DVTh80kNoaqqQtwbyBHCY/3f35fc4e6e8cf22e4d139a08eef2966c/CoCreateInnovHub_Logo.png",
            "priceRange": "$25-$650/month",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "215 S Arkansas Ave",
              "addressLocality": "Russellville",
              "addressRegion": "AR",
              "postalCode": "72801",
              "addressCountry": "US"
            },
            "url": "https://cc-hub.com/spaces/coworking",
            "telephone": "479-310-5370",
            "openingHours": "Mo-Fr 08:00-17:00",
            "description": "Flexible coworking spaces with fast internet, vibrant community, and premium amenities in Russellville, AR."
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>
      </Helmet>
      <Layout>
      <PageHero
        slug="coworking"
        title="Coworking Space" // Fallback title
        description="A flexible workspace designed for productivity, networking, and growth." // Fallback description
        backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"
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
              Why Choose Our Space
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              More than just a desk - join a community of forward-thinking professionals.
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
              Explore Our Space
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Take a virtual tour of our modern facilities and amenities.
            </motion.p>
          </motion.div>

          <SpaceShowcase
            videoTour={{
              title: 'Coworking Space Tour',
              description: 'Take a virtual tour of our coworking space.',
              embedUrl: 'https://www.youtube.com/embed/K3Q_d7puLu8',
            }}
          />
					<SpaceShowcase
            videoTour={{
              title: 'Dedicated Desk Overview',
              description: 'Check out our dedicated desk options!',
              embedUrl: 'https://www.youtube.com/embed/IAziNLzEHqk',
            }}
          />
        </div>
      </section>
      
 {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
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
              Flexible Membership Options
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Choose the plan that best fits your needs and work style.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard
              title="Coworking Membership"
              price={<><span className="text-base font-normal">Starting at</span> $50</>}
              period="/month"
              description="Perfect for remote workers & students."
              features={[
                "8am-5pm Access M-F",
                "Open Seating",
                "High-speed Internet",
                "Coffee & Tea",
                "Community Events",
                "2 hr/mo Meeting Room"
              ]}
              buttonText="Start Now"
            />
            <PricingCard
              title="Dedicated Desk"
              price={<><span className="text-base font-normal">Starting at</span> $250</>}
              period="/month"
              description="Your personal workspace, 24/7"
              features={[
                "24/7 Access",
                "Reserved Desk",
                "Storage Locker",
                "Mail Service",
                "10 hr/mo Meeting Room",
                "Print Credits"
              ]}
              buttonText="Choose Plan"
              popular={true}
            />
            <PricingCard
              title="Private Office"
              price={<><span className="text-base font-normal">Starting at</span> $650</>}
              period="/month"
              description="For teams and privacy"
              features={[
                "24/7 Access",
                "Private Space",
                "Dedicated Storage",
                "Mail Service",
                "15 hr/mo Conference Rooms",
                "Premium Support"
              ]}
              buttonText="Tour Offices"
            />
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      {!storiesLoading && stories.length > 0 && (
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
                Success Stories
              </motion.h2>
              <motion.p
                variants={fadeIn}
                className="text-xl text-gray-600 max-w-2xl mx-auto"
              >
                See how our members are using the space to grow their businesses.
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
      )}

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
              Available Amenities
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Standard amenities for all members, plus premium features for dedicated desk and private office members.
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
              Everything you need to know about our coworking space.
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
            Ready to Join Our Community?
          </motion.h2>
          <motion.p
            variants={fadeIn}
            className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
          >
            Book a tour and experience our space firsthand.
          </motion.p>
          <motion.div variants={fadeIn}>
            <Button
              variant="white"
              size="lg"
              onClick={() => navigate('/tour')}
            >
              Schedule Your Tour
            </Button>
          </motion.div>
        </motion.div>
      </section>
      </Layout>
    </>
  );
}
