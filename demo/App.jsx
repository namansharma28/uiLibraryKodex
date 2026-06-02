import { Button } from '../src';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '../src/components/Tooltip/Tooltip';
import { Progress } from '../src';
import { useState } from 'react';

function App() {
  const [progressValue, setProgressValue] =
  useState(50);
  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-primary-600">
        UI Library Demo
      </h1>

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
    </div>
  );
}

export default App;
