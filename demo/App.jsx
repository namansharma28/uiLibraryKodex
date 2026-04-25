import {
  Button,
} from '../src';

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

      </section>
    </div>
  );
}

export default App;
