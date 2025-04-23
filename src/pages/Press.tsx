import React from 'react';
import { PageTemplate } from '../components/PageTemplate';
import { Helmet } from 'react-helmet-async';

export default function Press() {
  return (
    <>
      <Helmet>
        <title>Press Kit | Co-Create Innovation Hub</title>
        <meta name="description" content="Media resources, brand assets, and company information for press inquiries at Co-Create Innovation Hub." />
        <link rel="canonical" href="https://cc-hub.com/press" />
      </Helmet>

      <PageTemplate
        title="Press Kit"
        description="Media resources, brand assets, and company information for press inquiries."
      />
    </>
  );
}
