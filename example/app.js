const React = window.React;
const { createRoot } = window.ReactDOM;
import { LittleComponent, executeFunction } from '/dist/index.js';

function ChildComponent() {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const getCount = () => count;

  return React.createElement(
    'div',
    null,
    React.createElement('h2', null, 'Child Component'),
    React.createElement('p', null, 'Count: ' + count),
    React.createElement('button', { onClick: increment }, 'Increment'),
    React.createElement(LittleComponent, { id: 'child', increment, getCount })
  );
}

function ParentComponent() {
  const callChildFunction = () => {
    executeFunction('child', 'increment');
    const count = executeFunction('child', 'getCount');
    console.log('Child count:', count);
  };

  return React.createElement(
    'div',
    null,
    React.createElement('h1', null, 'Parent Component'),
    React.createElement(ChildComponent, null),
    React.createElement(
      'button',
      { onClick: callChildFunction },
      'Call Child Function'
    )
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(React.createElement(ParentComponent, null));