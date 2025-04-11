import React from 'react';
import { clsx } from 'clsx';
import { components, animations } from '../styles/theme';
import { logEvent } from '../lib/analytics';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'white';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  onClick,
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    logEvent('Button', 'Click', children?.toString());
    if (onClick) onClick(e);
  };

  return (
    <button
      className={clsx(
        components.button.base,
        animations.colors,
        {
          [components.button.primary]: variant === 'primary',
          [components.button.outline]: variant === 'outline',
          [components.button.white]: variant === 'white',
          'px-4 py-2 text-sm': size === 'sm',
          'px-4 py-2 text-base': size === 'md',
          'px-6 py-3 text-lg': size === 'lg',
        },
        className
      )}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
};
