import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  icon?: boolean;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  icon = false, 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-serif uppercase tracking-wider text-sm font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed py-3 px-6";
  
  const variants = {
    primary: "bg-espresso text-cream hover:bg-warmbrown shadow-md hover:shadow-lg",
    secondary: "bg-amber text-espresso hover:bg-amber/80 shadow-sm",
    outline: "border-2 border-espresso text-espresso hover:bg-espresso hover:text-cream",
    text: "text-espresso hover:text-warmbrown underline-offset-4 hover:underline p-0 bg-transparent",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
      {icon && <ArrowRight className="ml-2 h-4 w-4" />}
    </button>
  );
};

export default Button;