import { cn } from '@utils/cn';
import PropTypes from 'prop-types';

export const Separator = ({
  orientation = 'horizontal',
  className,
}) => {
  return (
    <div
      role="separator"
      className={cn(
        'shrink-0 bg-zinc-200 dark:bg-zinc-700',

        orientation === 'horizontal'
          ? 'h-px w-full'
          : 'h-full w-px',

        className
      )}
    />
  );
};

Separator.propTypes = {
  orientation: PropTypes.oneOf([
    'horizontal',
    'vertical',
  ]),
  className: PropTypes.string,
};

