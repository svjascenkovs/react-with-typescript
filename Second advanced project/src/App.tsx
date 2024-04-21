import Input from "./components/Input";
import InputWithRef from "./components/InputWithRef";
import Button from "./components/Button";
import Container from "./components/Container";
import { useRef } from "react";
import Form, { type FormHandle } from "./components/Form";

function App() {
  const input = useRef<HTMLInputElement>(null);

  const customForm = useRef<FormHandle>(null);
  function handleSave(data: unknown) {
    const extractedData = data as { name: string; age: string };
    console.log(extractedData);
    customForm.current?.clear();
  }

  return (
    <main>
      <p>
        <Button el="button">A button</Button>
      </p>
      <p>
        <Button el="anchor" href="http://google.com">
          A link
        </Button>
      </p>
      <Input label="Your name" id="name" type="text" />
      <InputWithRef label="Your surname" id="surname" type="text" ref={input} />
      <Container as={Button} onClick={() => {}} type="button">
        Click me
      </Container>
      <h1>Form</h1>
      <Form onSave={handleSave} ref={customForm}>
        <Input type="text" label="Name" id="name" />
        <Input type="number" label="Age" id="age" />
        <p>
          <Button>Save</Button>
        </p>
      </Form>
    </main>
  );
}

export default App;

// Cits veids, neizmantojot "as"

// function handleSave(data: unknown) {
//   if (
//     !data ||
//     typeof data !== 'object' ||
//     !('name' in data) ||
//     !('age' in data)
//   ) {
//       return;
//   }

//   // at this point, TypeScript knows that data MUST BE an object
//   // with a name and age property
//   // otherwise, the previous if statement would have returned
//   console.log(data);
//   customForm.current?.clear();
// }
