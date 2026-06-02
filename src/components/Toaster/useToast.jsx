import { useState } from 'react';

export const useToast = () => {
  const [toasts, setToasts] = useState([]);

  const showToast = ({
    title,
    description,
    variant,
    toastPosition,
    duration = 3000,
  }) => {
    const newToast = {
      id: crypto.randomUUID(),
      title,
      description,
      variant,
      position: toastPosition,
      duration,
    };

    setToasts((prev) => [...prev, newToast]);
  };
  const showPromiseToast = () => {
  const id = crypto.randomUUID();

  const loadingToast = {
    id,
    title: 'Loading...',
    description: 'Please wait',
    variant: 'promise',
    position: 'top-right',
    duration: 3000,
  };

  setToasts((prev) => [
    ...prev,
    loadingToast,
  ]);

  setTimeout(() => {
    setToasts((prev) =>
      prev.map((toast) =>
        toast.id === id
          ? {
              ...toast,
              title: 'Success',
              description:
                'Promise resolved successfully',
              variant: 'success',
            }
          : toast
      )
    );
  }, 1500);
};

  const removeToast = (id) => {
    setToasts((prev) =>
      prev.filter((toast) => toast.id !== id)
    );
  };

  return {
    toasts,
    showToast,
    removeToast,
    showPromiseToast,
  };
};