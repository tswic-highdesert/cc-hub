import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../animations';
import { Building2, Users, Calendar, Brain, Handshake, Mic2 } from 'lucide-react';
import { Button } from './Button';
import { SelectableFeatureCard } from './SelectableFeatureCard';
import { components, typography } from '../styles/theme';
import { logEvent } from '../lib/analytics';

interface FormData {
  name: string;
  email: string;
  phone: string;
  interests: string[];
  referralSource: string;
}

const services = [
  { icon: Building2, title: 'Private Offices', description: 'Secure, private workspace solutions for teams of all sizes.', value: 'private-offices' },
  { icon: Users, title: 'Coworking Space', description: 'Flexible workspace in our collaborative environment.', value: 'coworking-space' },
  { icon: Calendar, title: 'Meeting Rooms', description: 'Professional spaces for meetings and presentations.', value: 'meeting-rooms' },
  { icon: Brain, title: 'Think Lounge', description: 'Versatile event space for workshops and gatherings.', value: 'think-lounge' },
  { icon: Handshake, title: 'Partnership', description: 'Explore partnership opportunities with our innovation hub.', value: 'partnership' },
  { icon: Mic2, title: 'Podcast Production', description: 'Professional podcast recording and production services.', value: 'podcast-production' },
];

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    interests: [],
  referralSource: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleInterestChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const validateForm = (): string | null => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9\-\+\s\(\)]+$/;

    if (!formData.name.trim()) return 'Name is required.';
    if (!emailRegex.test(formData.email)) return 'Please enter a valid email address.';
    if (!phoneRegex.test(formData.phone)) return 'Please enter a valid phone number.';
    if (formData.interests.length === 0) return 'Please select at least one area of interest.';
    return null;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);
    setSuccessMessage(null);

    const validationError = validateForm();
    if (validationError) {
      setErrorMessage(validationError);
      logEvent('Form', 'Error', `Validation Failed: ${validationError}`);
      setIsSubmitting(false);
      return;
    }

    logEvent('Form', 'Submit', 'Contact Form');

    const fallbackFormData = new FormData(e.currentTarget);

    try {
      const response = await fetch('https://services.leadconnectorhq.com/hooks/Cxq3wlhbzAsZ3mqstz89/webhook-trigger/8361e585-dd47-4075-aa75-3339d20fde5b', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Primary webhook failed');

      setSuccessMessage('Thank you for your submission! We will be in touch soon.');

      await fetch('/', {
        method: 'POST',
        body: fallbackFormData,
      });

      setFormData({ name: '', email: '', phone: '', interests: [] });
    } catch (error) {
      console.error('Submission error:', error);
      logEvent('Form', 'Error', 'Submission Failed');
      setErrorMessage('There was a problem submitting your request. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      name="Contact Form"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <input type="hidden" name="form-name" value="Contact Form" />
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="interests" value={formData.interests.join(', ')} />
			<input type="hidden" name="referralSource" value={formData.referralSource} />

      {successMessage && (
        <motion.div
          variants={fadeIn}
          aria-live="polite"
          className="bg-green-50 border border-green-200 text-green-800 rounded-md p-4 mb-6"
        >
          {successMessage}
        </motion.div>
      )}

      {errorMessage && (
        <motion.div
          variants={fadeIn}
          aria-live="polite"
          className="bg-red-50 border border-red-200 text-red-800 rounded-md p-4 mb-6"
        >
          {errorMessage}
        </motion.div>
      )}

      <motion.div variants={fadeIn}>
        <label htmlFor="name" className={`block ${typography.body.small} font-medium mb-2`}>
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
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
          name="email"
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
          name="phone"
          required
          value={formData.phone}
          onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
          className={`${components.input.base} ${components.input.focus}`}
        />
      </motion.div>

			<motion.div variants={fadeIn}>
		  <label htmlFor="referralSource" className={`block ${typography.body.small} font-medium mb-2`}>
		    How did you hear about us?
		  </label>
		  <select
		    id="referralSource"
		    name="referralSource"
		    required
		    value={formData.referralSource}
		    onChange={(e) => setFormData(prev => ({ ...prev, referralSource: e.target.value }))}
		    className={`${components.input.base} ${components.input.focus}`}
		  >
		    <option value="">Select an option</option>
		    <option value="Website">Website</option>
		    <option value="Social Media">Social Media</option>
		    <option value="Friend or Colleague">Friend or Colleague</option>
		    <option value="Event">Event</option>
		    <option value="Other">Other</option>
		  </select>
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

      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? 'Sending...' : 'Submit'}
      </Button>
    </motion.form>
  );
};

export default ContactForm;
