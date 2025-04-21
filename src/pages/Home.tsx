import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import {
  ArrowRight,
  Building2,
  Coffee,
  Laptop2,
  MapPin,
  Users,
  Zap,
  DoorOpen,
  Network,
  Briefcase
} from 'lucide-react';
import { fadeIn, staggerContainer } from '../animations';
import { PageHero } from '../components/PageHero';
import { PricingCard } from '../components/PricingCard';
import { BlogPreviewCard } from '../components/BlogPreviewCard';
import { ServiceCard } from '../components/ServiceCard';
import { FeatureCard } from '../components/FeatureCard';
import { Button } from '../components/Button';
import { Layout } from '../components/Layout';
import { useSuccessStories } from '../hooks/useSuccessStories';
import { useBlogPosts } from '../hooks/useBlog';
import { UseCase } from '../components/spaces/UseCase';
import ArchieEvents from '../components/ArchieEvents';

const features = [
  {
    icon: DoorOpen,
    title: 'Flexible Work Environments',
    description: 'From Daypasses to 24/7 Office Access, you can find something at The Hub.'
  },
  {
    icon: Network,
    title: 'Vibrant Community',
    description: 'Connect with a diverse network of entrepreneurs, creators, and innovators.'
  },
  {
    icon: Users,
    title: 'Innovation Events',
    description: 'Regular workshops, networking events, and learning opportunities.'
  },
  {
    icon: Zap,
    title: 'Premium Amenities',
    description: 'High-speed internet, coffee & snacks, printing, and meeting rooms included with membership.'
  },
  {
    icon: Building2,
    title: 'Prime Location',
    description: 'Centrally located in Downtown Russellville with easy access and parking.'
  },
  {
    icon: Briefcase,
    title: 'Business Services',
    description: 'Professional address, mail handling, and concierge services.'
  }
];

export default function Home() {
  const { stories, loading: storiesLoading } = useSuccessStories('home');
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <Layout>
      {/* Hero Section */}
      <PageHero
        slug="home"
        title={<>Welcome to<br />Co-Create Innovation Hub</>}
        description="A modern workspace designed for innovation, collaboration, and growth in the Arkansas River Valley."
        backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"
      >
        <motion.div variants={fadeIn} className="flex flex-wrap justify-center gap-4">
          <Button
            variant="white"
            size="lg"
            onClick={() => navigate('/tour')} // Use navigate
          >
            Book a Tour
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="!text-white !border-white hover:!bg-white hover:!text-[#1f7abc]"
            onClick={() => {
              const pricingSection = document.getElementById('pricing');
              if (pricingSection) {
                pricingSection.scrollIntoView({ behavior: 'smooth' });
              }
            }} // Use navigate (or handle scroll differently if needed)
          >
            View Pricing
          </Button>
        </motion.div>
      </PageHero>

      {/* Services Section */}
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
              Are you looking to...
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Find the perfect space for your needs.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <ServiceCard
              title="Work Remotely"
              description="Join our vibrant coworking community with flexible workspace options designed for productivity and collaboration."
              slug="coworking"
              href="/coworking"
            />
            <ServiceCard
              title="Grow Your Business"
              description="Secure, private offices that scale with your team, complete with premium amenities and professional services."
              slug="private-offices"
              href="/private-offices"
            />
            <ServiceCard
              title="Host or Attend Events"
              description="Versatile event spaces equipped for presentations, workshops, and networking in a professional setting."
              slug="event-spaces"
              href="/event-spaces"
            />
            <ServiceCard
              title="Meet with Clients"
              description="Professional meeting rooms with state-of-the-art technology for impactful presentations and collaboration."
              slug="meeting-rooms"
              href="/meeting-rooms"
            />
          </motion.div>

      {/* Events Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <ArchieEvents />
        </div>
      </section>
					
          {/* Features */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mt-20 mb-16"
          >
            <motion.h2
              variants={fadeIn}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              Everything You Need
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Flexible workspace solutions designed for productivity and growth.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </motion.div>
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

      {/* Success Stories Section */}
      {!storiesLoading && stories.length > 0 && stories.map((story, index) => (
        <section key={index} className="py-20 bg-gray-50"> {/* Added key prop */}
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
                Member Success Stories
              </motion.h2>
              <motion.p
                variants={fadeIn}
                className="text-xl text-gray-600 max-w-2xl mx-auto"
              >
                See how our members are using the space to grow their businesses.
              </motion.p>
            </motion.div>

            <UseCase
              title={story.title}
              description={story.description}
              imageUrl={`https:${story.imageUrl}`}
              videoUrl={story.videoUrl}
              testimonial={story.testimonial}
              benefits={story.benefits}
            />
          </div>
        </section>
      ))}

      {/* Blog Section */}
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
              Latest Updates
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Stay informed with our latest news, insights, and community stories.
            </motion.p>
          </motion.div>

          <BlogPreviewSection />
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
            Ready? Let's Get It.
          </motion.h2>
          <motion.div variants={fadeIn} className="flex flex-col md:flex-row justify-center items-center gap-4">
            <Button
              variant="white"
              size="lg"
              onClick={() => navigate('/tour')} // Use navigate
            >
              Schedule Your Tour
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="white"
              size="lg"
              onClick={() => navigate('/contact')} // Use navigate
            >
              Join Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="!text-white !border-white hover:!bg-white hover:!text-[#1f7abc]"
              onClick={() => navigate('/contact')} // Use navigate
            >
              Contact Us
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </Layout>
  );
}

function BlogPreviewSection() {
  const { posts, loading, error } = useBlogPosts({ limit: 3 });

  if (loading) {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-96 bg-gray-100 animate-pulse rounded-xl" />
        ))}
      </div>
    );
  }

  if (error) {
    return null;
  }

  if (posts.length === 0) {
    return (
      <div className="text-center text-gray-500 py-8">
        New blog posts coming soon!
      </div>
    );
  }

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {posts.map((post) => (
        <BlogPreviewCard
          key={post.id}
          title={post.title}
          slug={post.slug}
          publishDate={post.publishDate}
          excerpt={post.excerpt}
          featuredImage={post.featuredImage}
        />
      ))}
    </motion.div>
  );
}
