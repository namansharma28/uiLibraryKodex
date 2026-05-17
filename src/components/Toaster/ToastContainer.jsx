import { cn } from '@utils/cn';
import PropTypes from 'prop-types';

const positions = {
  'top-right': 'top-5 right-5',
  'top-left': 'top-5 left-5',
  'bottom-right': 'bottom-5 right-5',
  'bottom-left': 'bottom-5 left-5',
  'top-center':
    'top-5 left-1/2 -translate-x-1/2',
  'bottom-center':
    'bottom-5 left-1/2 -translate-x-1/2',
};

export const ToastContainer = ({
  children,
  position = 'top-right',
}) => {
  return (
    <div
      className={cn(
        'fixed z-50 flex flex-col gap-3',
        positions[position]
      )}
    >
      {children}
    </div>
  );
};

ToastContainer.propTypes = {
  children: PropTypes.node,
  position: PropTypes.oneOf([
    'top-right',
    'top-left',
    'bottom-right',
    'bottom-left',
    'top-center',
    'bottom-center',
  ]),
};