import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../animations';
import { ChevronDown } from 'lucide-react';
import { components, typography, animations } from '../../styles/theme';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  faqs: FaqItem[];
}

export const FaqSection: React.FC<FaqSectionProps> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <motion.div
          key={index}
          variants={fadeIn}
          className={`${components.card.bordered} ${components.card.base}`}
        >
          <button
            className="w-full flex items-center justify-between p-6 text-left"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <span className={typography.h4}>
              {faq.question}
            </span>
            <ChevronDown
              className={`w-5 h-5 text-gray-500 ${animations.hover} ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            className={`
              overflow-hidden ${animations.hover}
              ${openIndex === index ? 'max-h-96' : 'max-h-0'}
            `}
          >
            <div className="p-6 pt-0 text-gray-600">
              {faq.answer}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
