import React, {useContext} from 'react'
import UserContext from './context/UserContext';
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  const {user} = useContext(UserContext);
  console.log('App rendered');
  console.log('App returned');
  if(!user) return <h1>Loading...</h1>
  return (
    <>
      <h1>Context API.</h1>
      {/* <Login /> */}
      <Profile />
      <p>to see the flow see the console.</p>
    </>
  )
}

export default App

