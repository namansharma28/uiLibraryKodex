import { cn } from '@utils/cn';
import PropTypes from 'prop-types';

export const ScrollArea = ({
  children,
  className,
    orientation = 'vertical',
}) => {
  return (
    <div
  className={cn(
    
    'overflow-hidden rounded-xl ',
    className
  )}
>
  <div
  className={cn(
    'h-full',

    orientation === 'vertical'
      ? 'overflow-y-auto overflow-x-hidden'
      : 'overflow-x-auto overflow-y-hidden',

    '[&::-webkit-scrollbar]:h-2',
    '[&::-webkit-scrollbar]:w-2',

    '[&::-webkit-scrollbar-track]:bg-transparent',

    '[&::-webkit-scrollbar-thumb]:rounded-full',
    '[&::-webkit-scrollbar-thumb]:bg-zinc-300',

    'dark:[&::-webkit-scrollbar-thumb]:bg-zinc-700'
  )}
>
    {children}
  </div>
</div>
     
  );
};

ScrollArea.propTypes = {
    orientation: PropTypes.oneOf([
  'vertical',
  'horizontal',
]),
  children: PropTypes.node,
  className: PropTypes.string,
};