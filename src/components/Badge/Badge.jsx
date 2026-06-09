import { cn } from '@utils/cn';
import PropTypes from 'prop-types';

/**
 * Badge - A small visual indicator for status, categories, or labels.
 * Extends standard Shadcn Badge designs with dots, custom shapes, and micro-interactions.
 *
 * @example
 * <Badge variant="primary" dot dotPulse>New Feature</Badge>
 */
export const Badge = ({
  children,
  variant = 'default',
  size = 'md',
  pill = true,
  dot = false,
  dotPulse = false,
  interactive = false,
  className,
  ...props
}) => {
  const baseStyles = cn(
    'inline-flex items-center justify-center font-semibold border transition-all duration-200 select-none outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
    pill ? 'rounded-full' : 'rounded-md',
    interactive && 'cursor-pointer hover:scale-[1.05] active:scale-[0.98]'
  );

  const variants = {
    default:
      'bg-zinc-100 text-zinc-900 border-zinc-200 hover:bg-zinc-200/80 dark:bg-zinc-800 dark:text-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-700/80',
    primary:
      'bg-primary-500/10 text-primary-700 border-primary-500/20 hover:bg-primary-500/20 dark:bg-primary-500/20 dark:text-primary-300 dark:border-primary-500/30 dark:hover:bg-primary-500/30',
    secondary:
      'bg-secondary-500/10 text-secondary-700 border-secondary-500/20 hover:bg-secondary-500/20 dark:bg-secondary-500/20 dark:text-secondary-300 dark:border-secondary-500/30 dark:hover:bg-secondary-500/30',
    success:
      'bg-emerald-500/10 text-emerald-700 border-emerald-500/20 hover:bg-emerald-500/20 dark:bg-emerald-500/20 dark:text-emerald-300 dark:border-emerald-500/30 dark:hover:bg-emerald-500/30',
    warning:
      'bg-amber-500/10 text-amber-700 border-amber-500/20 hover:bg-amber-500/20 dark:bg-amber-500/20 dark:text-amber-300 dark:border-amber-500/30 dark:hover:bg-amber-500/30',
    destructive:
      'bg-rose-500/10 text-rose-700 border-rose-500/20 hover:bg-rose-500/20 dark:bg-rose-500/20 dark:text-rose-300 dark:border-rose-500/30 dark:hover:bg-rose-500/30',
    outline:
      'bg-transparent text-zinc-600 border-zinc-300 hover:bg-zinc-50 dark:text-zinc-400 dark:border-zinc-700 dark:hover:bg-zinc-900/50',
    gradient:
      'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white border-transparent shadow-sm hover:opacity-95',
  };

  const sizes = {
    sm: 'h-5 px-2 text-[10px] gap-1 font-medium',
    md: 'h-6 px-2.5 text-xs gap-1.5 font-medium',
    lg: 'h-7 px-3 text-sm gap-2 font-medium',
  };

  const dotColorMap = {
    default: 'bg-zinc-500',
    primary: 'bg-primary-500',
    secondary: 'bg-secondary-500',
    success: 'bg-emerald-500',
    warning: 'bg-amber-500',
    destructive: 'bg-rose-500',
    outline: 'bg-zinc-400',
    gradient: 'bg-white',
  };

  return (
    <span
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {dot && (
        <span className="relative flex h-1.5 w-1.5 shrink-0">
          {dotPulse && (
            <span
              className={cn(
                'absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping',
                dotColorMap[variant] || 'bg-zinc-500'
              )}
            />
          )}
          <span
            className={cn(
              'relative inline-flex h-1.5 w-1.5 rounded-full',
              dotColorMap[variant] || 'bg-zinc-500'
            )}
          />
        </span>
      )}
      {children}
    </span>
  );
};

Badge.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf([
    'default',
    'primary',
    'secondary',
    'success',
    'warning',
    'destructive',
    'outline',
    'gradient',
  ]),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  pill: PropTypes.bool,
  dot: PropTypes.bool,
  dotPulse: PropTypes.bool,
  interactive: PropTypes.bool,
  className: PropTypes.string,
};
