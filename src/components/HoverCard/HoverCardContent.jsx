import { cn } from '@utils/cn';
import PropTypes from 'prop-types';
import { useHoverCard } from './HoverCard';

export const HoverCardContent = ({
  children,
  className,
  side = 'top',
}) => {
  const {
    isOpen,
    handleOpen,
    handleClose,
  } = useHoverCard();

  if (!isOpen) return null;
const sideClasses = {
  top:
    'bottom-full left-1/2 mb-3 -translate-x-1/2',

  bottom:
    'top-full left-1/2 mt-3 -translate-x-1/2',

  left:
    'right-full top-1/2 mr-3 -translate-y-1/2',

  right:
    'left-full top-1/2 ml-3 -translate-y-1/2',
};


  return (
    <div
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}
      className={cn(
        'absolute z-50',
sideClasses[side],
        'min-w-[220px]',
        'rounded-2xl border border-white/20',
        'bg-white/10 backdrop-blur-xl',
        'p-4 shadow-2xl',
        'animate-hover-card',
        className
      )}
    >

      {children}
    </div>
  );
};

HoverCardContent.propTypes = {
    side: PropTypes.oneOf([
  'top',
  'bottom',
  'left',
  'right',
]),
  children: PropTypes.node,
  className: PropTypes.string,
};