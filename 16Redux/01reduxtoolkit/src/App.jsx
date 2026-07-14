import React from 'react'
import {Button, Display} from './components/component.js'

function App() {
  console.log('app rendering..')
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <Display count={count} />
      <Button setCount={setCount} count={count} />
    </div>
  )
}

export default App

