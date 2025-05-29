import React from 'react';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

export const Link: React.FC<LinkProps> = ({ children, className = '', ...props }) => {
  return (
    <a 
      className={`font-medium hover:underline ${className}`}
      {...props}
    >
      {children}
    </a>
  );
};