import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import fetch from 'node-fetch'; // to pull dynamic content

const BASE_URL = 'https://cc-hub.com';

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: BASE_URL });
  const writeStream = createWriteStream('./public/sitemap.xml');
  sitemap.pipe(writeStream);

  // Static Pages
  const staticPages = [
    '/',
    '/about',
    '/contact',
    '/blog',
    '/events',
    '/spaces/coworking',
    '/spaces/private-offices',
    '/spaces/meeting-rooms',
    '/spaces/event-spaces',
    '/gallery',
    '/terms',
    '/privacy',
    '/tour',
    '/partners'
  ];

  staticPages.forEach((page) => {
    sitemap.write({ url: page, changefreq: 'monthly', priority: 0.8 });
  });

  // Dynamic Blog Posts from Contentful
const SPACE_ID = process.env.VITE_CONTENTFUL_SPACE_ID || '';
const ACCESS_TOKEN = process.env.VITE_CONTENTFUL_ACCESS_TOKEN || '';
  const res = await fetch(`https://cdn.contentful.com/spaces/${SPACE_ID}/environments/master/entries?content_type=blogPost&access_token=${ACCESS_TOKEN}`);
  const data = await res.json();

  data.items.forEach((post) => {
    sitemap.write({ url: `/blog/${post.fields.slug}`, changefreq: 'weekly', priority: 0.7 });
  });

  // Finalize sitemap
  sitemap.end();
  await streamToPromise(sitemap);
  console.log('Sitemap.xml created successfully');
}

generateSitemap();