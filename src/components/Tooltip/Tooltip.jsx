import { createContext, useContext, useState } from 'react';

import PropTypes from 'prop-types';
import { cn } from '../../utils/cn';

const TooltipContext = createContext();

const triggerVariants = {
  default: 'border border-zinc-300 bg-white text-zinc-900 hover:bg-zinc-100',

  dark: 'bg-zinc-900 text-white hover:bg-zinc-800',

  outline:
    'border border-zinc-800 bg-transparent text-zinc-900 hover:bg-zinc-100',

  ghost: 'bg-transparent text-zinc-900 hover:bg-zinc-100',
};

const contentVariants = {
  top: `
      left-1/2
      -translate-x-1/2
      -top-10
    `,

  bottom: `
      left-1/2
      -translate-x-1/2
      top-11
    `,

  left: `
      right-full
      top-1/2
      -translate-y-1/2
      mr-3
    `,

  right: `
      left-full
      top-1/2
      -translate-y-1/2
      ml-3
    `,
};

const arrowVariants = {
  top: `
      left-1/2
      -translate-x-1/2
      top-full
      border-t-zinc-900
    `,

  bottom: `
      left-1/2
      -translate-x-1/2
      bottom-full
      border-b-zinc-900
    `,

  left: `
      left-full
      top-1/2
      -translate-y-1/2
      border-l-zinc-900
    `,

  right: `
      right-full
      top-1/2
      -translate-y-1/2
      border-r-zinc-900
    `,
};

export const Tooltip = ({ children }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <TooltipContext.Provider
      value={{
        isHover,
        setIsHover,
      }}
    >
      <div
        className="relative inline-block w-fit"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {children}
      </div>
    </TooltipContext.Provider>
  );
};

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
};

export const TooltipTrigger = ({
  children,
  variant = 'default',
  className,
}) => {
  return (
    <button
      className={cn(
        `
            rounded-md
            px-3
            py-1.5
            text-sm
            transition-colors
            duration-200
            outline-none
            focus-visible:ring-2
            focus-visible:ring-zinc-400
          `,
        triggerVariants[variant],
        className
      )}
    >
      {children}
    </button>
  );
};

TooltipTrigger.propTypes = {
  children: PropTypes.node.isRequired,

  variant: PropTypes.oneOf(['default', 'dark', 'outline', 'ghost']),

  className: PropTypes.string,
};

export const TooltipContent = ({ children, side = 'top', className }) => {
  const { isHover } = useContext(TooltipContext);

  if (!isHover) return null;

  return (
    <div
      role="tooltip"
      className={cn(
        `
            absolute
            z-50
            whitespace-nowrap
            rounded-md
            bg-zinc-900
            px-3
            py-1.5
            text-xs
            text-white
            shadow-lg
            transition-all
            duration-200
          `,
        contentVariants[side],
        className
      )}
    >
      {children}

      <div
        className={cn(
          `
              absolute
              border-8
              border-transparent
            `,
          arrowVariants[side]
        )}
      />
    </div>
  );
};

TooltipContent.propTypes = {
  children: PropTypes.node.isRequired,

  side: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),

  className: PropTypes.string,
};
