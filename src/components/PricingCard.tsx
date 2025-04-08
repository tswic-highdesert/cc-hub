import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from './Button';
import { fadeIn } from '../animations';

interface PricingCardProps {
  title: string;
  price: string | React.ReactNode;
  period?: string;
  description: string;
  features: string[];
  buttonText: string;
  popular?: boolean;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  period,
  description,
  features,
  buttonText,
  popular = false,
}) => {
  const navigate = useNavigate();

  return (
    <motion.div
      variants={fadeIn}
      className={`
        relative rounded-2xl p-8 
        ${popular
          ? 'bg-primary text-white shadow-xl scale-105'
          : 'bg-white shadow-sm hover:shadow transition-shadow'
        }
      `}
    >
      {popular && (
       <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-dark text-white px-4 py-1 rounded-full text-sm font-medium">
          Most Popular
        </div>
      )}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <div className="text-4xl font-bold mb-2">
          {price}
          {period && <span className="text-base font-normal opacity-80 ml-1">{period}</span>}
        </div>
        <p className={popular ? 'text-white/90' : 'text-gray-600'}>
          {description}
        </p>
      </div>
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <div className={`
              w-5 h-5 rounded-full flex items-center justify-center
             ${popular ? 'bg-primary-dark' : 'bg-primary-light'}
            `}>
             <Check className={`w-3 h-3 ${popular ? 'text-white' : 'text-primary'}`} />
            </div>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button
        variant={popular ? 'white' : 'primary'} 
        onClick={() => navigate('/contact')}
        className="w-full"
      >
        {buttonText}
      </Button>
    </motion.div>
  );
};
