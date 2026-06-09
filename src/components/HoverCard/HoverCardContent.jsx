import { useEffect, useState } from 'react';

import { cn } from '@utils/cn';
import PropTypes from 'prop-types';
import { useHoverCard } from './HoverCard';

export const HoverCardContent = ({
  children,
  className,
  side = 'top',
  size = 'md',
}) => {
  const { isOpen, handleOpen, handleClose } = useHoverCard();

  const [shouldRender, setShouldRender] = useState(isOpen);

  const [isClosing, setIsClosing] = useState(false);

  const animationMap = {
    top: isClosing ? 'animate-hover-card-out-top' : 'animate-hover-card-top',

    bottom: isClosing
      ? 'animate-hover-card-out-bottom'
      : 'animate-hover-card-bottom',

    left: isClosing ? 'animate-hover-card-out-left' : 'animate-hover-card-left',

    right: isClosing
      ? 'animate-hover-card-out-right'
      : 'animate-hover-card-right',
  };

  const animationClass = animationMap[side];

  const sideClasses = {
    top: 'bottom-full left-1/2 mb-3 -translate-x-1/2',

    bottom: 'top-full left-1/2 mt-3 -translate-x-1/2',

    left: 'right-full top-1/2 mr-3 -translate-y-1/2',

    right: 'left-full top-1/2 ml-3 -translate-y-1/2',
  };
  const sizeClasses = {
    sm: 'min-w-[180px] p-3',

    md: 'min-w-[220px] p-4',

    lg: 'min-w-[280px] p-5',
  };

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setIsClosing(false);
    } else {
      setIsClosing(true);

      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 200);

      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!shouldRender) return null;

  return (
    <div
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}
      className={cn(
        'absolute z-50',

        sideClasses[side],

        sizeClasses[size],

        'rounded-2xl',
        'border border-black/10 dark:border-white/10',

        'bg-white/70 dark:bg-zinc-900/70 backdrop-blur-2xl',

        'shadow-[0_8px_20px_rgba(0,0,0,0.5)]',

        animationClass,

        className
      )}
    >
      {/* Glossy Inner Border */}
      <div className="pointer-events-none absolute inset-0 z-10 rounded-2xl border border-white/40 dark:border-white/10" />

      {/* Content */}
      <div className="relative z-20">{children}</div>
    </div>
  );
};

HoverCardContent.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  side: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),

  children: PropTypes.node,

  className: PropTypes.string,
};
