import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PageTemplate } from '../components/PageTemplate';

export default function Nonprofit() {
  return (
    <>
      <Helmet>
        <title>Non-Profit Program | Co-Create Innovation Hub</title>
        <meta name="description" content="Supporting non-profit organizations with special workspace solutions in Russellville, AR." />
        <link rel="canonical" href="https://cc-hub.com/nonprofit" />
      </Helmet>

      <PageTemplate
        title="Non-Profit Program"
        description="Supporting non-profit organizations with special workspace solutions."
      />
    </>
  );
}
