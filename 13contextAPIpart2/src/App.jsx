import React from 'react'
import useUserContext from './contexts/UserContext';

function App() {
  const {user} = useUserContext();
  if(!user) return <h1>Loading...</h1>
  return (
    <div>
      <h1>Welcome {user.username}</h1>
    </div>
  )
}

export default App

