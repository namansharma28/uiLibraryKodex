import { cn } from '@utils/cn';
import PropTypes from 'prop-types';

export const Progress = ({
  value = 0,
  label = 'Processing...',
  status = 'Updating...',
  timeLeft,
  showValue = true,
    size = 'md',
   variant = 'default',

  striped = false,
  animated = false,

  className,
}) => {
    const variants = {
  default:
    'bg-violet-600',

  success:
    'bg-emerald-500',

  warning:
    'bg-yellow-500',

  error:
    'bg-red-500',

  gradient:
    'bg-gradient-to-r from-violet-500 to-fuchsia-500',
};
const sizeClasses = {
  sm: 'h-2',

  md: 'h-3',

  lg: 'h-5',
};
  return (
    <div
      className={cn(
        'w-full max-w-md space-y-3 rounded-2xl border border-black/10 bg-white p-5 shadow-lg',
        className
      )}
    >
      {/* TOP */}
      <div className="flex items-center justify-between">
        
        <h3 className="text-sm font-medium text-black/70">
          {label}
        </h3>

        {showValue && (
          <div className="rounded-md bg-zinc-800 px-2 py-1 text-xs font-semibold text-white">
            {value}%
          </div>
        )}
      </div>

      {/* BAR */}
      <div className={cn(
  'w-full overflow-hidden rounded-full bg-zinc-200',
  sizeClasses[size]
)}>
        
<div
  className={cn(
    'relative h-full overflow-hidden rounded-full transition-all duration-500',

    variants[variant]
  )}
  style={{
    width: `${value}%`,
  }}
>
  {striped && (
    <div
      className={cn(
        'absolute inset-0',

        'bg-[linear-gradient(45deg,rgba(255,255,255,0.35)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.35)_50%,rgba(255,255,255,0.35)_75%,transparent_75%,transparent)]',

        'bg-[length:1rem_1rem]',

        animated &&
          'animate-progress-stripes'
      )}
    />
  )}
</div>
      </div>

      {/* FOOTER */}
      <div className="flex items-center justify-between text-sm">
        
        <p className="text-black/60">
          {status}
        </p>

        {timeLeft && (
          <span className="text-black/50">
            {timeLeft}
          </span>
        )}
      </div>
    </div>
  );
};

Progress.propTypes = {

    variant: PropTypes.oneOf([
  'default',
  'success',
  'warning',
  'error',
  'gradient',
]),

size: PropTypes.oneOf([
  'sm',
  'md',
  'lg',
]),


  value: PropTypes.number,

  label: PropTypes.string,

  status: PropTypes.string,

  timeLeft: PropTypes.string,

  showValue: PropTypes.bool,

  striped: PropTypes.bool,
animated: PropTypes.bool,
  className: PropTypes.string,
};