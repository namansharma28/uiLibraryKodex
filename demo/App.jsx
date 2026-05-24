import { Button } from '../src';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '../src/components/Tooltip/Tooltip';

function App() {
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
    </div>
  );
}

export default App;
