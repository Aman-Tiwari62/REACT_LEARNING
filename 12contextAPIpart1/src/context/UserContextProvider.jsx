import React, {useEffect, useState} from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {
  console.log('UserContextProvider rendered')
    const [user, setUser] = useState(null)
    useEffect(() => {
        async function fetchUser() {
            const response = await fetch('http://localhost:3000/');
            const data = await response.json();
            setUser(data);
        }
        fetchUser();
    }, [])
    return(
        <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider