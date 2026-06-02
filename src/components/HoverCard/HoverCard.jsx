import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const HoverCardContext = createContext();

export const useHoverCard = () =>
  useContext(HoverCardContext);

export const HoverCard = ({
  children,
  openDelay = 150,
  closeDelay = 150,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  let openTimeout;
  let closeTimeout;

  const handleOpen = () => {
    clearTimeout(closeTimeout);

    openTimeout = setTimeout(() => {
      setIsOpen(true);
    }, openDelay);
  };

  const handleClose = () => {
    clearTimeout(openTimeout);

    closeTimeout = setTimeout(() => {
      setIsOpen(false);
    }, closeDelay);
  };

  return (
    <HoverCardContext.Provider
      value={{
        isOpen,
        handleOpen,
        handleClose,
      }}
    >
      <div className="relative inline-block">
        {children}
      </div>
    </HoverCardContext.Provider>
  );
};

HoverCard.propTypes = {
  children: PropTypes.node,
  openDelay: PropTypes.number,
  closeDelay: PropTypes.number,
};