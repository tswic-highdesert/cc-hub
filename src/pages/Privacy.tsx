import React from 'react';
import { PageTemplate } from '../components/PageTemplate';
import { Helmet } from 'react-helmet-async';

export default function Privacy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Co-Create Innovation Hub</title>
        <meta name="description" content="Learn how Co-Create Innovation Hub collects, uses, and protects your personal information." />
        <link rel="canonical" href="https://cc-hub.com/privacy" />
      </Helmet>

      <PageTemplate
        title="Privacy Policy"
        description="Learn how we collect, use, and protect your personal information."
      />
    </>
  );
}
