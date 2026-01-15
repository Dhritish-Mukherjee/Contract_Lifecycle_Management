import { createContext, useState } from "react"

export const AppContext = createContext();

const AppContextProvider = (props) => {

    const [user, setUser] = useState(null);
    const [token , setToken] = useState(null);
    const [role, setRole] = useState('creator');

    const value = {
        user, setUser,
        token , setToken,
        role, setRole
    }
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;