import React from 'react'
import useMyHook from './hooks/useMyHook';

const App = () => {
  console.log('App component is rendered');
  const [count, setCount] = React.useState(0);
  const value = useMyHook(count);
  console.log("return jsx is executed");
  return (
    <div>
      <p>The value is: {value}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <p>Count: {count}</p>
    </div>
  )
}

export default App

