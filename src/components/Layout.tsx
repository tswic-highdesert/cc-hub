import React from 'react';
import { Link } from 'react-router-dom';
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
      { label: 'Events', href: 'https://archieapp.co/co-create-1/public/events' },
      { label: 'Blog', href: '/blog' },
      { label: 'Community Partners', href: '/partners' },
    ],
  },
  {
    label: 'Resources',
    children: [
      { label: 'Book a Tour', href: '/tour' },
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

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className={`flex items-center gap-1 text-gray-600 hover:text-primary ${animations.colors} py-2`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {item.label}
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className={`absolute top-full left-0 w-56 ${components.card.base} ${effects.shadow.lg} py-2 z-50`}>
          {item.children?.map((child) => (
            <Link
              key={child.href}
              to={child.href || '#'}
              className={`block px-4 py-2 text-gray-600 hover:text-primary hover:bg-gray-50 ${animations.colors}`}
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const MobileDropdown: React.FC<{ item: NavItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border-b border-gray-100 last:border-none">
      <button
        className={`flex items-center justify-between w-full py-3 text-gray-600 ${animations.colors}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {item.label}
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="pb-3 pl-4">
          {item.children?.map((child) => (
            <Link
              key={child.href}
              to={child.href || '#'}
              className={`block py-2 text-gray-600 hover:text-primary ${animations.colors}`}
            >
              {child.label}
            </Link>
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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
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
              <DesktopDropdown key={item.label} item={item} />
            ))}
            <Button onClick={() => window.location.href = '/tour'}>Book Tour</Button>
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
            fixed top-[72px] left-0 right-0 bg-white shadow-lg lg:hidden
            ${animations.hover}
            ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
          `}
        >
          <div className={`${components.container} py-6 flex flex-col gap-4`}>
            {navigation.map((item) => (
              <MobileDropdown key={item.label} item={item} />
            ))}
            <a href="/#pricing" className={`block py-3 text-gray-600 hover:text-primary ${animations.colors} border-b border-gray-100`}>
              Pricing
            </a>
            <div className="flex flex-col gap-3 pt-4 border-t border-gray-100">
              <Button variant="outline" className="w-full">Sign In</Button>
              <Button className="w-full" onClick={() => window.location.href = '/tour'}>Book Tour</Button>
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
                <li><Link to="/coworking" className={`hover:text-white ${animations.colors}`}>Coworking</Link></li>
                <li><Link to="/private-offices" className={`hover:text-white ${animations.colors}`}>Private Offices</Link></li>
                <li><Link to="/event-spaces" className={`hover:text-white ${animations.colors}`}>Event Spaces</Link></li>
                <li><Link to="/meeting-rooms" className={`hover:text-white ${animations.colors}`}>Meeting Rooms</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link to="/blog" className={`hover:text-white ${animations.colors}`}>Blog</Link></li>
                <li><Link to="/gallery" className={`hover:text-white ${animations.colors}`}>Gallery</Link></li>
                <li><a href="https://archieapp.co/co-create-1/public/events" className={`hover:text-white ${animations.colors}`}>Events</a></li>
                <li><Link to="/members" className={`hover:text-white ${animations.colors}`}>Members</Link></li>
                <li><Link to="/contact" className={`hover:text-white ${animations.colors}`}>Contact</Link></li>
                <li><Link to="/tour" className={`hover:text-white ${animations.colors}`}>Book a Tour</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link to="/privacy" className={`hover:text-white ${animations.colors}`}>Privacy</Link></li>
                <li><Link to="/terms" className={`hover:text-white ${animations.colors}`}>Terms</Link></li>
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
