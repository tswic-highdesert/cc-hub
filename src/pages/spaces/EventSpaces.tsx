import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { motion } from 'framer-motion';
import {
  Users,
  Mic2,
  Tv2,
  Coffee,
  Calendar,
  Zap,
  Music,
  Utensils,
  DivideIcon as Video,
  Wifi,
  Settings
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
    icon: Users,
    title: 'Flexible Capacity',
    description: 'Accommodates up to 72 people with various seating arrangements.',
    imageUrl: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800'
  },
  {
    icon: Tv2,
    title: 'Premium AV Setup',
    description: 'State-of-the-art audio/visual equipment for impactful presentations.',
    imageUrl: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&q=80&w=800'
  },
  {
    icon: Coffee,
    title: 'Full Service',
    description: 'Catering Kitchen, Event Support Checklists available',
    imageUrl: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800'
  }
];

const amenities = [
  {
    icon: Tv2,
    title: 'Premium AV',
    description: 'Professional sound and display system.',
  },
  {
    icon: Mic2,
    title: 'Microphones',
    description: 'Wireless and lapel microphones.',
  },
  {
    icon: Wifi,
    title: 'Fast Internet',
    description: 'High-speed dedicated connection.'
  },
  {
    icon: Coffee,
    title: 'Refreshments',
    description: 'Coffee, tea, and water service.'
  },
  {
    icon: Utensils,
    title: 'Catering',
    description: 'Catering Kitchen Available'
  },
  {
    icon: Music,
    title: 'Sound System',
    description: 'Professional audio equipment.'
  },
  {
    icon: Settings,
    title: 'Tech Support',
    description: 'On-site technical assistance.'
  },
  {
    icon: Calendar,
    title: 'Event Support',
    description: 'Event Support Checklists'
  }
];

const faqs = [
  {
    question: 'What is the capacity of the Think Lounge?',
    answer: 'The Think Lounge can accommodate up to 72 people in theater-style seating, or 40-50 people in workshop/classroom setup. The space is flexible and can be arranged in various configurations to suit your event needs.'
  },
  {
    question: 'Do you provide catering services?',
    answer: 'We do not directly offer catering services, but you can utilize our kitchen and coordinat with your own caterer for your events!'
  },
  {
    question: 'What AV equipment is available?',
    answer: 'The Think Lounge comes equipped with a professional AV setup includinglarge display screens, professional sound system, and wireless microphones.'
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'Events can be rescheduled or cancelled up to 7 days before the event date for a full refund. Cancellations within 48hrs  may be subject to a fee.'
  }
];

export default function EventSpaces() {
  const { stories, loading: storiesLoading } = useSuccessStories('event-spaces');
  const navigate = useNavigate(); // Initialize useNavigate


  return (
    <Layout>
      <PageHero
        slug="event-spaces"
        title="Think Lounge"
        description="A versatile event space designed for impactful presentations, workshops, and community gatherings."
        backgroundImage="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=2000"
      >
        <motion.div variants={fadeIn} className="flex flex-wrap justify-center gap-4">
          <Button
            variant="white"
            size="lg"
            onClick={() => {
              const element = document.querySelector('#showcase');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Virtual Tour
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="!text-white !border-white hover:!bg-white hover:!text-[#1f7abc]"
            onClick={() => {
              const element = document.querySelector('#pricing');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            View Pricing
          </Button>
        </motion.div>
      </PageHero>

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
              The Perfect Event Space
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Host memorable events in our fully equipped, flexible space.
            </motion.p>
          </motion.div>

          <BenefitGrid benefits={benefits} />
        </div>
      </section>

      {/* Showcase Section */}
      <section id="showcase" className="py-20 bg-gray-50">
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
              Space Configurations
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Flexible layouts to accommodate any type of event.
            </motion.p>
          </motion.div>

          <SpaceShowcase
            videoTour={{
              title: 'Think Lounge Tour',
              description: 'Take a virtual tour of our versatile event space.',
              embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
              thumbnailUrl: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1200'
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
              Event Packages
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Flexible options to suit your event needs.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard
              title="Hourly"
              price={<><span className="text-base font-normal">Starting at</span> $150</>}
              period="/hr"
              description="Perfect for shorter events"
              features={[
                "2hr Minimum",
                "AV Setup",
                "Water Service",
                "Event Support"
              ]}
              buttonText="Book Now"
            />
            <PricingCard
              title="Full Day"
              price={<><span className="text-base font-normal">Starting at</span> $550</>}
              period="/8hrs"
              description="Ideal for full-day events"
              features={[
                "Up to 8 Hours",
                "AV Setup",
                "Water Service",
                "Event Support"
              ]}
              buttonText="Book Now"
              popular={true}
            />
            <PricingCard
              title="Half Day"
              price={<><span className="text-base font-normal">Starting at</span> $400</>}
              period="/6hrs"
              description="Perfect for longer events"
              features={[
                "Up to 4 Hours",
                "AV Setup",
                "Water Service",
                "Event Support"
              ]}
              buttonText="Book Now"
            />
          </div>

          <motion.div
            variants={fadeIn}
            className="text-center mt-12 max-w-2xl mx-auto"
          >
            <p className="text-gray-600 mb-6">
              Custom packages and non-profit rates available.
            </p>
            <Button
              variant="outline"
              onClick={() => navigate('/contact')}
            >
              Request Custom Quote
            </Button>
          </motion.div>
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
                Event Success Stories
              </motion.h2>
              <motion.p
                variants={fadeIn}
                className="text-xl text-gray-600 max-w-2xl mx-auto"
              >
                How organizations use our space for impactful events.
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
              Event Space Features
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Everything you need for a successful event.
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
              Everything you need to know about hosting your event.
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
            Ready to Plan Your Event?
          </motion.h2>
          <motion.p
            variants={fadeIn}
            className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
          >
            Contact us to discuss your event needs and check availability.
          </motion.p>
          <motion.div variants={fadeIn}>
            <Button
              variant="white"
              size="lg"
              onClick={() => navigate('/tour')}
            >
              Schedule Consultation
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </Layout>
  );
}
