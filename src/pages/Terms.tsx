import React from 'react';
import { PageTemplate } from '../components/PageTemplate';
import { typography } from '../styles/theme'; // Import typography styles

export default function Terms() {
  return (
    <PageTemplate
      title="Terms of Service"
      description="Review our terms and conditions for using our services and facilities."
    >
      <div className="prose prose-lg max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-gray-500">Effective Date: December 2, 2024</p>

        <h2 className={typography.h2}>Welcome to Co-Create Innovation Hub</h2>
        <p>
          These Terms of Service (“Terms”) govern your use of the Co-Create Innovation Hub’s services, facilities, website, and SMS communication (“Services”). By using our Services, you agree to these Terms. If you do not agree, you may not use our Services.
        </p>

        <h3 className={typography.h3}>1. Use of Services</h3>
        <ul>
          <li>
            <strong>Eligibility:</strong> You must be at least 18 years old to use our Services.
          </li>
          <li>
            <strong>Prohibited Activities:</strong> You agree not to use our facilities or Services for illegal purposes, spamming, harassment, or any activity that disrupts other users.
          </li>
          <li>
            <strong>Text Messaging Consent:</strong> By providing your phone number, you consent to receive SMS messages from Co-Create Innovation Hub, including transactional, informational, or promotional messages. Message frequency varies. Reply STOP to opt-out, HELP for assistance. Message and data rates may apply.
          </li>
        </ul>

        <h3 className={typography.h3}>2. Membership and Bookings</h3>
        <ul>
          <li>
            <strong>Membership Plans:</strong> Membership plans are subject to terms outlined during signup. Payment terms are non-refundable unless otherwise stated.
          </li>
          <li>
            <strong>Facility Use:</strong> Use of the facilities must comply with our code of conduct, which prohibits disruptive behavior or misuse of resources.
          </li>
          <li>
            <strong>Cancellations:</strong> Room bookings and event space reservations must be canceled at least 24 hours in advance to avoid charges.
          </li>
        </ul>

        <h3 className={typography.h3}>3. Content and Intellectual Property</h3>
        <ul>
          <li>
            <strong>User Content:</strong> By using the facilities to create content, you retain ownership of your work. However, you grant us permission to use images or videos taken within the space for promotional purposes unless you explicitly opt-out.
          </li>
          <li>
            <strong>Our Content:</strong> All logos, materials, and content on our website or communication channels are the intellectual property of Co-Create Innovation Hub.
          </li>
        </ul>

        <h3 className={typography.h3}>4. Disclaimer of Warranties</h3>
        <p>
          Our Services are provided “as is” without any warranties, express or implied. We do not guarantee uninterrupted or error-free service.
        </p>

        <h3 className={typography.h3}>5. Limitation of Liability</h3>
        <p>
          Co-Create Innovation Hub is not liable for damages resulting from the use of our facilities or Services, including but not limited to loss of data, theft, or personal injury.
        </p>

        <h3 className={typography.h3}>6. Changes to Terms</h3>
        <p>
          We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting. Continued use of our Services constitutes acceptance of the revised Terms.
        </p>

        <h3 className={typography.h3}>7. Governing Law</h3>
        <p>
          These Terms are governed by the laws of the State of Arkansas, without regard to conflict of law principles.
        </p>

        <h3 className={typography.h3}>Contact Information</h3>
        <p>
          For questions about these Terms, contact us at <a href="mailto:info@cc-hub.com" className="text-primary hover:underline">info@cc-hub.com</a>.
        </p>
      </div>
    </PageTemplate>
  );
}
