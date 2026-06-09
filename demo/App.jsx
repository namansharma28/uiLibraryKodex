import {
  Button,
  Toast,
  ToastContainer,
  useToast,
  AspectRatio,
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
  Progress,
  Separator,
  Breadcrumb,
} from '../src';

import { 
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '../src/components/Tooltip/Tooltip';
import { useEffect, useState } from 'react';

function App(){
  const [darkMode, setDarkMode] =
  useState(false);
  const [progressValue, setProgressValue] = useState(40);
  useEffect(() => {
  if (darkMode) {
    document.documentElement.classList.add(
      'dark'
    );
  } else {
    document.documentElement.classList.remove(
      'dark'
    );
  }
}, [darkMode]);

  const {
    toasts,
    showToast,
    removeToast,
    showPromiseToast,
  } = useToast();

  return (
    <div className="min-h-screen transition-colors duration-300 bg-white dark:bg-zinc-950 text-black dark:text-white">
    <div className="max-w-7xl mx-auto p-8 bg-white dark:bg-zinc-950 text-black dark:text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-primary-600">
        UI Library Demo
      </h1>
     <button
  onClick={() => setDarkMode(!darkMode)}
  className="
    fixed
    top-4
    right-4
    z-50
    rounded-xl
    border
    border-black/50
    dark:border-white/50
    bg-white
    dark:bg-zinc-900
    px-4
    py-2
    shadow-lg
    transition-all
    duration-200
    hover:scale-105
  "
>
  {darkMode ? 'Light' : 'Dark'}
</button>

      {/* ─── Buttons ───────────────────────────────────────────────── */}
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

      {/* Aspect Ratio */}
      <section className="mb-12">
        <h1 className="text-3xl font-semibold mb-4">Aspect Ratio</h1>
        
        <div className="flex gap-6 flex-wrap">
          <div className="flex items-center flex-col">
          <AspectRatio ratio={16 / 9}>
            <img
              src="https://images.unsplash.com/photo-1773332611516-93826171cef2?q=80&w=687&auto=format&fit=crop"
              alt="Photo"
              className="h-full w-full object-cover rounded-lg"
            />
          </AspectRatio>
          <h3 className="text-lg font-medium mt-6 mb-3 text-gray-600">Widescreen Aspect Ratio(Youtube)</h3>
        </div>
        
        <div className="flex items-center flex-col">
          <AspectRatio ratio={1 / 1}>
            <img
              src="https://images.unsplash.com/photo-1773332611516-93826171cef2?q=80&w=687&auto=format&fit=crop"
              alt="Photo"
              className="h-full w-full object-cover rounded-lg"
            />
          </AspectRatio>
          <h3 className="text-lg font-medium mt-6 mb-3 text-gray-600">Square Aspect Ratio(Instagram Post)</h3>
        </div>
        
        
        <div className="flex items-center flex-col">
          <AspectRatio ratio={4 / 3}>
            <img
              src="https://images.unsplash.com/photo-1773332611516-93826171cef2?q=80&w=687&auto=format&fit=crop"
              alt="Photo"
              className="h-full w-full object-cover rounded-lg"
            />
          </AspectRatio>
          <h3 className="text-lg font-medium mt-6 mb-3 text-gray-600">Standard / Fullscreen Aspect Ratio</h3>
        </div>
        
        <div className="flex items-center flex-col">
          <AspectRatio ratio={9 / 16}>
            <img
              src="https://images.unsplash.com/photo-1773332611516-93826171cef2?q=80&w=687&auto=format&fit=crop"
              alt="Photo"
              className="h-full w-full object-cover rounded-lg"
            />
          </AspectRatio>
          <h3 className="text-lg font-medium mt-6 mb-3 text-gray-600">Vertical / Portrait Aspect Ratio</h3>
        </div>
        
        <div className="flex items-center flex-col">
          <AspectRatio ratio={21 / 9}>
            <img
              src="https://images.unsplash.com/photo-1773332611516-93826171cef2?q=80&w=687&auto=format&fit=crop"
              alt="Photo"
              className="h-full w-full object-cover rounded-lg"
            />
          </AspectRatio>
          <h3 className="text-lg font-medium mt-6 mb-3 text-gray-600">Ultrawide Aspect Ratio</h3>
        </div>

        
        <div className="flex items-center flex-col">
          <AspectRatio ratio={3 / 2}>
            <img
              src="https://images.unsplash.com/photo-1773332611516-93826171cef2?q=80&w=687&auto=format&fit=crop"
              alt="Photo"
              className="h-full w-full object-cover rounded-lg"
            />
          </AspectRatio>
          <h3 className="text-lg font-medium mt-6 mb-3 text-gray-600">Classic Photography Aspect Ratio</h3>
        </div>
        
        <div className="flex items-center flex-col">
          <AspectRatio ratio={5 / 4}>
            <img
              src="https://images.unsplash.com/photo-1773332611516-93826171cef2?q=80&w=687&auto=format&fit=crop"
              alt="Photo"
              className="h-full w-full object-cover rounded-lg"
            />
          </AspectRatio>
          <h3 className="text-lg font-medium mt-6 mb-3 text-gray-600">Traditional Monitor Aspect Ratio</h3>
        </div>
        
        <div className="flex items-center flex-col">
          <AspectRatio ratio={2 / 1}>
            <img
              src="https://images.unsplash.com/photo-1773332611516-93826171cef2?q=80&w=687&auto=format&fit=crop"
              alt="Photo"
              className="h-full w-full object-cover rounded-lg"
            />
          </AspectRatio>
          <h3 className="text-lg font-medium mt-6 mb-3 text-gray-600">Univisium Aspect Ratio(Used in some modern cinematic content)</h3>
        </div>
        </div>
      </section>

      {/* ─── Breadcrumb ────────────────────────────────────────────── */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Breadcrumb</h2>

        <h3 className="text-xl font-medium mb-3 text-gray-600">
          Basic Breadcrumb
        </h3>
        <div className="mb-6 p-4 border border-gray-200 rounded-lg">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Products', href: '/products' },
              { label: 'Headphones' },
            ]}
          />
        </div>

        <h3 className="text-xl font-medium mb-3 text-gray-600">
          Custom Separator
        </h3>
        <div className="mb-6 p-4 border border-gray-200 rounded-lg">
          <Breadcrumb
            separator="/"
            items={[
              { label: 'Home', href: '/' },
              { label: 'Documentation', href: '/docs' },
              { label: 'Getting Started' },
            ]}
          />
        </div>

        <h3 className="text-xl font-medium mb-3 text-gray-600">
          Long Path
        </h3>
        <div className="mb-6 p-4 border border-gray-200 rounded-lg">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Dashboard', href: '/dashboard' },
              { label: 'Analytics', href: '/dashboard/analytics' },
              { label: 'Reports', href: '/dashboard/analytics/reports' },
              { label: 'Monthly Summary' },
            ]}
          />
        </div>
      </section>

      {/* TOAST TYPES */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
         Toast Types 
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
         Toast Positions
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




{/* TOOLTIP SECTION */}
      <section>
        <h2 className="text-3xl font-semibold mb-4">Tooltip</h2>
        <div className="flex gap-6">
          <Tooltip>
            <TooltipTrigger variant="default">Hover me</TooltipTrigger>
            <TooltipContent side="bottom">Hello Tooltip</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger variant="dark">Hover me</TooltipTrigger>
            <TooltipContent side="left">Hello Tooltip</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger variant="outline">Hover me</TooltipTrigger>
            <TooltipContent side="right">Hello Tooltip</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger variant="ghost">Hover me</TooltipTrigger>
            <TooltipContent side="top">Hello Tooltip</TooltipContent>
          </Tooltip>

        </div>
      </section>

{/* Progress */}
      <section className="mb-16 mt-10">
  <h2 className="text-3xl font-semibold mb-6">
    Progress
  </h2>

<div className="gap-10 flex-col flex ">
  {/* Default Variant */}

  <div className="max-w-md  space-y-6">
    <h1>Default Progress</h1>

    <Progress
      value={progressValue}
      label="Your Progress..."
  //      striped
  // animated
      status={
        progressValue < 30
          ? 'Starting...'
          : progressValue < 70
          ? 'Updating...'
          : progressValue < 100
          ? 'Almost Done...'
          : 'Completed!'
      }
      timeLeft={
        progressValue < 100
          ? `${100 - progressValue}s left`
          : 'Done'
      }
    />

    <input
      type="range"
      min="0"
      max="100"
      value={progressValue}
      onChange={(e) =>
        setProgressValue(
          Number(e.target.value)
        )
      }
      className="w-full accent-violet-600"
    />

  </div>

  {/* Variant Variants */}
  <div className="space-y-4  ">
    <h1>Variant Progress</h1>

  <Progress
    value={75}
    variant="success"
    status="Completed Successfully"
  />

  <Progress
    value={55}
    variant="warning"
    status="Needs Attention"
  />

  <Progress
    value={30}
    variant="error"
    status="Upload Failed"
  />

  <Progress
    value={85}
    variant="gradient"
    status="Processing..."
  />

</div>

{/* Size Variants */}
<div className="space-y-4">
    <h1>Size Variants</h1>

  <Progress
    value={40}
    size="sm"
    status="Small Progress"
  />

  <Progress
    value={60}
    size="md"
    status="Medium Progress"
  />

  <Progress
    value={80}
    size="lg"
    status="Large Progress"
  />

</div>

{/* Striped and Animated Variants */}
<div className="space-y-4">
    <h1>Striped and Animated Progress</h1>

  <Progress
  value={70}
  variant="gradient"
  striped
  animated
  status="Processing..."
  label="Animated Progress"
/>

</div>

</div>
</section>

      {/* HoverCard */}
      <section className="mb-16 mt-10  ">
  <h2 className="text-3xl font-semibold mb-6">
    Hover Card
  </h2>

<div className="flex-col gap-10  items-center flex-wrap">

{/* SIDES */}

    <h1 className='font-semibold text-xl mb-1' >Card Sides</h1>
<div className="flex gap-4 flex-wrap items-center mb-6"> 
  
  {/* TOP */}
  <HoverCard>
    <HoverCardTrigger>
      <button className="px-4 py-2 bg-black text-white rounded-xl">
        Top
      </button>
    </HoverCardTrigger>

    <HoverCardContent side="top">
      Top Hover Card
    </HoverCardContent>
  </HoverCard>

  {/* BOTTOM */}
  <HoverCard>
    <HoverCardTrigger>
      <button className="px-4 py-2 bg-black text-white rounded-xl">
        Bottom
      </button>
    </HoverCardTrigger>

    <HoverCardContent side="bottom">
      Bottom Hover Card
    </HoverCardContent>
  </HoverCard>

  {/* LEFT */}
  <HoverCard>
    <HoverCardTrigger>
      <button className="px-4 py-2 bg-black text-white rounded-xl">
        Left
      </button>
    </HoverCardTrigger>

    <HoverCardContent side="left">
      Left Hover Card
    </HoverCardContent>
  </HoverCard>

  {/* RIGHT */}
  <HoverCard>
    <HoverCardTrigger>
      <button className="px-4 py-2 bg-black text-white rounded-xl">
        Right
      </button>
    </HoverCardTrigger>

    <HoverCardContent side="right">
      Right Hover Card
    </HoverCardContent>
  </HoverCard> </div>



{/* sizes */}
<h1 className='font-semibold text-xl mb-1' >Card Sizes</h1>
<div className="flex gap-4 flex-wrap items-center mb-6">
  {/* SMALL */}
  <HoverCard>
    <HoverCardTrigger>
      <button className="px-4 py-2 bg-black text-white rounded-xl">
        Small
      </button>
    </HoverCardTrigger>

    <HoverCardContent
      side="top"
      size="sm"
    >
      Small Hover Card
    </HoverCardContent>
  </HoverCard>

  {/* MEDIUM */}
  <HoverCard>
    <HoverCardTrigger>
      <button className="px-4 py-2 bg-black text-white rounded-xl">
        Medium
      </button>
    </HoverCardTrigger>

    <HoverCardContent
      side="top"
      size="md"
    >
      Medium Hover Card
    </HoverCardContent>
  </HoverCard>

  {/* LARGE */}
  <HoverCard>
    <HoverCardTrigger>
      <button className="px-4 py-2 bg-black text-white rounded-xl">
        Large
      </button>
    </HoverCardTrigger>

    <HoverCardContent
      side="top"
      size="lg"
    >
      Large Hover Card
    </HoverCardContent>
  </HoverCard>

  </div>

</div>
</section>




{/* Separator */}
  <section className="mb-16 mt-10">
  <h2 className="text-3xl font-semibold mb-6">
    Separator
  </h2>

  <div className="space-y-4 max-w-md">
    <p>Above Separator</p>

    <Separator />

    <p>Below Separator</p>
  </div>

  <div className="flex h-20 items-center gap-4 mt-8">
    <span>Profile</span>

    <Separator orientation="vertical" />

    <span>Settings</span>

    <Separator orientation="vertical" />

    <span>Logout</span>
  </div>
  
</section>



    </div>
    

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