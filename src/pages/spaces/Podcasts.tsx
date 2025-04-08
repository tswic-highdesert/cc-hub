import React from 'react';
import { motion } from 'framer-motion';
import {
  Coffee,
  Video,
  Users,
  Clock,
  Zap,
  Monitor,
  Lightbulb,
  Heart,
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
import { ContentfulImage } from '../../components/ContentfulImage';

const benefits = [
  {
    icon: Users,
    title: 'Vibrant Community',
    description: 'Join a diverse network of professionals, entrepreneurs, and creatives.',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800'
  },
  {
    icon: Clock,
    title: 'Flexible Access',
    description: 'Work on your schedule with plans that fit your needs.',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800'
  },
  {
    icon: Zap,
    title: 'Productivity Boost',
    description: 'Everything you need to stay focused and productive.',
    imageUrl: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&q=80&w=800'
  }
];

const amenities = [
  {
    icon: Video,
    title: 'Full Video & Audio Production',
    description: '1080p livestreams to your channel(s) and/or 1080p video file delivered to you',
    isPremium: false
  },
  {
    icon: Users,
    title: 'Production Team',
    description: 'Production team edits your podcast as you record',
    isPremium: false
  },
  {
    icon: CoffeeIcon,
    title: 'Unlimited Drip Coffee',
    description: 'Fresh coffee available during your session',
    isPremium: false
  },
  {
    icon: Clock,
    title: 'Mon-Fri 8am-5pm Access',
    description: 'Standard business hours access',
    isPremium: false
  },
  {
    icon: Monitor,
    title: '4K Video Production',
    description: 'As an add-on package, you can create videos with advanced graphics, sounds, and edits',
    isPremium: true
  }
];

const faqs = [
  {
    question: 'How do I book a podcast?',
    answer: 'Click on the book now, choose plan, or apply buttons above. After being forwarded to a contact page, you will be then be taken to the next step.'
  },
  {
    question: 'What if I\'ve never done a podcast?',
    answer: 'Town Square works with first-timers all of the time! After producing over 150+ episodes of various shows, they know exactly how to work with people who have never done it before.'
  },
  {
    question: 'What are the deliverables?',
    answer: 'A high quality video podcast livestreamed directly to your channel(s) and/or a recorded video file.'
  },
{
  question: 'What is the editing process like?',
  answer: 'For a standard podcast, they are edited \'on the fly\' - with camera switching, basic graphics, and music. They also offer advanced editing for specific projects. More information is available throug them. You may contact them directly at 1-888-711-4261 via call or sms.'
}
];

export default function Podcasts() {
  const { stories, loading: storiesLoading } = useSuccessStories('podcasts');
  return (
    <Layout>
      <PageHero
        slug="podcasts"
        title="Podcast Space" // Fallback title
        description="In partnership with Town Square Studio, we are happy to provide high quality video podcast production." // Fallback description
        backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"
      />

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
                Town Square Studio, In The Hub
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Town Square Studio is one of the businesses in the Co-Create Innovation Hub.
              </p>
              <p className="text-lg text-gray-600 mb-8">
               The 'Funded Access Program' is made possible by Town Square's partnership with our                non-profit, CO CREATE INNOVATION HUB INC.

               Vetted by an application process, qualifiying organizations, students, or businesses can leverage their video podcast production services. If you align with the non-profit's goal, we encourage you to apply.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#f0f7fc] flex items-center justify-center text-[#1f7abc] flex-shrink-0">
                    <Lightbulb className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Mission</h3>
                    <p className="text-gray-600">	Our mission is to empower entrepreneurs of all generations through education, collaboration, and creative resources.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#f0f7fc] flex items-center justify-center text-[#1f7abc] flex-shrink-0">
                    <Heart className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Vision</h3>
                    <p className="text-gray-600">We accelerate success by fostering innovation, teamwork, and creativity, building a supportive ecosystem that drives community transformation.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn}
              className="relative aspect-square rounded-2xl overflow-hidden"
            >
              <ContentfulImage
                id="35ZP6ngK1CjLPIxRZt4fLq"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
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
              Welcome to Town Square Studio
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
             Sharing your brand's story, is just a click away.
            </motion.p>
          </motion.div>

          <SpaceShowcase
            videoTour={{
              title: 'Town Square Studio Intro Video',
              description: 'Create an intro video',
              embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
              thumbnailUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200'
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
              Flexible Options
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              From hourly rates to Funded Access Programs - We're making sharing your story accesible!
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard
              title="Hourly Rate"
              price={<><span className="text-base font-normal">Starting at</span> $75</>}
              period="/hour"
              description="Perfect for one-off brand stories, announcements, and interviews"
              features={[
                "Seats 1-4 people",
                "Livestream Capability",
                "Recorded File Delivered",
                "Advanced editing package available",
                "On-site Technical Support",
                "Lights, Camera, ACTION!"
              ]}
              buttonText="Book Now"
            />
            <PricingCard
              title="Monthly Membership"
              price={<><span className="text-base font-normal">Starting at</span> $350</>}
              period="/month"
              description="Monthly Content, Fully Produced"
              features={[
                "Seats 1-4 people",
                "Livestream Capability",
                "Recorded File Delivered",
                "Advanced editing package available",
                "On-site Technical Support",
                "Priority Booking",
                "Lights, Camera, ACTION!"
              ]}
              buttonText="Choose Plan"
              popular={true}
            />
            <PricingCard
              title="Funded Access Program"
              price={<><span className="text-base font-normal">Approved applications</span> Free</>}
              description="For those whose mission aligns with our non-profit"
              features={[
                "Funded Access Program",
                "Seats 1-4 people",
                "Livestream Capability",
                "Recorded File Delivered",
                "Advanced editing package available",
                "On-site Technical Support",
                "Priority Booking",
                "Lights, Camera, ACTION!"
              ]}
              buttonText="Apply Now"
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
              Standard amenities for all clients.
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
              onClick={() => window.location.href = '/tour'}
            >
              Schedule Your Tour
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </Layout>
  );
}
