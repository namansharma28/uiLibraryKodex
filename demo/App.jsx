import {
  Button,
} from '../src';
import { AspectRatio } from "../src";

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
      
      {/* Aspect Ratio */}
      <section>
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
    </div>
  );
}

export default App;
