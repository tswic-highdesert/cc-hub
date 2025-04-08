// Color palette
export const colors = {
  primary: {
    DEFAULT: '#1f7abc',
    light: '#f0f7fc',
    dark: '#1866a3',
    hover: '#1557a0'
  },
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827'
  }
} as const;

// Spacing
export const spacing = {
  section: {
    sm: 'py-12',
    DEFAULT: 'py-20',
    lg: 'py-24'
  },
  content: {
    sm: 'space-y-4',
    DEFAULT: 'space-y-6',
    lg: 'space-y-8'
  }
} as const;

// Animations
export const animations = {
  hover: 'transition-all duration-200',
  fade: 'transition-opacity duration-200',
  scale: 'transition-transform duration-200',
  colors: 'transition-colors duration-200'
} as const;

// Effects
export const effects = {
  shadow: {
    sm: 'shadow-sm hover:shadow transition-shadow',
    DEFAULT: 'shadow hover:shadow-md transition-shadow',
    lg: 'shadow-md hover:shadow-lg transition-shadow'
  },
  gradient: {
    primary: 'bg-gradient-to-br from-primary-light to-white',
    dark: 'bg-gradient-to-b from-black/70 via-black/50 to-black/70',
    transparent: 'bg-gradient-to-t from-white via-white/90 to-transparent'
  }
} as const;

// Typography
export const typography = {
  h1: 'text-4xl md:text-5xl font-poppins font-bold tracking-tight',
  h2: 'text-3xl md:text-4xl font-poppins font-semibold tracking-tight',
  h3: 'text-2xl font-poppins font-medium tracking-tight',
  h4: 'text-xl font-poppins font-normal tracking-tight',
  body: {
    DEFAULT: 'text-base font-merriweather text-gray-600',
    lg: 'text-lg font-merriweather text-gray-600',
    small: 'text-sm font-merriweather text-gray-500'
  },
  display: 'text-5xl md:text-7xl font-poppins font-bold tracking-tight',
  link: 'text-primary font-hind hover:text-primary-hover transition-colors',
  nav: 'font-hind',
  button: 'font-hind'
} as const;

// Common component styles
export const components = {
  container: 'container mx-auto px-4',
  button: {
    base: 'inline-flex items-center justify-center font-medium transition-colors',
    primary: 'bg-primary text-white hover:bg-primary-hover',
    outline: 'border-2 border-gray-300 text-gray-700 hover:border-primary hover:text-primary',
    white: 'bg-white text-primary hover:bg-primary-light'
  },
  card: {
    base: 'bg-white',
    interactive: 'hover:shadow-lg hover:scale-[1.02] transition-all duration-200',
    bordered: 'border border-gray-100'
  },
  input: {
    base: 'w-full px-4 py-2 border border-gray-300 transition-colors outline-none',
    focus: 'focus:ring-2 focus:ring-primary focus:border-primary',
    error: 'border-red-500 focus:ring-red-500 focus:border-red-500'
  }
} as const;
