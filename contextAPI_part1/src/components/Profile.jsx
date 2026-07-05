import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    console.log('Profile rendered')
    const {user} = useContext(UserContext)
    console.log('Profile returned')
    if (!user) return <h2>Loading....</h2>

    return <div>Welcome {user.username}</div>
}

export default Profile