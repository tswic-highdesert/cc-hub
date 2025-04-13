import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react';
import { Button } from './Button';
import { components, typography, effects, animations } from '../styles/theme';
import { businessConfig } from '../config/business';
import { ContentfulImage } from './ContentfulImage';

interface NavItem {
  label: string;
  href?: string;
  children?: NavItem[];
}

const navigation: NavItem[] = [
  {
    label: 'Spaces',
    children: [
      { label: 'Coworking', href: '/coworking' },
      { label: 'Private Offices', href: '/private-offices' },
      { label: 'Meeting Rooms', href: '/meeting-rooms' },
      { label: 'Event Spaces', href: '/event-spaces' },
    ],
  },
  {
    label: 'Community',
    children: [
      { label: 'Members', href: '/members' },
      // Keep external links as <a> or handle differently if needed
      { label: 'Events', href: '/events' }, // Updated link to internal events page
      { label: 'Blog', href: '/blog' },
      { label: 'Community Partners', href: '/partners' },
    ],
  },
  {
    label: 'Resources',
    children: [
      { label: 'Book a Tour', href: '/tour' },
      // Keep external links as <a> or handle differently if needed
      { label: 'Member Portal', href: 'https://archieapp.co/co-create-1' },
    ],
  },
  {
    label: 'Company',
    children: [
      { label: 'Gallery', href: '/gallery' },
      { label: 'Contact', href: '/contact' },
    ],
  },
];

const DesktopDropdown: React.FC<{ item: NavItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate(); // Use navigate hook

  const handleNavigation = (href?: string) => {
    if (href) {
      // Check if it's an external link
      if (href.startsWith('http://') || href.startsWith('https://')) {
        window.open(href, '_blank', 'noopener,noreferrer'); // Open external links in new tab
      } else {
        navigate(href); // Use navigate for internal links
      }
    }
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className={`flex items-center gap-1 text-gray-600 hover:text-primary ${animations.colors} py-2`}
        onClick={() => item.href ? handleNavigation(item.href) : setIsOpen(!isOpen)} // Handle direct link or dropdown toggle
      >
        {item.label}
        {item.children && <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />}
      </button>
      {isOpen && item.children && (
        <div className={`absolute top-full left-0 w-56 ${components.card.base} ${effects.shadow.lg} py-2 z-50`}>
          {item.children.map((child) => (
            <button
              key={child.href || child.label}
              onClick={() => handleNavigation(child.href)}
              className={`block w-full text-left px-4 py-2 text-gray-600 hover:text-primary hover:bg-gray-50 ${animations.colors}`}
            >
              {child.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};


const MobileDropdown: React.FC<{ item: NavItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate(); // Use navigate hook

  const handleNavigation = (href?: string) => {
    if (href) {
      // Check if it's an external link
      if (href.startsWith('http://') || href.startsWith('https://')) {
        window.open(href, '_blank', 'noopener,noreferrer'); // Open external links in new tab
      } else {
        navigate(href); // Use navigate for internal links
      }
    }
  };

  return (
    <div className="border-b border-gray-100 last:border-none">
      <button
        className={`flex items-center justify-between w-full py-3 text-gray-600 ${animations.colors}`}
        onClick={() => item.href ? handleNavigation(item.href) : setIsOpen(!isOpen)} // Handle direct link or dropdown toggle
      >
        {item.label}
        {item.children && <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />}
      </button>
      {isOpen && item.children && (
        <div className="pb-3 pl-4">
          {item.children.map((child) => (
            <button
              key={child.href || child.label}
              onClick={() => handleNavigation(child.href)}
              className={`block w-full text-left py-2 text-gray-600 hover:text-primary ${animations.colors}`}
            >
              {child.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};


interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const navigate = useNavigate(); // Use navigate hook

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleBookTourClick = () => {
    navigate('/tour'); // Use navigate for the tour button
    if (mobileMenuOpen) {
      setMobileMenuOpen(false); // Close mobile menu on navigation
    }
  };

  const handleSignInClick = () => {
    // Assuming Sign In goes to an external portal
    window.open('https://archieapp.co/co-create-1', '_blank', 'noopener,noreferrer');
    if (mobileMenuOpen) {
      setMobileMenuOpen(false); // Close mobile menu
    }
  };

  const handlePricingClick = () => {
    navigate('/#pricing'); // Navigate to home page pricing section
    if (mobileMenuOpen) {
      setMobileMenuOpen(false); // Close mobile menu
    }
  };

  // Function to handle navigation for footer links
  const handleFooterLinkClick = (href: string) => {
    if (href.startsWith('http://') || href.startsWith('https://')) {
      window.open(href, '_blank', 'noopener,noreferrer');
    } else {
      navigate(href);
    }
  };


  return (
    <div className="min-h-screen bg-white">
      <header className={`fixed top-0 left-0 right-0 ${effects.gradient.primary} z-50`}>
        <nav className={`${components.container} py-6 flex items-center justify-between relative`}>
          <Link to="/" className="flex items-center gap-2">
            <ContentfulImage
              id="5DVTh80kNoaqqQtwbyBHCY"
              alt={`${businessConfig.name} logo`}
              className="w-12 h-12"
            />
            <span className={typography.h4}>{businessConfig.name}</span>
          </Link>
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              item.children ? (
                <DesktopDropdown key={item.label} item={item} />
              ) : (
                <button
                  key={item.label}
                  onClick={() => handleFooterLinkClick(item.href!)} // Use handleFooterLinkClick for direct nav items
                  className={`text-gray-600 hover:text-primary ${animations.colors} py-2`}
                >
                  {item.label}
                </button>
              )
            ))}
            {/* Updated Book Tour Button */}
            <Button onClick={handleBookTourClick}>Book Tour</Button>
          </div>
          <button
            className={`lg:hidden p-2 text-gray-600 hover:text-primary ${animations.colors}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`
            fixed top-[88px] left-0 right-0 bg-white shadow-lg lg:hidden
            transition-all duration-300 ease-in-out
            ${mobileMenuOpen ? 'opacity-100 visible max-h-screen' : 'opacity-0 invisible max-h-0 overflow-hidden'}
          `}
        >
          <div className={`${components.container} py-6 flex flex-col gap-4`}>
            {navigation.map((item) => (
               item.children ? (
                <MobileDropdown key={item.label} item={item} />
              ) : (
                <button
                  key={item.label}
                  onClick={() => {
                    handleFooterLinkClick(item.href!);
                    setMobileMenuOpen(false); // Close menu on click
                  }}
                  className={`block w-full text-left py-3 text-gray-600 hover:text-primary ${animations.colors} border-b border-gray-100`}
                >
                  {item.label}
                </button>
              )
            ))}
            {/* Updated Pricing Link */}
            <button onClick={handlePricingClick} className={`block py-3 text-gray-600 hover:text-primary ${animations.colors} border-b border-gray-100 text-left w-full`}>
              Pricing
            </button>
            <div className="flex flex-col gap-3 pt-4 border-t border-gray-100">
              {/* Updated Sign In Button */}
              <Button variant="outline" className="w-full" onClick={handleSignInClick}>Sign In</Button>
              {/* Updated Book Tour Button */}
              <Button className="w-full" onClick={handleBookTourClick}>Book Tour</Button>
            </div>
          </div>
        </div>
      </header>
      <div className="h-[88px]" /> {/* Spacer for fixed header */}

      <main>{children}</main>

      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 text-white mb-4">
                <ContentfulImage
                  id="6ZOUMNzfhgnGJQKMV5V2d0"
                  alt={`${businessConfig.name} logo`}
                  className="w-10 h-10"
                />
                <span className={typography.h4}>{businessConfig.name}</span>
              </div>
              <p className="text-sm">
                Russellville's premier coworking and innovation hub.
              </p>
              <div className="mt-4 space-y-1 text-sm">
                <p>{businessConfig.contact.address.full}</p>
                <p>
                  <a href={`tel:${businessConfig.contact.phone}`} className="hover:text-white transition-colors">
                    {businessConfig.contact.phone}
                  </a>
                </p>
                <p>
                  <a href={`mailto:${businessConfig.contact.email}`} className="hover:text-white transition-colors">
                    {businessConfig.contact.email}
                  </a>
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Spaces</h3>
              <ul className="space-y-2">
                 {/* Use button + onClick for internal links */}
                <li><button onClick={() => handleFooterLinkClick('/coworking')} className={`hover:text-white ${animations.colors} text-left`}>Coworking</button></li>
                <li><button onClick={() => handleFooterLinkClick('/private-offices')} className={`hover:text-white ${animations.colors} text-left`}>Private Offices</button></li>
                <li><button onClick={() => handleFooterLinkClick('/event-spaces')} className={`hover:text-white ${animations.colors} text-left`}>Event Spaces</button></li>
                <li><button onClick={() => handleFooterLinkClick('/meeting-rooms')} className={`hover:text-white ${animations.colors} text-left`}>Meeting Rooms</button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><button onClick={() => handleFooterLinkClick('/blog')} className={`hover:text-white ${animations.colors} text-left`}>Blog</button></li>
                <li><button onClick={() => handleFooterLinkClick('/gallery')} className={`hover:text-white ${animations.colors} text-left`}>Gallery</button></li>
                {/* Keep external link as <a> */}
                <li><a href="/events" className={`hover:text-white ${animations.colors}`}>Events</a></li> {/* Updated link to internal events page */}
                <li><button onClick={() => handleFooterLinkClick('/members')} className={`hover:text-white ${animations.colors} text-left`}>Members</button></li>
                <li><button onClick={() => handleFooterLinkClick('/contact')} className={`hover:text-white ${animations.colors} text-left`}>Contact</button></li>
                <li><button onClick={() => handleFooterLinkClick('/tour')} className={`hover:text-white ${animations.colors} text-left`}>Book a Tour</button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><button onClick={() => handleFooterLinkClick('/privacy')} className={`hover:text-white ${animations.colors} text-left`}>Privacy</button></li>
                <li><button onClick={() => handleFooterLinkClick('/terms')} className={`hover:text-white ${animations.colors} text-left`}>Terms</button></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
            © {new Date().getFullYear()} Co-Create Innovation Hub. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};
