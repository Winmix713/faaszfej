import React, { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'lime';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
  className = ''
}) => {
  const variantClasses = {
    default: 'bg-k-surfaceHighlight text-gray-400 border-k-borderDim',
    success: 'bg-successDim text-success border-success/20',
    warning: 'bg-warningDim text-warning border-warning/20',
    danger: 'bg-dangerDim text-danger border-danger/20',
    lime: 'bg-k-limeLight text-k-lime border-k-limeBorder',
  };

  const sizeClasses = {
    sm: 'text-[8px] px-1.5 py-0.5',
    md: 'text-[10px] px-2 py-0.5',
    lg: 'text-xs px-3 py-1',
  };

  return (
    <span
      className={`inline-flex items-center gap-1 font-semibold uppercase tracking-wider rounded border ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;
