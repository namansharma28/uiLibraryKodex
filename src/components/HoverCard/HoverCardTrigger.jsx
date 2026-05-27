import PropTypes from 'prop-types';
import { useHoverCard } from './HoverCard';

export const HoverCardTrigger = ({
  children,
}) => {
  const {
    handleOpen,
    handleClose,
  } = useHoverCard();

  return (
    <div
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}
      className="inline-block"
    >
      {children}
    </div>
  );
};

HoverCardTrigger.propTypes = {
  children: PropTypes.node,
};