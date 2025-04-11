import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { motion } from 'framer-motion';
import {
  Users,
  Wifi,
  Monitor,
  Video,
  Coffee,
  Calendar,
  Zap,
  Phone,
  Printer,
  Clock
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
    icon: Monitor,
    title: 'Professional Setup',
    description: 'State-of-the-art AV equipment and presentation tools.',
    imageUrl: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&q=80&w=800'
  },
  {
    icon: Users,
    title: 'Flexible Capacity',
    description: 'Rooms for 4 to 12 people with configurable layouts.',
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800'
  },
  {
    icon: Calendar,
    title: 'Easy Booking',
    description: 'Simple online booking system with instant confirmation.',
    imageUrl: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800'
  }
];

const amenities = [
  {
    icon: Monitor,
    title: '4K Displays',
    description: 'Large format displays with wireless connectivity.',
    isPremium: false
  },
  {
    icon: Video,
    title: 'Video Conference',
    description: 'HD cameras and professional audio setup.',
    isPremium: false
  },
  {
    icon: Wifi,
    title: 'Fast Internet',
    description: 'High-speed dedicated connection.',
    isPremium: false
  },
  {
    icon: Coffee,
    title: 'Refreshments',
    description: 'Complimentary coffee, tea, and water.',
    isPremium: false
  }
];

const faqs = [
  {
    question: 'How do I book a meeting room?',
    answer: 'You can book meeting rooms through our online portal or mobile app. Members can also book directly through their membership dashboard. For assistance, our team is always available to help.'
  },
  {
    question: 'What\'s included with the room rental?',
    answer: 'All meeting rooms include high-speed internet and basic refreshments. Premium rooms also feature video conferencing equipment, whiteboards, and display screens.'
  },
  {
    question: 'Do you offer catering services?',
    answer: 'We have a kitchen that you will have access to for your meeting. You are free to have your meeting catered or bring in food for your event.'
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'Bookings can be cancelled or rescheduled up to 48 hours in advance for a full refund. Late cancellations or no-shows may be subject to the full booking fee.'
  }
];

export default function MeetingRooms() {
  const { stories, loading: storiesLoading } = useSuccessStories('meeting-rooms');
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <Layout>
      <PageHero
        slug="meeting-rooms"
        title="Meeting Rooms"
        description="Professional meeting spaces equipped with everything you need for successful collaboration."
        backgroundImage="https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&q=80&w=2000"
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
              Elevate Your Meetings
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Fully equipped spaces designed for productive collaboration and impactful presentations.
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
              Our Meeting Spaces
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Professional environments for every type of meeting.
            </motion.p>
          </motion.div>

          <SpaceShowcase
            videoTour={{
              title: 'Meeting Room Tour',
              description: 'Take a virtual tour of our professional meeting spaces.',
              embedUrl: 'https://www.youtube.com/embed/3Po7Os3HgDU',
              thumbnailUrl: 'https://i9.ytimg.com/vi_webp/3Po7Os3HgDU/mq1.webp?sqp=CIS15L8G-oaymwEmCMACELQB8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgUChMMA8=&rs=AOn4CLAtAzvmUWrg9lYp5yAvHqqmzGFG5Q'
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
              Room Options
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Find the perfect space for your next meeting.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <PricingCard
              title="Focus Room"
              price={<><span className="text-base font-normal">Starting at</span> $50</>}
              period="/hour"
              description="Conference Room A"
              features={[
                "4 Person Capacity",
                "Fast Internet",
                "Water Bottles",
                "Free Coffee & Tea"
              ]}
              buttonText="Book Now"
            />
            <PricingCard
              title="Brainstorm Room"
              price={<><span className="text-base font-normal">Starting at</span> $50</>}
              period="/hour"
              description="Conference Room B"
              features={[
                "8-10 Person Capacity",
                "75\" 4K Display",
                "Video Conferencing",
                "Whiteboard & Markers",
                "Fast Internet",
                "Water Bottles",
                "Free Coffee & Tea"
              ]}
              buttonText="Book Now"
              popular={true}
            />
          </div>

          <motion.div
            variants={fadeIn}
            className="text-center mt-12 max-w-2xl mx-auto"
          >
            <p className="text-gray-600 mb-6">
              Members receive discounted rates and complimentary meeting room credits based on their membership level.
              Contact us to learn more about member benefits.
            </p>
            <Button
              variant="outline"
              onClick={() => navigate('/contact')}
            >
              Inquire About Membership
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
                Meeting Success Stories
              </motion.h2>
              <motion.p
                variants={fadeIn}
                className="text-xl text-gray-600 max-w-2xl mx-auto"
              >
                How our meeting spaces help businesses connect and collaborate.
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
              Available Features
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Our two conference rooms offer different features & amenities.
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
              Everything you need to know about our meeting rooms.
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
            Ready to Book Your Meeting?
          </motion.h2>
          <motion.p
            variants={fadeIn}
            className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
          >
            Reserve your space now or contact us for a personalized tour.
          </motion.p>
          <motion.div variants={fadeIn}>
            <Button
              variant="white"
              size="lg"
              onClick={() => navigate('/contact')}
            >
              Book Meeting Room
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </Layout>
  );
}
