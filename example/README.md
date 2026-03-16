# Little Component Example

This is a complete React application demonstrating how to use the `little-component` library for imperative communication between React components.

## Features Demonstrated

- **Parent-Child Communication**: Parent component can call methods on child components without props drilling
- **Imperative API**: Direct function calls between components using `executeFunction`
- **State Management**: Child component maintains its own state while allowing external control

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser to `http://localhost:5173`

## Usage

The example shows a parent component that can:
- Call `increment()` on the child component
- Call `reset()` on the child component
- Get the current count from the child component

All communication happens through the `LittleComponent` wrapper and `executeFunction` utility.

## API Reference

- `LittleComponent`: A React component that stores functions and data in its ref
- `executeFunction(id, functionName, params)`: Execute a stored function by component ID

## Learn More

- [Little Component on npm](https://www.npmjs.com/package/little-component)
- [Little Component on GitHub](https://github.com/fatbear17/little-component)