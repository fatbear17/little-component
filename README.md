# Little Component

[![npm version](https://img.shields.io/npm/v/little-component.svg)](https://www.npmjs.com/package/little-component)
[![GitHub stars](https://img.shields.io/github/stars/fatbear17/little-component.svg)](https://github.com/fatbear17/little-component)

A small React component to access inner functions or variables of React components from outside.

## Installation

```bash
npm install little-component
```

## Usage

```jsx
import { LittleComponent, executeFunction, waitAndExecuteFunction } from 'little-component';

function MyComponent() {
  const myFunction = () => {
    console.log('Hello from inside the component!');
    return 'result';
  };

  return (
    <LittleComponent id="myComponent" myFunction={myFunction} />
  );
}

// Later, execute the function from outside
executeFunction('myComponent', 'myFunction'); // Logs 'Hello...' and returns 'result'

// Or wait for it to be available
waitAndExecuteFunction('myComponent', 100, 5000, 'myFunction', []);
```

## Props

- `id` (string): The component id
- Other props are stored in `ref.customData`

## API

- `executeFunction(id, functionName, functionParams)`: Execute a function stored in the component's customData
- `waitAndExecuteFunction(id, interval, timeout, functionName, functionParams)`: Wait for the function to be available and then execute it

## Development

### Running Tests
```bash
npm test
```

### Running Example App
```bash
npm run example
```
Then open http://localhost:3000/example/index.html to see the demo (the server serves the project root so the built `dist` folder is accessible).

## License

MIT