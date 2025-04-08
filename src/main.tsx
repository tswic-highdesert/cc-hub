import React, { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, useLocation } from 'react-router-dom';
import App from './App.tsx';
import Home from './pages/Home.tsx';
import Members from './pages/Members.tsx';
import Tour from './pages/Tour.tsx';
import Coworking from './pages/spaces/Coworking.tsx';
import PrivateOffices from './pages/spaces/PrivateOffices.tsx';
import MeetingRooms from './pages/spaces/MeetingRooms.tsx';
import EventSpaces from './pages/spaces/EventSpaces.tsx';
import Blog from './pages/Blog.tsx';
import Partners from './pages/Partners.tsx';
import Contact from './pages/Contact.tsx';
import BlogPost from './pages/BlogPost.tsx';
import Gallery from './pages/Gallery.tsx';
import Press from './pages/Press.tsx';
import Privacy from './pages/Privacy.tsx';
import Terms from './pages/Terms.tsx';
import Podcasts from './pages/spaces/Podcasts.tsx';
import './index.css';

// Scroll restoration component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: (
          <>
            <ScrollToTop />
            <Home />
          </>
        ),
      },
      {
        path: 'tour',
        element: (
          <>
            <ScrollToTop />
            <Tour />
          </>
        ),
      },
      {
        path: 'members',
        element: (
          <>
            <ScrollToTop />
            <Members />
          </>
        ),
      },
      {
        path: 'coworking',
        element: (
          <>
            <ScrollToTop />
            <Coworking />
          </>
        ),
      },
      {
        path: 'private-offices',
        element: (
          <>
            <ScrollToTop />
            <PrivateOffices />
          </>
        ),
      },
      {
        path: 'meeting-rooms',
        element: (
          <>
            <ScrollToTop />
            <MeetingRooms />
          </>
        ),
      },
      {
        path: 'event-spaces',
        element: (
          <>
            <ScrollToTop />
            <EventSpaces />
          </>
        ),
      },
      {
        path: 'blog',
        element: (
          <>
            <ScrollToTop />
            <Blog />
          </>
        ),
      },
      {
        path: 'blog/:slug',
        element: (
          <>
            <ScrollToTop />
            <BlogPost />
          </>
        ),
      },
      {
        path: 'partners',
        element: (
          <>
            <ScrollToTop />
            <Partners />
          </>
        ),
      },
      {
        path: 'contact',
        element: (
          <>
            <ScrollToTop />
            <Contact />
          </>
        ),
      },
      {
        path: 'gallery',
        element: (
          <>
            <ScrollToTop />
            <Gallery />
          </>
        ),
      },
      {
        path: 'press',
        element: (
          <>
            <ScrollToTop />
            <Press />
          </>
        ),
      },
      {
        path: 'privacy',
        element: (
          <>
            <ScrollToTop />
            <Privacy />
          </>
        ),
      },
      {
        path: 'terms',
        element: (
          <>
            <ScrollToTop />
            <Terms />
          </>
        ),
      },
      {
        path: 'podcasts',
        element: (
          <>
            <ScrollToTop />
            <Podcasts />
          </>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
