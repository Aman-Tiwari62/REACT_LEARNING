import {useRef} from 'react'

const App = () => {
  const inputRef = useRef(null);
  return (
    <div>
      <h1>useRef</h1>
      <p ref={inputRef}>This is a paragraph.</p>
      <button onClick={() => inputRef.current.select()}>Focus Input</button>
    </div>
  )
}

export default App


