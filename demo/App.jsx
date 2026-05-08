import {
  Button,
} from '../src';
import { Accordion, AccordionContent, AccordionItem, AccordionTitle } from '../src/components/Accordion';

function App() {

  const accordionData = [
    {
      id: 1,
      title: "What is React?",
      content:
        "React is a JavaScript library used to build fast and interactive user interfaces.",
    },
    {
      id: 2,
      title: "What is Tailwind CSS?",
      content:
        "Tailwind CSS is a utility-first CSS framework used for rapidly building modern websites.",
    },
    {
      id: 3,
      title: "What is an Accordion?",
      content:
        "An accordion is a UI component that allows users to expand and collapse sections of content.",
    },
  ];

  return (
    <>
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

        <Accordion>
          {accordionData.map(({ id, title, content }) => (
            <AccordionItem key={id} id={id}>
              <AccordionTitle>{title}</AccordionTitle>
              <AccordionContent>{content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
}

export default App;
