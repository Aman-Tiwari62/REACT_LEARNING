import React, {useState, useEffect} from 'react'

function App() {
  const [count, setCount] = React.useState(0);
  console.log("renderingA...", count);
  useEffect(() => {
    console.log("useEffect called");
    setCount(count + 1);
    console.log("count after setCount...", count);
  }, []);
  console.log("renderingB...", count);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>click</button>
      <h1>{count}</h1>
    </div>
  )
}

export default App

