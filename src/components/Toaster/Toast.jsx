import { useEffect, useState } from 'react';
import { cn } from '@utils/cn';
import PropTypes from 'prop-types';

import {
  CheckCircle2,
  InfoIcon,
  AlertTriangle,
  XCircle,
  Loader2,
} from 'lucide-react';

const variants = {
  default:
    'bg-zinc-900/15 text-black backdrop-blur-xl border border-gray-400/30',

  success:
    'bg-emerald-500/15 text-black backdrop-blur-xl border border-emerald-400/30',

  error:
    'bg-red-500/15 text-black backdrop-blur-xl border border-red-400/30',

  warning:
    'bg-yellow-500/15 text-black backdrop-blur-xl border border-yellow-400/30',

  info:
    'bg-blue-500/15 text-black backdrop-blur-xl border border-blue-400/30',

  promise:
    'bg-purple-500/15 text-black backdrop-blur-xl border border-purple-400/30',
};

const icons = {
  success: CheckCircle2,
  info: InfoIcon,
  warning: AlertTriangle,
  error: XCircle,
  promise: Loader2,
};

export const Toast = ({
  title,
  description,
  variant = 'default',
  className,
  toastId,
  removeToast,
  duration = 4000,
  position,
}) => {
  const [isClosing, setIsClosing] =
    useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsClosing(true);

      setTimeout(() => {
        removeToast(toastId);
      }, 200);
    }, duration);

    return () => clearTimeout(timer);
  }, []);

  const animationClass = isClosing
    ? 'animate-toast-out'
    : position?.includes('bottom')
    ? 'animate-toast-in-bottom'
    : 'animate-toast-in-top';

  const Icon = icons[variant];

  return (
    <div
      className={cn(
        'relative min-w-[340px] rounded-2xl px-5 py-4 shadow-xl overflow-hidden',
        'flex flex-col gap-3',
        `transition-all duration-300 ${animationClass}`,
        variants[variant],
        className
      )}
    >
      {/* CONTENT */}
      <div className="flex gap-3 items-start">
        {Icon && (
          <div className="mt-1 flex items-center justify-center">
            <Icon
              className={cn(
                'w-5 h-5 shrink-0',

                variant === 'success' &&
                  'text-emerald-600',

                variant === 'info' &&
                  'text-blue-600',

                variant === 'warning' &&
                  'text-yellow-600',

                variant === 'error' &&
                  'text-red-600',

                variant === 'promise' &&
                  'text-purple-600 animate-spin'
              )}
            />
          </div>
        )}

        <div className="flex-1">
          <h3 className="font-semibold text-black">
            {title}
          </h3>

          {description && (
            <p className="text-sm text-black/70">
              {description}
            </p>
          )}
        </div>
      </div>

      {/* PROGRESS BAR */}
      <div className="h-1 w-full overflow-hidden rounded-full bg-black/10">
        <div
          className="h-full bg-black/50 animate-progress rounded-full"
          style={{
            animationDuration: `${duration}ms`,
          }}
        />
      </div>

      {/* CLOSE BUTTON */}
      <button
        onClick={() => {
          setIsClosing(true);

          setTimeout(() => {
            removeToast(toastId);
          }, 200);
        }}
        className="absolute top-2 right-3 text-lg opacity-60 hover:opacity-100 transition-opacity"
      >
        ×
      </button>
    </div>
  );
};

Toast.propTypes = {
  position: PropTypes.string,
  duration: PropTypes.number,

  toastId: PropTypes.string,
  removeToast: PropTypes.func,

  title: PropTypes.string.isRequired,
  description: PropTypes.string,

  variant: PropTypes.oneOf([
    'default',
    'success',
    'error',
    'warning',
    'info',
    'promise',
  ]),

  className: PropTypes.string,
};