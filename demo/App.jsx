import { Button } from '../src';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '../src/components/Tooltip/Tooltip';
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from '../src';
import { useEffect, useState } from 'react';

function App(){
  const [darkMode, setDarkMode] =
  useState(false);
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

  return (
    <div className="min-h-screen transition-colors duration-300 bg-white dark:bg-zinc-950 text-black dark:text-white">
    <div className="max-w-7xl mx-auto p-8 bg-white dark:bg-zinc-950 text-black dark:text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-primary-600">
        UI Library Demo
      </h1>
      <button
  onClick={() =>
  {
    console.log('Dark mode toggled'),
    setDarkMode(!darkMode)
  }
  }
  className="mb-8 rounded-xl border border-black/10 dark:border-white/10 px-4 py-2"
>
  Toggle Theme
</button>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Buttons</h2>
        <div className="flex gap-4 flex-wrap items-center mb-6">
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Button variant="ghost">Ghost Button</Button>
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
          <Button disabled>Disabled Button</Button>
        </div>
      </section>
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



    </div>
    </div>
  );
}

export default App;
