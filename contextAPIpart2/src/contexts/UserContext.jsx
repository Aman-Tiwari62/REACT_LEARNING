import { createContext, useState, useEffect, useMemo, useContext } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({children})=>{
    const [user, setUser] = useState(null);
    useEffect(() => {
        async function fetchUser() {
            const response = await fetch('http://localhost:3000/');
            const data = await response.json();
            setUser(data);
        }
        fetchUser();
    }, [])

    const value = useMemo(()=>({user, setUser}), [user]);

    return (
        // NOte that we could have provided the values as: value={{user,setUser}}, doing this has a drawback:
        // whever UserContextProvider renders the object '{user,setUser}' is re-created. now the reference of the object changes and hence the components consuming the contexts re-renders even if the user didn't change. That's why it is advised to memoize the value.
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export default function useUserContext(){
    // this is custom hook.
    // you could have run the below line in a component and use the global contexts (user and setUser).This hook just simplifies.
    const context = useContext(UserContext);
    if(context===undefined){
        throw new Error("useUser must be used within a UserContextProvider");
    }
    return context;
}