import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../animations';
import { Building2, Users, Calendar, Brain, Handshake, Mic2 } from 'lucide-react';
import { Button } from './Button';
import { SelectableFeatureCard } from './SelectableFeatureCard';
import { components, typography, animations, spacing } from '../styles/theme';

interface FormData {
  name: string;
  email: string;
  phone: string;
  interests: string[];
}

const redirectUrls = {
  'private-offices': 'https://example.com/private-offices',
  'coworking-space': 'https://example.com/coworking',
  'meeting-rooms': 'https://example.com/meeting-rooms',
  'think-lounge': 'https://example.com/think-lounge',
  'partnership': 'https://example.com/partnership',
  'podcast-production': 'https://example.com/podcast'
};

const services = [
  {
    icon: Building2,
    title: 'Private Offices',
    description: 'Secure, private workspace solutions for teams of all sizes.',
    value: 'private-offices'
  },
  {
    icon: Users,
    title: 'Coworking Space',
    description: 'Flexible workspace in our collaborative environment.',
    value: 'coworking-space'
  },
  {
    icon: Calendar,
    title: 'Meeting Rooms',
    description: 'Professional spaces for meetings and presentations.',
    value: 'meeting-rooms'
  },
  {
    icon: Brain,
    title: 'Think Lounge',
    description: 'Versatile event space for workshops and gatherings.',
    value: 'think-lounge'
  },
  {
    icon: Handshake,
    title: 'Partnership',
    description: 'Explore partnership opportunities with our innovation hub.',
    value: 'partnership'
  },
  {
    icon: Mic2,
    title: 'Podcast Production',
    description: 'Professional podcast recording and production services.',
    value: 'podcast-production'
  }
];

export const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [formData, setFormData] = React.useState<FormData>({
    name: '',
    email: '',
    phone: '',
    interests: []
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://services.leadconnectorhq.com/hooks/Cxq3wlhbzAsZ3mqstz89/webhook-trigger/8361e585-dd47-4075-aa75-3339d20fde5b', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Redirect based on first selected interest
      if (formData.interests.length > 0) {
        const redirectUrl = redirectUrls[formData.interests[0] as keyof typeof redirectUrls];
        if (redirectUrl) {
          window.location.href = redirectUrl;
        }
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInterestChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  return (
    <motion.form
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <motion.div variants={fadeIn}>
        <label htmlFor="name" className={`block ${typography.body.small} font-medium mb-2`}>
          Name
        </label>
        <input
          type="text"
          id="name"
          required
          value={formData.name}
          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
          className={`${components.input.base} ${components.input.focus}`}
        />
      </motion.div>

      <motion.div variants={fadeIn}>
        <label htmlFor="email" className={`block ${typography.body.small} font-medium mb-2`}>
          Email
        </label>
        <input
          type="email"
          id="email"
          required
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          className={`${components.input.base} ${components.input.focus}`}
        />
      </motion.div>

      <motion.div variants={fadeIn}>
        <label htmlFor="phone" className={`block ${typography.body.small} font-medium mb-2`}>
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          required
          value={formData.phone}
          onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
          className={`${components.input.base} ${components.input.focus}`}
        />
      </motion.div>

      <motion.div variants={fadeIn}>
        <label className={`block ${typography.body.small} font-medium mb-4`}>
          I'm interested in (select at least one)
        </label>
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          {services.map((service) => (
            <SelectableFeatureCard
              key={service.value}
              icon={service.icon}
              title={service.title}
              description={service.description}
              selected={formData.interests.includes(service.value)}
              onClick={() => handleInterestChange(service.value)}
            />
          ))}
        </div>
      </motion.div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? 'Sending...' : 'Submit'}
      </Button>
    </motion.form>
  );
};
