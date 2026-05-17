import {
  Button,
  Toast,
  ToastContainer,
  useToast,
} from '../src';

function App() {
  const {
    toasts,
    showToast,
    removeToast,
    showPromiseToast,
  } = useToast();

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-primary-600">
        UI Library Demo
      </h1>

      {/* BUTTONS SECTION */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">
          Buttons
        </h2>

        <div className="flex gap-4 flex-wrap items-center mb-6">
          <Button variant="primary">
            Primary Button
          </Button>

          <Button variant="secondary">
            Secondary Button
          </Button>

          <Button variant="outline">
            Outline Button
          </Button>

          <Button variant="ghost">
            Ghost Button
          </Button>
        </div>

        <h3 className="text-xl font-medium mt-6 mb-3 text-gray-600">
          Button Sizes
        </h3>

        <div className="flex gap-4 flex-wrap items-center mb-6">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>

        <h3 className="text-xl font-medium mt-6 mb-3 text-gray-600">
          Disabled State
        </h3>

        <div className="flex gap-4 flex-wrap items-center">
          <Button disabled>
            Disabled Button
          </Button>
        </div>
      </section>

      {/* TOAST TYPES */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          Types
        </h2>

        <div className="flex gap-4 flex-wrap">
          <button
            onClick={() =>
              showToast({
                title: 'Default Toast',
                description:
                  'This is a default toast',
                variant: 'default',
                toastPosition: 'top-right',
              })
            }
            className="border px-4 py-2 rounded-lg"
          >
            Default
          </button>

          <button
            onClick={() =>
              showToast({
                title: 'Success Toast',
                description:
                  'Operation completed successfully',
                variant: 'success',
                toastPosition: 'top-right',
              })
            }
            className="bg-green-500 text-white px-4 py-2 rounded-lg"
          >
            Success
          </button>

          <button
            onClick={() =>
              showToast({
                title: 'Info Toast',
                description:
                  'This is an informational toast',
                variant: 'info',
                toastPosition: 'top-right',
              })
            }
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Info
          </button>

          <button
            onClick={() =>
              showToast({
                title: 'Warning Toast',
                description:
                  'Please check your inputs',
                variant: 'warning',
                toastPosition: 'top-right',
              })
            }
            className="bg-yellow-400 text-black px-4 py-2 rounded-lg"
          >
            Warning
          </button>

          <button
            onClick={() =>
              showToast({
                title: 'Error Toast',
                description:
                  'Something went wrong',
                variant: 'error',
                toastPosition: 'top-right',
              })
            }
            className="bg-red-500 text-white px-4 py-2 rounded-lg"
          >
            Error
          </button>

          <button
            onClick={showPromiseToast}
            className="bg-purple-500 text-white px-4 py-2 rounded-lg"
          >
            Promise
          </button>
        </div>
      </section>

      {/* POSITION SECTION */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">
          Position
        </h2>

        <div className="flex gap-4 flex-wrap">
          {[
            'top-left',
            'top-center',
            'top-right',
            'bottom-left',
            'bottom-center',
            'bottom-right',
          ].map((pos) => (
            <button
              key={pos}
              onClick={() =>
                showToast({
                  title: 'Info Toast',
                  description: `Toast moved to ${pos}`,
                  variant: 'info',
                  toastPosition: pos,
                })
              }
              className="border px-4 py-2 rounded-lg capitalize"
            >
              {pos.replace('-', ' ')}
            </button>
          ))}
        </div>
      </section>

      {/* TOAST CONTAINERS */}
      {[
        'top-right',
        'top-left',
        'top-center',
        'bottom-right',
        'bottom-left',
        'bottom-center',
      ].map((pos) => (
        <ToastContainer
          key={pos}
          position={pos}
        >
          {toasts
            .filter(
              (toast) => toast.position === pos
            )
            .map((toast) => (
              <Toast
                key={toast.id}
                toastId={toast.id}
                removeToast={removeToast}
                title={toast.title}
                description={toast.description}
                variant={toast.variant}
                duration={toast.duration}
                position={toast.position}
              />
            ))}
        </ToastContainer>
      ))}
    </div>
  );
}

export default App;