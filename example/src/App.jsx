import React, { useState } from 'react'
import { LittleComponent, executeFunction } from 'little-component'
import './App.css'

function ChildComponent() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const getCount = () => count

  const reset = () => {
    setCount(0)
  }

  return (
    <div className="component child-component">
      <h2>Child Component</h2>
      <div className="counter">
        <p>Count: <span className="count">{count}</span></p>
        <button onClick={increment}>Increment</button>
        <button onClick={reset}>Reset</button>
      </div>
      <LittleComponent
        id="child"
        increment={increment}
        getCount={getCount}
        reset={reset}
      />
    </div>
  )
}

function ParentComponent() {
  const callChildIncrement = () => {
    executeFunction('child', 'increment')
  }

  const callChildReset = () => {
    executeFunction('child', 'reset')
  }

  const getChildCount = () => {
    const count = executeFunction('child', 'getCount')
    alert(`Child count is: ${count}`)
  }

  return (
    <div className="component parent-component">
      <h2>Parent Component</h2>
      <div className="controls">
        <button onClick={callChildIncrement}>Call Child Increment</button>
        <button onClick={callChildReset}>Call Child Reset</button>
        <button onClick={getChildCount}>Get Child Count</button>
      </div>
      <ChildComponent />
    </div>
  )
}

function App() {
  return (
    <div className="app">
      <header>
        <h1>Little Component Demo</h1>
        <p>Parent-child communication without props drilling</p>
      </header>
      <main>
        <ParentComponent />
      </main>
      <footer>
        <p>Using <code>little-component</code> from npm</p>
      </footer>
    </div>
  )
}

export default App